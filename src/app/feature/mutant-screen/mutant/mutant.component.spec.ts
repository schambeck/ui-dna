import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { MutantComponent } from './mutant.component';

describe('MutantComponent', () => {
  let component: MutantComponent;
  let fixture: ComponentFixture<MutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantComponent ],
      imports: [HttpClientTestingModule, ToastModule], 
      providers: [MutantComponent, MessageService]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
