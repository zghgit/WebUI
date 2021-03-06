/**
 * Created by max on 2017/5/18.
 */

import {Component, OnInit, Input,OnChanges,DoCheck} from '@angular/core';
import {factoryOrValue} from "rxjs/operator/multicast";
@Component({
    selector: 'uc-checkbox',
    template: `
    <div [formGroup]="form">
        <div *ngIf="model.label" class="item-title">
            <label>{{model.label}}:
                <span *ngIf="model.require">*</span>
                <ng-container *ngFor="let item of model.errormsg">
                    <i *ngIf="form.get(model.key).hasError(item.type)&&flag">{{item.content}}</i>
                </ng-container>
            </label>
        </div>
        <div>
           <input type="hidden" [formControlName]="model.key" [(ngModel)]="model.value">
        </div>
    </div>
    <!--<div class="checkAll">-->
        <!--<label><input type="checkbox" [checked]="checkedAll" (click)="changeCheckedAll(model.options)">全选</label> -->
    <!--</div>-->
    <!--<div class="item-content">-->
        <!--<ng-container *ngFor="let item of model.options">-->
            <!--<label><input type="checkbox" [value]="item.value" [(ngModel)]="item.checked" [checked]="item.checked" (change)="onChange($event.target.checked,item.value)">{{item.content}}</label>-->
        <!--</ng-container>-->
    <!--</div>-->
    <base-checkbox [model]="model.options" (checkboxData)="checkboxBack($event)" (click)="haschick()"></base-checkbox>
`,
    styleUrls: ["../styles/ucCheckbox.scss"]
})
export class UcCheckboxComponent implements OnInit {
    @Input() model: any;
    @Input() form;
    // public checkedSet = new Set();//内容集合
    // public checkedAll: boolean = false;//全选
    public flag:boolean = false;
    // public can:boolean = true;
    constructor() {
    }

    // ngOnChanges(){
    //     if(this.model.options.length>0){
    //         this.initCheckbox();
    //     }
    // }
    // ngDoCheck(){
    //     if(this.model.options.length>0&&this.can){
    //         this.initCheckbox();
    //         this.can = false;
    //     }
    // }
    ngOnInit() {
        // this.initCheckbox();
    }
    haschick(){
        this.flag = true;
    }
    //初始化select内容
    // initCheckbox(){
    //     for (let item of this.model.options) {
    //         if (item.checked) {
    //             this.checkedSet.add(item.value)
    //         }
    //     }
    //     if (this.checkedSet.size == this.model.options.length) {
    //         this.checkedAll = true;
    //     } else {
    //         this.checkedAll = false;
    //     }
    //     this.checkboxValue(this.checkedSet)
    // }
    // //变化时更新
    // onChange(checked: boolean, value: any) {
    //     if (checked) {
    //         this.checkedSet.add(value)
    //     } else {
    //         this.checkedSet.delete(value)
    //     }
    //     if (this.checkedSet.size == this.model.options.length) {
    //         this.changeCheckedAll(this.model.options);
    //     } else {
    //         this.checkedAll = false;
    //     }
    //     this.flag = true;
    //     this.checkboxValue(this.checkedSet)
    // }
    // //点击全选时
    // changeCheckedAll(options) {
    //     this.checkedAll = !this.checkedAll;
    //     if (this.checkedAll) {
    //         for (let item of options) {
    //             this.checkedSet.add(item.value)
    //             item.checked = true;
    //         }
    //     } else {
    //         for (let item of options) {
    //             this.checkedSet.delete(item.value)
    //             item.checked = false;
    //         }
    //     }
    //     this.flag = true;
    //     this.checkboxValue(this.checkedSet)
    // }
    // //模型数据更新
    // public checkboxValue(model) {
    //     if (model.size == 0) {
    //         this.model.value = "";
    //     } else {
    //         this.model.value = JSON.stringify(Array.from(model))
    //     }
    // }
    checkboxBack(ev){
        if (ev.value.length == 0) {
            this.model.value = "";
        } else {
            this.model.value = JSON.stringify(ev.value)
        }
    }
}