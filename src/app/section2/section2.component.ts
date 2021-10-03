import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styles: ['.white { color: white; }']
})
export class Section2Component {
  username:string=''
  showDetails:boolean=false
  btnClicks=[]
  onClick(){
    this.showDetails=!this.showDetails
    this.btnClicks.push(new Date())
  }
}
