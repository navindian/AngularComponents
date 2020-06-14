import { TabComponent } from "./../app/tab/tab.component";
import { StepperComponent } from "./../app/stepper/stepper.component";
//login component story
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeComponent } from "../app/welcome/welcome.component";
import { LogInComponent } from "../app/log-in/log-in.component";
import { LoadingSpinnerComponent } from "../app/shared/loading-spinner.component";
import { AuthService } from "../app/auth-service/auth.service";
import { SignUpComponent } from "../app/sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { moduleMetadata } from "@storybook/angular";
import { AppRoutingModule } from "../app/app.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MaterialDesignModule } from "src/app/material-design/material-design.module";
//@ts-ignore
import * as markdown from "./notes/log-in.readme.md";

export default {
  title: "Login Component",
  decorators: [
    withA11y,
    withKnobs,
    moduleMetadata({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        MaterialDesignModule,
      ],
      declarations: [
        SignUpComponent,
        LoadingSpinnerComponent,
        LogInComponent,
        WelcomeComponent,
        StepperComponent,
        TabComponent,
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: "/" }],
    }),
  ],
  parameters: {
    component: LogInComponent,
    withKnobs,
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "tablet",
    },
  },
  providers: [AuthService, { provide: APP_BASE_HREF, useValue: "/" }],
};

export const Default = () => ({
  component: LogInComponent,
  props: {
    email: text("Email", "sanket@infy.com", "General"),
    password: text("Password", "sanket123", "General"),
  },
});

export const Submit = () => ({
  component: LogInComponent,
  props: {
    email: text("Email", "sanket@infy.com", "General"),
    password: text("Password", "sanket123", "General"),
    loginEvent: action("Login Attempted"),
  },
});

// Click on the login button to see some changes in the actions tab
export const Link = () => ({
  component: LogInComponent,
  props: {
    email: text("Email", "sanket@infy.com", "General"),
    password: text("Password", "sanket123", "General"),
    registerEvent: linkTo("SignUp Component"),
  },
});
