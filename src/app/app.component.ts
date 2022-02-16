import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// LogRocket.init('hhu6kg/schambeck');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'DNA';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
