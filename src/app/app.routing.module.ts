import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabComponent } from "./tab/tab.component";

const appRoutes: Routes = [
  { path: "", component: LogInComponent },
  { path: "login", component: LogInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "welcome/:arg", component: WelcomeComponent },
  { path: "stepper", component: StepperComponent },
  { path: "tab", component: TabComponent },
  { path: "**", redirectTo: "albums" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
