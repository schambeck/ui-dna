import {Component, OnInit} from '@angular/core';
import {Stats} from "../../../shared/model/stats";
import {StatsService} from "../../../shared/service/stats.service";

@Component({
  selector: 'app-stats-detail',
  templateUrl: './stats-detail.component.html',
  styleUrls: ['./stats-detail.component.css']
})
export class StatsDetailComponent implements OnInit {
  stats?: Stats;
  loading: boolean = false;

  constructor(private service: StatsService) {
  }

  ngOnInit() {
    this.loading = true;
    this.service.find().subscribe(stats => {
      this.loading = false;
      this.stats = stats;
    });
  }

}
