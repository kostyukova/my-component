import { Component,Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {IPageChangeEvent} from '@covalent/core';
@Component({
    moduleId: module.id,
    selector: 'mesp-paging',
    templateUrl: 'mesp-paging.component.html',
    styleUrls: ['mesp-paging.component.scss']
})
export class MespPagingComponent {
    @Input() private pageSize: number;
    @Input() private page: number;
    @Input() private total: number;

    constructor(private translate: TranslateService) { }

    @Output() onPageChange = new EventEmitter<IPageChangeEvent>();

    pageChange(event: IPageChangeEvent) {
		this.pageSize = event.pageSize;
        this.page = event.page;
        this.onPageChange.emit(event);
	}
}
