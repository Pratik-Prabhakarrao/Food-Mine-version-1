import { trigger } from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {
  required: 'Should not be empty',
  email: 'Email is not valid',
};
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css'],
})
export class InputValidationComponent implements OnInit, OnChanges {
  // @Input()
  // control!:AbstractControl;
  // @Input()
  // showErrorsWhen:boolean= true;
  // errorMessage:string[]= [];

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.checkValidation();
  // }
  // ngOnInit(): void {
  //   this.control.statusChanges.subscribe(()=>{
  //     this.checkValidation();
  //   });
  //   this.control.valueChanges.subscribe(()=>{
  //     this.checkValidation();
  //   })
  // }
  // checkValidation():void{
  //   const errors = this.control.errors;
  //   if(!errors){
  //     this.errorMessage = [];
  //     return;
  //   }
  //   const errorKeys = Object.keys(errors);
  //   this.errorMessage = errorKeys.map(key=> VALIDATORS_MESSAGES[key]);
  // }

  @Input()
  control!: AbstractControl;
  @Input()
  showErrorsWhen: boolean = true;
  errorMessages: string[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map((key) => VALIDATORS_MESSAGES[key]);
  }
}
