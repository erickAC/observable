import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent],
  template: `
  <div  style="height: 100vh ;" class="d-flex flex-column justify-content-center align-items-center">
    <app-spinnner />
    <div>
      <button class="btn" (click)="show()">Exibir</button>
      <button class="btn" (click)="hide()">Ocultar</button>
    </div>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  private spinnerService = inject(SpinnerService);
  public spinner$ = this.spinnerService.getExibir();
  public exibir: boolean = false;

  constructor() {
    this.spinner$.subscribe(value => this.exibir = value);
  }

  private service = inject(SpinnerService);

  hide() {
    this.service.hide();
  }

  show() {
    this.service.show();
  }

}
