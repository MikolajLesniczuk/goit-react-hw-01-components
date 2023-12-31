import PropTypes from 'prop-types';
import s from './Transactions.module.css'

export const TransactionHistory = ({items}) => {
return (

    <table className={s.transaction}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>

    {items.map(({id,type,amount,currency}) =>( 
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   ) )}
  </tbody>
</table>


)

}

TransactionHistory.prototype = {
  items : PropTypes.shape({
id: PropTypes.string,
type: PropTypes.string,
amount: PropTypes.number,
currency: PropTypes.string,

  })
}