import { Component, inject } from "@angular/core";
import { SpinnerService } from "./spinner.service";
import { Subject } from "rxjs";

@Component({
    selector: 'app-spinnner',
    standalone: true,   
    template: `
    @if (exibir) {
        <span>Carregando...</span>
    }
    
    `
})
export class SpinnerComponent {

    service = inject(SpinnerService);
    visible = this.service.getExibir();
    public exibir?: boolean;

    constructor() {
        this.visible.subscribe(value => this.exibir = value);
    }

}