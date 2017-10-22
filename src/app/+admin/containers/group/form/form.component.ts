import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TdMediaService, CovalentSearchModule} from '@covalent/core';
import {MdSnackBar} from '@angular/material';
import {GroupsApi as GroupService} from '../../../api/GroupsApi';
import {Group} from '../../../model/Group';
import { Router, ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {TranslateService} from "@ngx-translate/core";
import {MessageService, MessageLevel} from 'app/utils/message.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
	selector: 'app-admin-group-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class GroupFormComponent implements OnInit, AfterViewInit {
	groupName: string;
	groupLabel: string;
	memberUsers: string[] = [];
	memberGroups: string[] = [];

	action: string;
	members: GroupMember[] = [];
	filteredMembers: GroupMember[];

	constructor(private _changeDetectorRef: ChangeDetectorRef,
		public media: TdMediaService,
		//private userService: UserService, FIXME
		private groupService: GroupService,
		private router: Router,
		private _route: ActivatedRoute,
		private messageService: MessageService,
		public translate: TranslateService) {
	}

	ngOnInit() {
		this._route.url.subscribe((url: any) => {
			this.action = (url.length > 1 ? url[1].path : 'add');
		});

		this._route.params
			.map((params: {id: string}) =>  params.id)
			.filter(groupName => { return groupName?true:false; })
			.switchMap(groupName =>  this.groupService.getGroup(groupName))
			.subscribe((item: any) => {
					this.groupName = item.name;
					this.groupLabel = item.label;
					this.memberGroups = item.memberGroups;
					for (let next of this.memberGroups) {
						this.members.push(new GroupMember(next, false, true));
					}
					this.memberUsers = item.memberUsers;
					for (let next of this.memberUsers) {
						this.members.push(new GroupMember(next));
					}
					this.filterMembers('');
				}, err => {
					if(err.status && err.status == 404) {
						this.messageService.showLocalizedMessage('ADMIN.GROUPS.ERROR.NOT_FOUND', MessageLevel.error);
					} else {
						this.messageService.showLocalizedMessage('COMMON.ERROR.INTERNAL_SERVER', MessageLevel.error);
					}
				});
	}

	addMember(member: GroupMember): void {
		if(member.isGroup) {
			this.memberGroups.push(member.memberName);
		}
		if(member.isUser) {
			this.memberUsers.push(member.memberName);
		}
	}

	removeMember(member: GroupMember): void {
		if(member.isUser) {
			let index = this.memberUsers.indexOf(member.memberName);
			if(index != -1) {
				this.memberUsers.splice(index, 1);
			}
		}
		if(member.isGroup) {
			let index = this.memberGroups.indexOf(member.memberName);
			if(index != -1) {
				this.memberGroups.splice(index, 1);
			}
		}
		// reset autocomplete options
		this.filterMembers('');
	}

	filterMembers (filter: string): void {
			Observable.forkJoin(this.filterGroups(filter), this.filterUsers(filter))
				.subscribe(result=> {
					let filtered: GroupMember[] = [];
					filtered.push(...result[0]);
					filtered.push(...result[1]);
					this.filteredMembers = filtered;
				});
	}

	filterGroups(val: string): Observable<GroupMember[]> {
      return this.groupService.listGroups(null, null, val)
	  	.map(groups => {
			  let filtered: GroupMember[] = [];
			  for (let next of groups.data) {
				if(this.memberGroups.indexOf(next.name) === -1 && next.name !== this.groupName) {
					filtered.push(new GroupMember(next.name, false, true));
				}
			  }
			  return filtered;
		  });
   }
	filterUsers(val: string): Observable<GroupMember[]> {
		return Observable.of([]); // FIXME
    //   return this.userService.getUsers(val) FIXME
	//   	.map(groups => {
	// 		  let filtered: GroupMember[] = [];
	// 		  for (let next of groups) {
	// 			if(this.memberUsers.indexOf(next.loginname) === -1){
	// 				filtered.push(new GroupMember(next.loginname));
	// 			}
	// 		  }
	// 		  return filtered;
	// 	  });
   }

	ngAfterViewInit(): void {
		this.media.broadcast();
		this._changeDetectorRef.detectChanges();

	}

	onSave() {
		let group = {
			name: this.groupName,
			label: this.groupLabel,
			memberUsers: this.memberUsers,
			memberGroups: this.memberGroups,

		};
		if (this.action === 'add') {
			this.groupService.createGroup(group).subscribe(() => {
				this.onCancel();
			}, err => {
				if(err.status && err.status == 409) {
					this.messageService.showLocalizedMessage('ADMIN.GROUPS.ERROR.EXIST', MessageLevel.error);
				} else {
					this.messageService.showLocalizedMessage('COMMON.ERROR.INTERNAL_SERVER', MessageLevel.error);
				}
			});
		} else {
			this.groupService.updateGroup(group.name, group).subscribe(() => {
				this.onCancel();
			}, err => {
				this.messageService.showLocalizedMessage('COMMON.ERROR.INTERNAL_SERVER', MessageLevel.error);
			});
		}
	}

	onCancel() {
		this.router.navigate(['/admin/group']);
	}
}
export class GroupMember {
	constructor(public memberName: string, public isUser: boolean = true, public isGroup: boolean  = false) {
	}
}
