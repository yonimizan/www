import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "אהלן אהלן";

    constructor(private utility: UtilityService) {}

    ngOnInit() {
        this.utility.setStyling();
    }
}
