import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  name:String;
  username:String;
  email:String;
  password:String;
  constructor(private validateService : ValidateService, private flashMessagesService: FlashMessagesService) { }
  ngOnInit(){
  }
  onRegisterSubmit() {
    const user = {
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }
   
    //Check Required Fileds
    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill everything!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

     //Check Email Fileds
     if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Please enter  valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

  }

}
