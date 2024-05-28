import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {

    private exibir = new BehaviorSubject<boolean>(false);

    getExibir() {
        return this.exibir.asObservable();
    }

    hide() {
        this.exibir.next(false);
    }

    show() {
        this.exibir.next(true);
    }
 
}