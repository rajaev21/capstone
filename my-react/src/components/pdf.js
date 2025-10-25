import html2canvas from "html2canvas";

export const generatePDF = async (elementToPrintId, id) => {
  const wholeDiv = document.getElementById(elementToPrintId);
  const duplicate = wholeDiv.cloneNode(true);

  if (!wholeDiv) {
    throw new Error(`Element with id ${elementToPrintId} not found`);
  }

  const noPrintElements = wholeDiv.querySelectorAll(".no-print");
  noPrintElements.forEach((element) => element.classList.add("d-none"));

  const canvas = await html2canvas(wholeDiv, { scale: 2 });
  const data = canvas.toDataURL("image/jpeg", 1.0);

  const link = document.createElement("a");
  link.href = data;
  link.download = `transaction_${id}.jpeg`;
  link.click();

  noPrintElements.forEach((element) => element.classList.remove("d-none"));
};

export const printReceipt = (customerDetails, payments) => {
  const tableData = customerDetails
    .map(
      (item) => `
              <tr>
                <td>${item.brand}-${item.type}-${item.color}</td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>${item.total}</td>
              </tr>
                `
    )
    .join("");
  const payment = payments
    .map((item) => `<div>${item.formatted_date}--- &#8369;${item.payment}</div>`)
    .join("");

  const grandTotal = payments
    .map((item) => item.payment)
    .reduce(
      (x, y) => x - y,
      customerDetails[0].grand_total - customerDetails[0].discount
    );

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Receipt</title>
        <style>
          body {
            font-size: 11px;
            width: 80mm;
          }
          table {
            font-size: 11px;
          }
        </style>
      </head>
      <body>
        <div>
          <div>
            <div>FABRIK JARO SALES</div>
            <div>E. Lopez st. Jaro Iloilo City, Philippines</div>
          </div>
          <hr />
          <div>Date:${new Date().toLocaleString()}</div>
          <div>Receipt #: <span id="receiptNo">${
            payments[payments.length - 1].id
          }</span></div>
          <hr />
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Size</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${tableData}
            </tbody>
          </table>
          <hr />
          <div>Total: ${customerDetails[0].subTotal}</div>
          <div>Discount: ${customerDetails[0].discount}</div>
          <hr />
          <div>Payments: ${payment}</div>
          <hr />
          <div>Balance: ${grandTotal} </div>
          <hr />
          <div>
            Thank you for shopping!<br />
            Visit again soon.
          </div>
        </div>
      </body>
    </html>

  `);
  printWindow.focus();
  printWindow.print();
  printWindow.close();
};
