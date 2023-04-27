import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (public router: Router){}

  ngOnInit(): void{}

  redirectToHome(){
    this.router.navigateByUrl('dashboard/home');
  }

  redirectToLogs(){
    this.router.navigateByUrl('dashboard/logs');
  }

  logMeOut(){
    this.router.navigateByUrl('login');
  }
}
