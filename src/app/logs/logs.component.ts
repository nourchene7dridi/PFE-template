import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
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
