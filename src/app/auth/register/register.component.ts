import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !:FormGroup;
  registerPayload!:RegisterPayload;

  constructor( private formBuilder :FormBuilder, private AuthService :AuthService) { 
    this.registerForm =this.formBuilder.group({
    
      // username:"",
      // email:"",
      // password:"",
      // confirmPassword:""
      username:['',Validators.required],
      email:['',Validators.required],
      
      password:['',Validators.required],
     
      confirmPassword:['',Validators.required],
   

    });
    this.registerPayload={
      username:"",
      email:"",
      password:"",
      confirmPassword:""


    };

  }

  ngOnInit(): void {
  }

   onSubmit(){
    this.registerPayload.username= this.registerForm.value.username;
    this.registerPayload.email= this.registerForm.value.email;
    this.registerPayload.password= this.registerForm.value
    this.registerPayload.confirmPassword=  this.registerForm.value.confirmPassword;

    this.AuthService.register(this.registerPayload).subscribe(data =>{
      console.log('register successfully');
    },error =>{
      console.log('register failed');
    });
     
     

   }
}
