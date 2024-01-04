import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''], 
      mobile: [''], 
      password: [''] 
    
    });
  }
 


    onSubmit() {
      console.log(this.myForm);
      const formData = this.myForm.value;
      this.http.post('http://localhost:8000/yogkulam/register', formData)
        .subscribe(response => {
          console.log('API response:', response);
        });
  }

}
