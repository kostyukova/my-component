import {HomeComponent} from './home/home.component';

export const routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'admin',
				loadChildren: './+admin/admin.module#AdminModule'
			}
		]
	},
];
