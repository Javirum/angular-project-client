import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: string;
  password: string;
  location: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.signup(this.username, this.password, this.location)
        .then(() => {
          this.router.navigate(['/search']);
        })
        .catch((err) => {
          this.error = err.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
