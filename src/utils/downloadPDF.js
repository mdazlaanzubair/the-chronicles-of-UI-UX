export const downloadPDF = (url, fileName) => {
  // Create a temporary link element
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;

  // Trigger the click event on the link
  if (document.createEvent) {
    const event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    link.dispatchEvent(event);
  } else {
    link.click();
  }
};
