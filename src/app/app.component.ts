import { Component,Renderer2 } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private render:Renderer2){

  }
  courseGoals=[
    {title:'Master Angular Styling',isActivated:true},
    {title:'Understand Angular Animations',isActivated:false},
    {title:'Master Angular Animations',isActivated:false},
    
  ]
  title='My Quotes'
  isFavorite=false;
  showBoring(element:HTMLElement){
   // element.style.display='block';
   this.render.setStyle(element,'display','block')
  
  }

}
