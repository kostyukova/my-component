import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TdMediaService, CovalentSearchModule, TdLoadingService, TdDialogService} from '@covalent/core';
import {IPageChangeEvent} from '@covalent/core';
import {MdSnackBar} from '@angular/material';
import {GroupsApi as GroupService} from '../../api/GroupsApi';
import {Group} from '../../model/Group';
import {TranslateService} from "@ngx-translate/core";
import {MessageService, MessageLevel} from 'app/utils/message.service';

@Component({
	selector: 'app-admin-group',
	templateUrl: './group.component.html',
	styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit, AfterViewInit {
	private query = '';
	private pageSize: number;
	private page: number;
	private items: Group[] = [];

	constructor(private _changeDetectorRef: ChangeDetectorRef, 
				public media: TdMediaService, 
				private groupService: GroupService,
				private _loadingService: TdLoadingService,
        private _dialogService: TdDialogService,
        private _snackBarService: MdSnackBar,
				private messageService: MessageService,
				private translate: TranslateService) {
		this.pageSize = 5;
		this.page = 1;
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.media.broadcast();
		this._changeDetectorRef.detectChanges();
		this.onSearch(this.query);
	}

	onClean(){
		this.onSearch('');
	}	

	onSearch(query: string) {
		this.query = query;
		this.groupService.listGroups(this.pageSize, (this.page-1)*this.pageSize, this.query)
			.subscribe(res => {
				this.items=res.data;		
		});
	}

	onDelete(groupName){
				this.translate.get('ADMIN.GROUPS.DELETE_CONFIRM').switchMap((res) => {
    			return this._dialogService.openConfirm({message: res}).afterClosed()
				}).subscribe((confirm: boolean) => {
        if (confirm) {
          this._loadingService.register('groups.list');
          this.groupService.deleteGroup(groupName).subscribe(() => {
						this.onSearch(this.query);
            this._loadingService.resolve('groups.list');
            this.messageService.showLocalizedMessage('ADMIN.GROUPS.DELETE_SUCCESS', MessageLevel.success);
          }, (error: Error) => {
            this._loadingService.resolve('groups.list');
						this.messageService.showLocalizedMessage('COMMON.ERROR.INTERNAL_SERVER', MessageLevel.error);
          });
        } // confirm
      });
	}

	onPageChange(event: IPageChangeEvent) {
		this.pageSize = event.pageSize;
		this.page = event.page;
		this.groupService.listGroups(this.pageSize, (this.page-1)*this.pageSize, this.query)
			.subscribe(res => {
				this.items=res.data;		
		});
	}
}
