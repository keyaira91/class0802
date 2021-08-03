import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

showColor: boolean = false;
changeColor() :void {
  this.showColor = !this.showColor;
}



caption: string = "Show Text"
showInfo: boolean = false;
changeData() :void {
  this.showInfo = !this.showInfo;
}


}
