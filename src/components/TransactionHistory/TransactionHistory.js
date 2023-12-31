import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';
import {generateRandomColor} from '../RandomColor.js'


export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead >
                <tr>
                <th className={css.head}>Type</th>
                <th className={css.head}>Amount</th>
                <th className={css.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id}
                        style={{backgroundColor: generateRandomColor()}}
                        >
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })
            } 
            </tbody>
        </table>
    )
}


TransactionHistory.propType = {
   items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })).isRequired,
}