import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePDF = async (elementToPrintId, id) => {
  const element = document.getElementById(elementToPrintId);

  const buttons = element.querySelectorAll("button, .no-print");
  buttons.forEach((btn) => (btn.style.display = "none"));

  if (!element) {
    throw new Error(`Element with id ${elementToPrintId} not found`);
  }
  
  const canvas = await html2canvas(element, { scale: 2 });
  const data = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });
  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`pdf_${id}.pdf`);

  buttons.forEach((btn) => (btn.style.display = ""));
};
