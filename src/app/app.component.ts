import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent],
  template: `
    <app-spinnner />
    <button (click)="show()">Exibir</button>
    <button (click)="hide()">Ocultar</button>
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
