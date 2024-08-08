import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormService } from './form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  newMessageForm!: FormGroup;
  unsubus$: Subject<boolean> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private service: FormService,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.unsubus$.next(true);
    this.unsubus$.complete();
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.newMessageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.newMessageForm.valid) {
      this.service
        .sendMessage(
          this.newMessageForm.value.name,
          this.newMessageForm.value.email,
          this.newMessageForm.value.message
        )
        .pipe(takeUntil(this.unsubus$))
        .subscribe(
          (res) => {},
          (error) => {
            console.error('Error:', error); // error handler
          },
          () => {
            console.log('Request complete'); // complete handler
          }
        );
    }
  }
}
