import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
@Input('goal')goal:any;
  constructor() { }

  ngOnInit() {
  }

}
