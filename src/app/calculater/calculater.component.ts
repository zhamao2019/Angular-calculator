import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent implements OnInit {
  feesForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // init the form
    this.feesForm = this.fb.group({
      usersArray: this.fb.array([this.UserGroup()])
    });
  }

  // retrieve the userArray's form array
  get usersArray() {
    return this.feesForm.get('usersArray') as FormArray;
  }

  // a class of this row
  private UserGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      fee: ['', Validators.required],
      tax: [''],
    });
  }

  onSubmit() {

  }
  onReset() {
    this.usersArray.clear();
    this.ngOnInit();
  }

  // add a new row
  addRow() {
    this.usersArray.push(this.UserGroup());
  }

  // delete this row of data
  deleteRow(index: number) {
    this.usersArray.removeAt(index);
  }

}
