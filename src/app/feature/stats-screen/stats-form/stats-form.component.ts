import { Component, OnInit, Input } from '@angular/core';
import {Stats} from "../../../shared/model/stats";

@Component({
  selector: 'app-stats-form',
  templateUrl: './stats-form.component.html',
  styleUrls: ['./stats-form.component.css']
})
export class StatsFormComponent implements OnInit {

  @Input()
  stats?: Stats | null;

  constructor() { }

  ngOnInit(): void {
  }

}
