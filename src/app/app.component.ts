import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals=[
    {title:'Master Angular Styling',isActivated:true},
    {title:'Understand Angular Animations',isActivated:false},
    {title:'Master Angular Animations',isActivated:false},
    
  ]
  title='My Quotes'
  isFavorite=false;

}
