import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { BugsComponent } from './bugs/bugs.component';

const appRoutes : Routes = [
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'jobs', component: JobsComponent},
      { path: 'logs', component: LogsComponent},
      { path: 'bugs', component: BugsComponent}
      
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    LogsComponent,
    JobsComponent,
    BugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
