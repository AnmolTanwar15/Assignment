import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ChartOneComponent } from '../shared/chart-one/chart-one.component';
import { ChartTwoComponent } from '../shared/chart-two/chart-two.component';
import { NewMrrComponent } from '../shared/new-mrr/new-mrr.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  date = (new Date().getFullYear()) +'-0'+ (new Date().getMonth() + 1) +'-'+ (new Date().getDate());
  @ViewChild(ChartOneComponent) chartone!: ChartOneComponent;
  @ViewChild(ChartTwoComponent) charttwo!: ChartTwoComponent;
  @ViewChild(NewMrrComponent) changeAmount!: NewMrrComponent;
  distributeData() {
    this.chartone.destroy()
    this.chartone.createChart()
    this.charttwo.destroy()
    this.charttwo.createChart()
    this.changeAmount.changeAmount()
  }
}
