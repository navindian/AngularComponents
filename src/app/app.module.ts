import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DatePipe } from "./sign-up/date.pipe";
import { StepperComponent } from "./stepper/stepper.component";
import { MaterialDesignModule } from "./material-design/material-design.module";
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    LoadingSpinnerComponent,
    WelcomeComponent,
    DatePipe,
    StepperComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
