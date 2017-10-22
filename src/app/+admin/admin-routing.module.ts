import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {GroupComponent} from './containers/group/group.component';
import {GroupFormComponent} from './containers/group/form/form.component';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{path: '', redirectTo: 'group', pathMatch: 'full'},
			{path: 'group', children: [
                    {
                        path: '',
                        component: GroupComponent
                    },
                    {
                        path: 'add',
                        component: GroupFormComponent
                    },
                    {
                        path: ':id/delete',
                        component: GroupFormComponent
                    },
                    {
                        path: ':id/edit',
                        component: GroupFormComponent
                    },
                ]
            }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {
}
