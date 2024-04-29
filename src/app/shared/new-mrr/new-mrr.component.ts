import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-mrr',
  templateUrl: './new-mrr.component.html',
  styleUrls: ['./new-mrr.component.scss']
})
export class NewMrrComponent implements OnInit {
  digit: any;


  ngOnInit(): void {
    this.changeAmount()
  }

  changeAmount() {
    this.digit = Math.floor(Math.random() * 30000)
  }
}
