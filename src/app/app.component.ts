import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public href: string = window.location.href;

  constructor(private router: Router) {
    console.log(this.href.search("admin"));


  }

}
