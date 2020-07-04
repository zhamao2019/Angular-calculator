import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-calculator-shared-cost',
  templateUrl: './calculator-shared-cost.component.html',
  styleUrls: ['./calculator-shared-cost.component.css']
})
export class CalculatorSharedCostComponent implements OnInit {

  sharedForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // init the form
    this.sharedForm = this.fb.group({
      sharedCostArray: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  // retrieve the userArray's form array
  get sharedCostArray() {
    return this.sharedForm.get('sharedCostArray') as FormArray;
  }

  // a class of this row
  private UserGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      fee: ['', Validators.required],
      tax: [''],
    });
  }

  // add a new row
  addShareCostRow() {
    this.sharedCostArray.push(this.fb.control(''));
  }

  // delete this row of data
  deleteShareCostRow(index: number) {
    this.sharedCostArray.removeAt(index);
  }


}
