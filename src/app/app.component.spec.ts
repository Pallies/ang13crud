import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let template: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement as HTMLElement;
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create the spinner', () => {
    const spinner = template.querySelector('app-spinner');
    expect(spinner).toBeTruthy();
  });
  
  it('should create the toast', () => {
    const toast = template.querySelector('app-toast');
    expect(toast).toBeTruthy();
  });

  it(`should have as navbar ' Create Product and Products'`, () => {
    const link = template.querySelectorAll('a');
    const textLink: string[] = [];
    link.forEach((l) => textLink.push(l.innerHTML.trim()));
    expect(link.length).toEqual(2);
    expect(textLink).toContain('Create Product');
    expect(textLink).toContain('Products');
  });

});
