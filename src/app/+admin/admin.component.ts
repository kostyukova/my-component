import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

	categories = [
		{
			'text':'Group', 'route': '/admin/group'
		},
		{
			'text':'User', 'route': '/admin/user'
		}];

	constructor(public media: TdMediaService, private router: Router) {
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.media.broadcast();
	}

	gotoRoute(category) {
		this.router.navigate([category.route]);
	}
}
