import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
    selector: 'mesp-list',
    templateUrl: 'mesp-list.component.html',
    styleUrls: ['mesp-list.component.scss']
})
export class MespListComponent {
    @Input() private filteredItems: any[];
    @Input() private icon :string;
    @Input() private idField: string;
    
    @Output() onDelete = new EventEmitter<string>();

    delete(id: string) {
        this.onDelete.emit(id);
    }
}
