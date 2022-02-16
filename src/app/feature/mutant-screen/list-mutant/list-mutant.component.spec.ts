import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { ListMutantComponent } from './list-mutant.component';

describe('MutantComponent', () => {
  let component: ListMutantComponent;
  let fixture: ComponentFixture<ListMutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMutantComponent ],
      imports: [HttpClientTestingModule, ToastModule, RouterTestingModule], 
      providers: [ListMutantComponent, MessageService]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
