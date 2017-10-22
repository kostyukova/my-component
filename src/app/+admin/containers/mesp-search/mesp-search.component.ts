import { Component, Output, EventEmitter } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    moduleId: module.id,
    selector: 'mesp-search',
    templateUrl: 'mesp-search.component.html',
    styleUrls: ['mesp-search.component.scss']
})
export class MespSearchComponent {
	private selectable = true;
	private selectedRows: any[] = [];

    constructor(private translate: TranslateService) { }

    @Output() onSearch = new EventEmitter<string>();
    @Output() onClean = new EventEmitter();

    search(query: string) {
        this.onSearch.emit(query);
    }

    clean() {
        this.onClean.emit();
    }
}
