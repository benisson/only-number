import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mariol-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {


  constructor(private formBuilder: FormBuilder){} 

  // Reactive Form
  form1 = new FormGroup({
    campoNumerico1: new FormControl(1234)
  })


  form2 = this.formBuilder.group({
        campoNumerico2: [123, [Validators.required, Validators.pattern("^[0-9]*$")]],
  });


  ngOnInit() {
    this.form1.valueChanges.subscribe(
      value => console.log('formValue changed', value)
    );


        this.form2.valueChanges.subscribe(
      value => console.log('formValue changed', value)
    );
  }
}