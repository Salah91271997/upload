import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberFormComponent } from './number-form/number-form.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NumberFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    PasswordModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
