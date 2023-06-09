import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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

  redirectToJobs(){
    this.router.navigateByUrl('dashboard/jobs');
  }
  redirectToBugs(){
    this.router.navigateByUrl('dashboard/bugs');
  }
}
