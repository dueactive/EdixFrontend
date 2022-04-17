import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { OficinasModalityComponent } from './components/oficinasModality/oficinasModality.component';
import { OficinaComponent } from './components/oficina/oficina.component';
import { OficinaDetailComponent } from './components/oficina-detail/oficina-detail.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { CreateProfileSecundaryComponent } from './components/create-profile-secundary/create-profile-secundary.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    OficinasComponent,
    HomeComponent,
    LoginComponent,
    OficinasModalityComponent,
    OficinaComponent,
    OficinaDetailComponent,
    CreateProfileComponent,
    AllProfilesComponent,
    CreateProfileSecundaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
