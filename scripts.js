document.getElementById('modalBtn').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});
// Sortable/Searchable Table
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("sortable-table");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

if (document.getElementById('sortable-table')) {
    document.getElementById('search').addEventListener('keyup', function () {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById('search');
        filter = input.value.toUpperCase();
        table = document.getElementById("sortable-table");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }
                }
            }
        }
    });
}
var barCtx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Expenses',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var lineCtx1 = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(lineCtx1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Leads',
            data: [3, 10, 5, 2, 20],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx2 = document.getElementById('doughnut').getContext('2d');
var doughnut = new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: ['AAPL', 'MSFT', 'GOOGLE', 'AMZN', 'TSLA', 'NVDA', 'FB', 'BRK.B', 'JPM', 'V'],
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(0, 128, 128, 0.6)',
                'rgba(255, 105, 180, 0.6)',
                'rgba(165, 42, 42, 0.6)'
            ],
            data: [142.65, 268.14, 2715.25, 3323.34, 684.9, 835.12, 325.08, 299.45, 150.76, 243.55],
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});

var ctx3 = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['AAPL', 'MSFT', 'GOOGLE', 'AMZN', 'TSLA', 'NVDA', 'FB', 'BRK.B', 'JPM', 'V'],
        datasets: [{
            label: 'Stock Prices',
            data: [142.65, 268.14, 2715.25, 3323.34, 684.9, 835.12, 325.08, 299.45, 150.76, 243.55],
            backgroundColor: [
                'rgba(173, 216, 230, 0.6)',
                'rgba(255, 127, 80, 0.6)',
                'rgba(189, 183, 107, 0.6)',
                'rgba(60, 179, 113, 0.6)',
                'rgba(106, 90, 205, 0.6)',
                'rgba(139, 0, 139, 0.6)',
                'rgba(255, 99, 71, 0.6)',
                'rgba(218, 165, 32, 0.6)',
                'rgba(70, 130, 180, 0.6)'
            ],
            //  rgba(112, 128, 144, 0.6)
            borderColor: [
                'rgba(173, 216, 230, 1)',
                'rgba(255, 127, 80, 1)',
                'rgba(189, 183, 107, 1)',
                'rgba(60, 179, 113, 1)',
                'rgba(106, 90, 205, 1)',
                'rgba(139, 0, 139, 1)',
                'rgba(255, 99, 71, 1)',
                'rgba(218, 165, 32, 1)',
                'rgba(70, 130, 180, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                    }
                }
            }
        }
    }
});

