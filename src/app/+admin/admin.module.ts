import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {CovalentLayoutModule, TdMediaService, CovalentLoadingModule, CovalentDialogsModule} from '@covalent/core';
import {CovalentSearchModule, CovalentPagingModule, CovalentChipsModule, CovalentFileModule} from '@covalent/core';
import {MdIconModule, MdListModule, MdToolbarModule, MdCardModule, MdButtonModule, MdInputModule, MdSelectModule} from '@angular/material';
import {MdSnackBarModule, MdChipsModule, MdAutocompleteModule, MdMenuModule, MdRadioModule} from '@angular/material';
import {GroupComponent} from './containers/group/group.component';
import {GroupFormComponent} from './containers/group/form/form.component';
import {MespListComponent} from './containers/mesp-list/mesp-list.component';
import {MespSearchComponent} from './containers/mesp-search/mesp-search.component';
import {MespPagingComponent} from './containers/mesp-paging/mesp-paging.component';
import {TranslateModule} from "@ngx-translate/core";
import {GroupsApi} from './api/GroupsApi';
import { FormInputComponent } from './containers/group/form-input/form-input.component'



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AdminRoutingModule,

		MdIconModule,
		MdButtonModule,
		MdCardModule,
		MdListModule,
		MdToolbarModule,
		MdInputModule,
		MdSelectModule,
		MdSnackBarModule,
		MdChipsModule,
		MdAutocompleteModule,
		MdMenuModule,
		MdRadioModule,
		TranslateModule,

		CovalentDialogsModule,
		CovalentLoadingModule,
		CovalentLayoutModule,
		CovalentSearchModule,
		CovalentPagingModule,
		CovalentChipsModule,
		CovalentFileModule,
	],
	declarations: [
		AdminComponent,
		GroupComponent,
		GroupFormComponent,
		MespListComponent,
		MespSearchComponent,
		MespPagingComponent,
		FormInputComponent
	],

	providers: [
		TdMediaService,
		GroupsApi
	],
})
export class AdminModule {
	constructor() {
	}
}
