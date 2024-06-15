import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(private titleservice: Title) {
    //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }
}
