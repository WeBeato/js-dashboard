let burger_menu = document.querySelector('.burger_menu');
let sidebar = document.querySelector('aside');
let bg_cover = document.querySelector('.bg_cover');
let btn_notification = document.querySelector('#btn_notification')
let list_notification = document.querySelector('#list_notification')
let full_name_user = document.querySelector('.full_name_user')
let list_account_user = document.querySelector('.list_account_user')
let ligdthModeBtn = document.querySelector('#ligthModeBtn')
let darkModeBtn = document.querySelector('#darkModeBtn')

burger_menu.addEventListener('click', () => {
    sidebar.classList.add('d_block')
    bg_cover.classList.add('d_block')
})

bg_cover.addEventListener('click', () => {
    sidebar.classList.remove('d_block')
    bg_cover.classList.remove('d_block')
})


let dateSeries = [130, 140, 135, 110, 100, 100, 90, 100, 125, 112, 114, 115]
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

let btn1h = document.querySelector('#oneH')
let btn3h = document.querySelector('#threeH')
let btn1d = document.querySelector('#oneD')

btn1h?.addEventListener('click', function (e) {
    btn1h.classList.add('active_btn')
    btn3h.classList.remove('active_btn')
    btn1d.classList.remove('active_btn')

    chart.updateSeries([{
        name: 'فروش',
        data: dateSeries
    }])
})

btn3h?.addEventListener('click', function (e) {
    btn1h.classList.remove('active_btn')
    btn3h.classList.add('active_btn')
    btn1d.classList.remove('active_btn')

    chart.updateSeries([{
        name: 'فروش',
        data: [340, 460, 305, 500, 490, 600, 570, 591, 325, 212, 314, 415]
    }])
})


btn1d?.addEventListener('click', function (e) {
    btn1h.classList.remove('active_btn')
    btn3h.classList.remove('active_btn')
    btn1d.classList.add('active_btn')

    chart.updateSeries([{
        name: 'فروش',
        data: [415, 460, 235, 250, 249, 360, 370, 391, 225, 112, 114, 115]
    }])

})

btn_notification.addEventListener('click', (e) => {
    if (list_notification.classList.contains('active_notif')) {
        list_notification.classList.remove('active_notif')
    } else {
        list_notification.classList.add('active_notif')

    }
})

full_name_user.addEventListener('click', () => {
    if (list_account_user.classList.contains('activ_account')) {
        list_account_user.classList.remove('activ_account')
    } else {
        list_account_user.classList.add('activ_account')

    }
})

const setThemeMode = (themeMode) => {
    document.documentElement.setAttribute('data-theme', themeMode)

    ligdthModeBtn.classList.toggle('active_darkmode', themeMode === 'light')
    darkModeBtn.classList.toggle('active_darkmode', themeMode === 'dark')
    localStorage.setItem('themeMode', themeMode)
}

ligdthModeBtn.addEventListener('click', () => setThemeMode('light'))
darkModeBtn.addEventListener('click', () => setThemeMode('dark'))

let saveThemeMode = localStorage.getItem('themeMode')
setThemeMode(saveThemeMode || 'light')