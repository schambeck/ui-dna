import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, tap } from 'rxjs';
import {Stats} from "../../../shared/model/stats";
import {StatsService} from "../../../shared/service/stats.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  stats$ = this.load();
  previousStats?: Stats;
  loading = false;
  styleMutant = "var(--background-color)";
  styleHuman = "var(--background-color)";
  styleRatio = "var(--background-color)";

  constructor(private titleService: Title, private service: StatsService) {
    this.titleService.setTitle("Stats");
  }

  load(): Observable<Stats> {
    this.loading = true;
    return this.service.stats().pipe(tap({
      next: stats => this.next(stats),
      error: () => this.loading = false,
      complete: () => this.loading = false
    }));
  }

  next(stats: Stats): void {
    this.loading = false;
    if (this.previousStats) {
      if (stats.countMutantDna !== this.previousStats?.countMutantDna) {
        this.styleMutant = "lightblue";
      }
      if (stats.countHumanDna !== this.previousStats?.countHumanDna) {
        this.styleHuman = "lightblue";
      }
      if (stats.ratio !== this.previousStats?.ratio) {
        this.styleRatio = "lightblue";
      }
    }

    (async () => {
      await new Promise(f => setTimeout(f, 1000));
      this.styleMutant = "var(--background-color)";
      this.styleHuman = "var(--background-color)";
      this.styleRatio = "var(--background-color)";
    })();
    this.previousStats = stats;
  }

}
