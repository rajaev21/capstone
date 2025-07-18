const TransactionTable = ({
  transaction,
  setTransaction,
  fetchTransaction,
  encrypt,
  decrypt,
  goto,
  deleteOrder,
}) => {
  function unixToDate(unix) {
    const date = new Date(unix * 1000);
    const yy = date.getFullYear();
    const mm = date.getMonth();
    const dd = date.getDay();

    const format = `${dd}-${mm}-${yy}`;

    return format;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Deadline</th>
          <th>Name</th>
          <th>OrderDate</th>
          <th>Order ID</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(transaction) &&
          transaction.map((item, index) => (
            <tr key={index}>
              <td>{unixToDate(item.deadline)} {item.deadline}</td>
              <td>
                {item.firstname} {item.lastname}
              </td>
              <td>{item.order_date}</td>
              <td>{item.order_id}</td>
              <td>{item.status}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => goto(item.transaction_id)}
                >
                  View more
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
