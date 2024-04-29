import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { AppConstant } from 'src/app/app-constant';

@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.scss']
})
export class ChartTwoComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {
    this.chart = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart,

      data: {// values on X-Axis
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug',
          'Sep-Oct', 'Nov-Dec'],
        datasets: AppConstant.chartData[1].data
      },
      options: {
        aspectRatio: 1.9,
        plugins: {
          datalabels: {
            anchor: 'end',
            color: 'green',
            font: {
              size: 20,
              weight: 'bold'
            },
          },
          legend: {
            display: false, // Show the legend
            position: 'bottom' // Place the legend at the bottom
          }
        }
      }

    });
  }

  destroy() {
    this.chart.destroy()
  }

}
