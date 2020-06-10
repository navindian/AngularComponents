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
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
import {action} from '@storybook/addon-actions';
import { withKnobs, text, boolean, date, radios } from '@storybook/addon-knobs';
import { linkTo } from "@storybook/addon-links";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// //@ts-ignore
// import markDownNotes from "src/app/sign-up/sign-up.component/sign-upreadme.md";

//this comment is required to ignore the errror
//@ts-ignore
import * as markdown from "./notes/sign-up.readme.md";
import { RouterModule } from "@angular/router";

// Data for dates
const label = 'DOB';
const defaultValue = new Date('Jan 20 1996');
const groupID = 'General'

// Data for gender
const label1 = 'Gender';
const options = {
  Male: 'male',
  Female: 'female',
  };
const defaultValue1 = 'male';
const groupId = 'General';

export default {
  title: 'SignUp Component',
  decorators: [ 
    withA11y, 
    withKnobs,
    moduleMetadata({
      imports: [
                HttpClientModule,
                AppRoutingModule,
                ReactiveFormsModule,
                FormsModule,
                BrowserModule],
              declarations: [
                SignUpComponent,
                LoadingSpinnerComponent,
                LogInComponent,
                WelcomeComponent
              ],
              providers: [AuthService, { provide: APP_BASE_HREF, useValue: "/" }]
    }) 
  ],
  parameters: {
    component: SignUpComponent , 
    withKnobs,
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  },  
  providers: [AuthService, { provide: APP_BASE_HREF, useValue: "/" }]
};

export const Default = () => ({
  component: SignUpComponent,
  props: {
            name: text('Name', 'Sanket', 'General'),
            email: text('Email', 'sanket@infy.com', 'General'),
            date: date(label, defaultValue, groupID),
            password: text('Password', 'sanket123', 'General'),
            gender: radios(label1, options, defaultValue1, groupId)
        }

});

export const Submit = () => ({
  component: SignUpComponent,
  props: {
            name: text('Name', 'Sanket', 'General'),
            email: text('Email', 'sanket@infy.com', 'General'),
            date: date(label, defaultValue, groupID),
            password: text('Password', 'sanket123', 'General'),
            gender: radios(label1, options, defaultValue1, groupId),
            signUpEvent: action('Sign Up Attempted')
        }
});

export const Link = () => ({
  component: SignUpComponent,
  props: {
            name: text('Name', 'Sanket', 'General'),
            email: text('Email', 'sanket@infy.com', 'General'),
            date: date(label, defaultValue, groupID),
            password: text('Password', 'sanket123', 'General'),
            gender: radios(label1, options, defaultValue1, groupId),
            signUpEvent: action('Sign Up Attempted'),
            loginEvent: linkTo('Login Component')
        }
});

export const Backgrounds = () => ({
  component: SignUpComponent,
  props: {
            name: text('Name', 'Sanket', 'General'),
            email: text('Email', 'sanket@infy.com', 'General'),
            date: date(label, defaultValue, groupID),
            password: text('Password', 'sanket123', 'General'),
            gender: radios(label1, options, defaultValue1, groupId),
  }
});

Backgrounds.story = {
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
  }
}