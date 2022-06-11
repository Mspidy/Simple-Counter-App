import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mark1';

  countNumber = 0;

  resetBtn(){
    this.countNumber=0;
  }

  increaseCount(){
    this.countNumber+=1;
  }

  decreaseCount(){
    this.countNumber=this.countNumber -1;
    if(this.countNumber>0){
      this.countNumber=0;
    }
  }
}
