import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-frame-create',
  templateUrl: './frame-create.component.html',
  styleUrls: ['./frame-create.component.scss']
})
export class FrameCreateComponent implements OnInit {

  customerControl = new FormControl();
  jobNumberControl = new FormControl();
  batchControl = new FormControl();

  customers: string[] =  ['Aaron', 'Tim', 'Phil', 'Amber'];
  jobNumbers: string[] = ['12121'];
  batches: string[] = ['ads'];

  filteredCustomers: Observable<string[]>;
  filteredJobNumbers: Observable<string[]>;
  filteredBatches: Observable<string[]>;

  color = 'accent';
  checked = false;
  disabled = false;

  ngOnInit() {
    this.filteredCustomers = this.customerControl.valueChanges
    .pipe(
      startWith<string>(''), map(value => this._filter(value, this.customers))
    );

    this.filteredJobNumbers = this.jobNumberControl.valueChanges
    .pipe(
      startWith<string>(''), map(value => this._filter(value, this.jobNumbers))
    );


    this.filteredBatches = this.batchControl.valueChanges
    .pipe(
      startWith<string>(''), map(value => this._filter(value, this.batches))
    );

  }

  private _filter(name: string, arrayToFilter: string[]): string[] {
    const filterValue = name.toLowerCase();
    return arrayToFilter.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}

