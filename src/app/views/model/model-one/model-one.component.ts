import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from './dashboard-chats-data';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-model-one',
  templateUrl: './model-one.component.html',
  styleUrls: ['./model-one.component.scss'],
})
export class ModelOneComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData) {}
  usuarios: any;
  proveedores: any;
  ventas: any;
  ganancias: any;
  satisfaccion: any;

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pichincha',
      usage: 80,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: 'Hace 10 sec',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Napo',
      usage: 70,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: 'Hace 5 minutos ',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Loja',
      usage: 60,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: 'Hace 1 hora',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Guayas',
      usage: 94,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Ayer',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Cotopaxi',
      usage: 47,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Semana pasada',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Los Rios',
      usage: 20,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Hace un mes',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
    },
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month'),
  });

  ngOnInit(): void {
    this.initCharts();
    this.usuarios = Math.floor(Math.random() * 589);
    this.proveedores = Math.floor(Math.random() * 100);
    this.ventas = Math.floor(Math.random() * 1894);
    this.ganancias = Math.floor(Math.random() * 90);
    this.satisfaccion = Math.floor(Math.random() * 1500);
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.usuarios = Math.floor(Math.random() * 589);
    this.proveedores = Math.floor(Math.random() * 100);
    this.ventas = Math.floor(Math.random() * 1894);
    this.ganancias = Math.floor(Math.random() * 30);
    this.satisfaccion = Math.floor(Math.random() * 1500);
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
