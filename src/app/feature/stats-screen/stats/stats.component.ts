import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import {Stats} from "../../../shared/model/stats";
import {StatsService} from "../../../shared/service/stats.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  stats?: Stats;
  previousStats?: Stats;
  loading: boolean = false;
  stats$?: Subscription;
  styleMutant = "var(--background-color)";
  styleHuman = "var(--background-color)";
  styleRatio = "var(--background-color)";

  constructor(private titleService: Title, private service: StatsService) {
    this.titleService.setTitle("Stats");
  }

  ngOnInit() {
    this.loading = true;
    this.stats$ = this.service.stats().subscribe(stats => {
      this.loading = false;
      this.stats = stats;
      if (this.previousStats) {
        if (this.stats.countMutantDna !== this.previousStats?.countMutantDna) {
          this.styleMutant = "lightblue";
        }
        if (this.stats.countHumanDna !== this.previousStats?.countHumanDna) {
          this.styleHuman = "lightblue";
        }
        if (this.stats.ratio !== this.previousStats?.ratio) {
          this.styleRatio = "lightblue";
        }
      }

      (async () => {
        await new Promise(f => setTimeout(f, 1000));
        this.styleMutant = "var(--background-color)";
        this.styleHuman = "var(--background-color)";
        this.styleRatio = "var(--background-color)";
      })();
      this.previousStats = this.stats;
    });
  }

  ngOnDestroy(): void {
    this.stats$?.unsubscribe();
  }

}
