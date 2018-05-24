import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatSortModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  let expectedTitle = "WELCOME TO MY ANGULAR5 PORTFOLIO";

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
        ],
        imports: [
          BrowserModule,
          BrowserAnimationsModule,
          MatButtonModule,
          MatCheckboxModule,
          MatTableModule,
          MatFormFieldModule,
          MatPaginatorModule,
          MatInputModule,
          MatSortModule,
          MatCardModule
        ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have as title ' + expectedTitle, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(expectedTitle);
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(expectedTitle);
  }));
  it('should render table', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table')).toBeTruthy();
  }));
  it('should render id column', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table > thead > tr > th.cdk-column-id')).toBeTruthy();
  }));
  it('should render name column', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table > thead > tr > th.cdk-column-name')).toBeTruthy();
  }));
  it('should render progress column', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table > thead > tr > th.cdk-column-progress')).toBeTruthy();
  }));
  it('should render color column', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('table > thead > tr > th.cdk-column-color')).toBeTruthy();
  }));
});
