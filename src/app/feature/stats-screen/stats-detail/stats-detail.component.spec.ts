import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StatsDetailComponent } from './stats-detail.component';
import { StatsService } from '../../../shared/service/stats.service';

describe('StatsDetailComponent', () => {
  let component: StatsDetailComponent;
  let fixture: ComponentFixture<StatsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsDetailComponent ],
      imports: [HttpClientTestingModule], 
      providers: [StatsService]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
