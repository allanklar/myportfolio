var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['More Storage', 'Enhanced Security', 'Personalized Settings', 'No Ads', 'Faster Upload/download'],
        datasets: [{
            label: '% of Voters',
            data: [83, 88, 44, 5, 6],
            backgroundColor: [
                'rgba(237, 34, 36, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('doughnut');
    var doughnut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Non-gamers', 'Gamers', ],
            datasets: [{
                label: '# of Votes',
                data: [39, 61],
                backgroundColor: [
                    'rgba(237, 34, 36, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {

        }
    });
