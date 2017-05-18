import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  slides: any[];

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    // this.slides = [1,2]
    this.getTest(); //comment this and uncomment the line above to see it's working
  }

  getTest() {
    this.appService.getTest()
      .subscribe(
        (response: any[]) => {
          console.log(response);
          this.slides = response;
        },
        (error) => console.log(error)
      );
  }
}
