const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#studentTable tbody tr");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");

function filterRows() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  tableRows.forEach((row) => {
    const rowText = Array.from(row.cells)
      .map((cell) => cell.textContent)
      .join(" ")
      .toLowerCase();

    const matches = rowText.includes(query);

    row.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount !== 0;
  resultCount.textContent = `Showing ${visibleCount} of ${tableRows.length} students`;
}

searchInput.addEventListener("input", filterRows);

filterRows();