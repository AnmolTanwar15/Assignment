import { NgModule } from "@angular/core";
import { WinRateComponent } from "./win-rate/win-rate.component";
import { WinsComponent } from "./wins/wins.component";
import { NewMrrComponent } from './new-mrr/new-mrr.component';
import { PageViewsComponent } from './page-views/page-views.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';

const components: Array<any> = [
    WinsComponent,
    WinRateComponent,
    NewMrrComponent,
    PageViewsComponent,
    ChartOneComponent,
    ChartTwoComponent,
]
@NgModule({
    declarations: [
        ...components,
    ],
    exports: [
        ...components
    ]
})

export class SharedModule { }