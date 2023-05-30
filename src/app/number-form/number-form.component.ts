import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.scss'],
})
export class NumberFormComponent implements OnInit {
  numberForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.numberForm = fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
      field5: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.numberForm.value);

    // Create an array of values from the form.
    let values = Object.keys(this.numberForm.value).map(
      (key) => this.numberForm.value[key]
    );

    // Make an HTTP POST request to the server.
    this.http.post('https://example.com/api/numbers', values).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
