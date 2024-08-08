import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  sendMessage(name: string, email: string, message: string): Observable<any> {
    const formspreeUrl = 'https://formspree.io/f/xvgpgaaj';

    // Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    // Prepare data
    let data = `name=${name}&email=${email}&message=${message}`;

    return this.http.post<any>(formspreeUrl, data, httpOptions);
  }
}
