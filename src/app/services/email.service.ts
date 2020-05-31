import { Injectable } from '@angular/core';
import { Email } from '../components/contact/contact.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(email: Email) {
    return this.http.post<Email>(
      'https://springappas.herokuapp.com/api/sendmessage',
      email
    );
  }
}
