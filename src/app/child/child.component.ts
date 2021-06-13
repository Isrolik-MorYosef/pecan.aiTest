import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../store/product";
import {BehaviorSubject, Observable} from "rxjs";
import {Store} from '@ngrx/store';
import {AppState} from "../store/app.state";

export interface CheckboxProperty {
  isChecked: boolean;
  id: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit{
  checkboxes: CheckboxProperty[] = [];
  private openSessionsOnly$ = new BehaviorSubject(false);

  // get openSessionsOnly(): boolean {
  //   return this.openSessionsOnly$.value;
  // }
  // set openSessionsOnly(v: boolean) {
  //   this.openSessionsOnly$.next(v);
  // }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    for (let i = 0; i < 30*30; i++ ){
      this.checkboxes[i] = {isChecked: false, id: i};
    }
  }

  hoverElement($event: any, i: CheckboxProperty) {
    this.checkboxes[i.id].isChecked = true;
    this.checkboxes[i.id + 1].isChecked = true;
    this.checkboxes[i.id - 1].isChecked = true;

    this.checkboxes[i.id + 1 + 30].isChecked = true;
    this.checkboxes[i.id - 1 + 30].isChecked = true;
    this.checkboxes[i.id + 30].isChecked = true;

    this.checkboxes[i.id - 1 - 30].isChecked = true;
    this.checkboxes[i.id + 1 - 30].isChecked = true;
    this.checkboxes[i.id - 30].isChecked = true;
  }
}
