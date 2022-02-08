import { Component, OnInit, Input } from '@angular/core';
import {Stats} from "../../../shared/model/stats";

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {

  @Input()
  stats?: Stats | null;

  constructor() { }

  ngOnInit(): void {
  }

}
