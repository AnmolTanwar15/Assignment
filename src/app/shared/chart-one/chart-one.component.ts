import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { AppConstant } from 'src/app/app-constant';

@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.scss']
})
export class ChartOneComponent implements OnInit {
  chart: any;

  // chartdata = AppConstant

  createChart() {
    this.chart = new Chart("MyChart1", {
      type: 'bubble', //this denotes tha type of chart
      data: {
        datasets: AppConstant.chartData[0].data
      },
      options: {
        plugins: {
          legend: {
            display: true, // Show the legend
            labels: {
              usePointStyle: true,
            },
            position: 'bottom' // Place the legend at the bottom
          }
        }
      }
    });
  }
  ngOnInit(): void {
    this.createChart();
  }

  destroy() {
    this.chart.destroy()
  }
}
