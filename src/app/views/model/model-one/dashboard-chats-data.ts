import { Injectable } from '@angular/core';
import { getStyle, hexToRgba, rgbToHex } from '@coreui/utils/src';
export interface IChartProps {
  data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;

  [propName: string]: any;
}

@Injectable({
  providedIn: 'any',
})
export class DashboardChartsData {
  constructor() {
    this.initMainChart();
  }

  public mainChart: IChartProps = {};

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initMainChart(period: string = 'Month') {
    const brandUsuarios = '#ffe082';
    const brandProveedores = '#90caf9';
    const brandUsuariosbg = hexToRgba('#ffe082', 20) ?? '#ffe082';
    const brandProveedoresbg = hexToRgba('#90caf9', 20) ?? '#90caf9';
    const brandVentas = '#A5D6A7 ';
    const brandGanancias = '#FFE082 ';
    const brandsatisfaccion = '#FFCCBC ';
    const brandDanger = '#FFCCBC ';

    // mainChart
    this.mainChart['elements'] = period === 'Month' ? 12 : 27;
    this.mainChart['Data1'] = [];
    this.mainChart['Data2'] = [];
    this.mainChart['Data6'] = [];

    // generate random values for mainChart
    //lineal gradient
    let width = 0;
    let height = 0;
    let gradient = 0;
    function getGradient(ctx: any, chartArea: any) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        // gradient.addColorStop(0, Utils.CHART_COLORS.blue);
        // gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
        // gradient.addColorStop(1, Utils.CHART_COLORS.red);
      }

      return gradient;
    }
    //lineal gradient
    for (let i = 0; i <= this.mainChart['elements']; i++) {
      this.mainChart['Data1'].push(this.random(50, 240));
      this.mainChart['Data2'].push(this.random(20, 160));

      this.mainChart['Data6'].push(65);
    }

    let labels: string[] = [];
    if (period === 'Month') {
      labels = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ];
    } else if (period === 'Year') {
      labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    } else if (period === 'week') {
      labels = ['1/4', '2/4', '3/4', '4/4'];
    } else {
      /* tslint:disable:max-line-length */
      const daily = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
      ];
      labels = daily;
    }

    const colors = [
      {
        // brandInfo
        backgroundColor: brandUsuariosbg,
        borderColor: brandUsuarios,
        pointHoverBackgroundColor: brandUsuarios,
        borderWidth: 2,
        fill: true,
      },
      {
        // brandInfo
        backgroundColor: brandProveedoresbg,
        borderColor: brandProveedores,
        pointHoverBackgroundColor: brandProveedores,
        borderWidth: 2,
        fill: true,
      },

      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger || '#f86c6b',
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
      },
    ];

    const datasets = [
      {
        data: this.mainChart['Data1'],
        label: 'Usuarios',
        ...colors[0],
      },
      {
        data: this.mainChart['Data2'],
        label: 'Proveedores',
        ...colors[1],
      },

      {
        data: this.mainChart['Data6'],
        label: 'umbral',
        ...colors[2],
      },
    ];

    const plugins = {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          labelColor: function (context: any) {
            return {
              backgroundColor: context.dataset.borderColor,
            };
          },
        },
      },
    };

    const options = {
      maintainAspectRatio: false,
      plugins,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 250,
          ticks: {
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };

    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels,
    };
  }
}
