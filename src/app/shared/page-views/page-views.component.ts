import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { AppConstant } from 'src/app/app-constant';


@Component({
  selector: 'app-page-views',
  templateUrl: './page-views.component.html',
  styleUrls: ['./page-views.component.scss']
})
export class PageViewsComponent implements OnInit {
  chartType: any
  chart: any;
  createChart() {
    this.chart = new Chart("MyChart", {
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            color: 'green',
            anchor: 'center',
            font: {
              size: 0,
              weight: 'bold',
              family: 'Times new Roman'
            },

          }, subtitle: {
            display: true,
            // text: 'This is a Pie Chart Subtitle'
          }, legend: {
            display: true,
            position: 'left'
          }
        },
        // aspectRatio: 0.9,
        maintainAspectRatio: false,
      },
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: [],
        datasets: AppConstant.chartData[2].data
      }
    });
  }
  ngOnInit(): void {
    this.createChart()
  }
}
