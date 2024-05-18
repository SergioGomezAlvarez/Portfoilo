document.getElementById('routeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const datum = document.getElementById('datum').value;
    const ritnr = document.getElementById('ritnr').value;
    const lijn = document.getElementById('lijn').value;
    const omschrijving = document.getElementById('omschrijving').value;
    const omloopnr = document.getElementById('omloopnr').value;
    const eerste_tijd = document.getElementById('eerste_tijd').value;
    const van_halte = document.getElementById('van_halte').value;
    const laatste_tijd = document.getElementById('laatste_tijd').value;
    const naar_halte = document.getElementById('naar_halte').value;

    // Create a new row
    const table = document.getElementById('routesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Add cells to the row
    newRow.insertCell(0).innerText = datum;
    newRow.insertCell(1).innerText = ritnr;
    newRow.insertCell(2).innerText = lijn;
    newRow.insertCell(3).innerText = omschrijving;
    newRow.insertCell(4).innerText = omloopnr;
    newRow.insertCell(5).innerText = eerste_tijd;
    newRow.insertCell(6).innerText = van_halte;
    newRow.insertCell(7).innerText = laatste_tijd;
    newRow.insertCell(8).innerText = naar_halte;

    // Clear form fields
    document.getElementById('routeForm').reset();
});
