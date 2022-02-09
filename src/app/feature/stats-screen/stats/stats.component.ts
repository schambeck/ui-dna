import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {Stats} from "../../../shared/model/stats";
import {StatsService} from "../../../shared/service/stats.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {
  stats?: Stats;
  loading: boolean = false;
  stats$?: Subscription;

  constructor(private service: StatsService) {
  }

  ngOnInit() {
    this.loading = true;
    this.stats$ = this.service.stats().subscribe(stats => {
      this.loading = false;
      this.stats = stats;
    });
  }

  ngOnDestroy(): void {
    this.stats$?.unsubscribe();
  }

}
