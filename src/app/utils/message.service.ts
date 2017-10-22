import { Injectable } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
 
 
@Injectable()
export class MessageService implements OnDestroy {
    private subject = new Subject<Message>();
    private subscription;
 
    constructor(private _snackBar: MdSnackBar, private translate: TranslateService) {       
        this.subscription = this.subject.subscribe(message => {
            switch (message.level) {
                case MessageLevel.info:
                    this._snackBar.open(message.message, message.action, {extraClasses:["info-bar-color"], duration: 2000})
                    break;
                case MessageLevel.success:
                    this._snackBar.open(message.message, message.action, {extraClasses:["success-bar-color"]})
                    break;
                case MessageLevel.warning:
                    this._snackBar.open(message.message, message.action, {extraClasses:["warning-bar-color"], duration: 2000})
                    break;
                case MessageLevel.error:
                default:
                    this._snackBar.open(message.message, message.action, {extraClasses:["error-bar-color"], duration: 2000})
                    break;
            }
            
        });
    }

    showMessage(message: string, level: MessageLevel) {
		this.translate.get('COMMON.BUTTON.OK')
			.subscribe((res) => {
                this.subject.next({ message: message, action: res, level: level });
            });
    }
 
    showLocalizedMessage(messageKey: string, level: MessageLevel) {
        this.showCustomMessage(messageKey, 'COMMON.BUTTON.OK', level);
    }

    showCustomMessage(messageKey: string, actionKey: string,  level: MessageLevel) {
        Observable.forkJoin(this.translate.get(messageKey), this.translate.get(actionKey) ).subscribe(res=>{
            this.subject.next({ message: res[0], action: res[1], level: level });
        })
    }
 
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

export class Message {
    message: string;
    action: string;
    level: MessageLevel;
}

export enum MessageLevel {
    info, success, warning, error
}