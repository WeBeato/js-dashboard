let burger_menu = document.querySelector('.burger_menu');
let sidebar = document.querySelector('aside');
let bg_cover = document.querySelector('.bg_cover');

burger_menu.addEventListener('click', () => {
    sidebar.classList.add('d_block')
    bg_cover.classList.add('d_block')
})

bg_cover.addEventListener('click', () => {
    sidebar.classList.remove('d_block')
    bg_cover.classList.remove('d_block')
})


let dateSeries = [30, 40, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15]
let dateCategories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002]


var options = {
    chart: {
        type: 'area',
        fontFamily: 'Raleway',
        height: 350,
    },
    series: [{
        name: 'فروش',
        data: dateSeries
    }],
    xaxis: {
        categories: dateCategories,
        axisBorder: {
            show: true,
            color: '#31353F',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: '353E4D'
            }
        }

    },
    yaxis: {
        labels: {
            style: {
                colors: '#353E4D'
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#3A6FF8'],
    fill: {
        colors: ['#3A6FF8'],

        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.9,
            stops: [0, 100]
        }
    },
}

let chartBitcoinBtc = document.querySelector("#chart_bitcoin_btc")
var chart = new ApexCharts(chartBitcoinBtc, options);
if (chartBitcoinBtc) {
    chart.render();
}

let btnOne = document.querySelector('#one_btn')

btnOne?.addEventListener('click', function (e) {

    console.log('click')
    chart.updateSeries([{
        name: 'فروش',
        data: [340, 460, 305, 500, 490, 600, 570, 591, 325, 212, 314, 415]
    }])
})

let btnSeconde = document.querySelector('#seconde_btn')

btnSeconde?.addEventListener('click', function (e) {

    console.log('click')
    chart.updateSeries([{
        name: 'test',
        data: [415, 460, 235, 250, 249, 360, 370, 391, 225, 112, 114, 115]
    }])

})