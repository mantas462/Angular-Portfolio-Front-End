import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  messageSent: boolean = false;
  errorHappened: boolean = false;
  loading:boolean=false;
  email: Email;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.loading=true;
    this.email = new Email();

    this.email.senderName = form.value.name;
    console.log(this.email.senderName);
    console.log(form.value.name);
    this.email.senderEmail = form.value.email;
    this.email.senderMessage = form.value.message;

    this.emailService.sendEmail(this.email).subscribe(
      (response) => {
        this.loading=false;
        this.messageSent = true;
      },
      (errors) => {
        this.loading=false;
        this.errorHappened = true;
      }
    );
  }
}

export class Email {
  senderName: string;
  senderEmail: string;
  senderMessage: string;
}
