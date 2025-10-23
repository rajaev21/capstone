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
