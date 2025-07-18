  function exportToExcel() {
    let table = document.getElementById("summaryTable");
    let wb = XLSX.utils.table_to_book(table, { sheet: "Summary" });
    XLSX.writeFile(wb, "Infineon_Summary.xlsx");
  }
  