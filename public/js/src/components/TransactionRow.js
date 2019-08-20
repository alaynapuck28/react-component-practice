function TransactionRow(props) {
  return (
    <tr>
      <td>{props.orderId}</td>
      <td>{props.orderDate}</td>
      <td>{props.orderTime}</td>
      <td>{props.orderAmount}</td>
    </tr>
  );
}
