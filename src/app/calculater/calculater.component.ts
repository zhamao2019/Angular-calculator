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
      usersArray: this.fb.array([this.UserGroup()]),
      sharedCostArray: this.fb.array([this.SharedGroup()]),
      total: ['', Validators.required]
    });
  }

  // retrieve the userArray's form array
  get usersArray() {
    return this.feesForm.get('usersArray') as FormArray;
  }

  get sharedCostArray() {
    return this.feesForm.get('sharedCostArray') as FormArray;
  }


  // a class of this row
  private UserGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      fee: ['', Validators.required],
      tax: [''],
    });
  }

  private SharedGroup(): FormGroup {
    return this.fb.group({
      delivery: [''],
      service: ['']
    });
  }

  onSubmit(feesFormData) {
    this.feesForm.reset();
  }

  onReset() {
    this.usersArray.clear();
    this.sharedCostArray.clear();
    this.ngOnInit();
    // this.feesForm.reset();
  }

  // add a new row
  addUserRow() {
    this.usersArray.push(this.UserGroup());
  }
  // addShareCostRow() {
  //   this.sharedCostArray.push(this.fb.control(''));
  // }

  // delete this row of data
  deleteUserRow(index: number) {
    this.usersArray.removeAt(index);
  }
  // deleteShareCostRow(index: number) {
  //   this.sharedCostArray.removeAt(index);
  // }

}
