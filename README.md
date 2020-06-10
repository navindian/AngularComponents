# **Angular** Components

Angular Components is a front-end angular application which is having two components :

**1. Login Component**

**2. Sign Up Component** 

In this application the concepts of  [**StoryBook**](https://storybook.js.org/) have been used to create the above listed components in Isolation and deliver Robust UIs and implement hard to reach use cases.

## Angular Components will allow users to

1. Register
2. Login

### Requirements

------

#### Prerequisites 

You should have at least a basic understanding of fundamental programming concepts and some experience with introductory [`HTML`](https://developer.mozilla.org/en-US/docs/Web/HTML)/[`CSS`](https://developer.mozilla.org/en-US/docs/Learn/CSS)/[`Javascript`](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

#### Install

Lastly, make sure you have the following installed.

- Latest version of [Node.js](https://nodejs.org/en/)
- Latest version of [NPM (Node Package Manage)](https://www.npmjs.com/get-npm)
- Latest version of [git](https://git-scm.com/downloads) (**This is optional. It requires only if you choose to clone project**).

#### Getting Started

Either you can **clone** or **download** repository from GitHub.

1. Clone with HTTPS *(required [git](https://git-scm.com/) installed in your system)*

   https://github.com/navindian/AngularComponents.git

   

2. Navigate to project directory in the terminal or command prompt.

   ```
   cd AngularComponents
   ```

   

3. Install the project dependencies

   ```
   npm install
   ```

   

#### Installing Storybook

------

##### 	Command For Installation		

```
	npx -p @storybook/cli sb init
```



#### Installing Addons

------

##### 	1. [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

​		Install this addon by adding the `@storybook/addon-knobs` dependency:			

```
	npm add @storybook/addon-knobs
```



##### 	2. [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)

​		Install this addon by adding the `@storybook/addon-actions` dependency:			

```
	npm add @storybook/addon-actions
```



##### 	3. [Story Source](https://github.com/storybookjs/storybook/tree/master/addons/storysource)

​		Install this addon by adding the `@storybook/addon-storysource` dependency:			

```
	npm add @storybook/addon-storysource
```



##### 	4. [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)

​		Install this addon by adding the `@storybook/addon-docs` dependency:			

```
	npm add @storybook/addon-docs
```

​		Install this API documentation tool by adding the `@compodoc/compodoc` dependency:			

```
	npm add -D @compodoc/compodoc	
```

##### 	

##### 	5. [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)

​		Install this addon by adding the `@storybook/addon-viewport` dependency:			

```
	npm i add @storybook/addon-viewport
```



##### 	6. [Accessibility](https://github.com/storybookjs/storybook/tree/master/addons/a11y)

​		Install this addon by adding the `@storybook/addon-a11y` dependency:

```
	npm add @storybook/addon-a11y
```



##### 	7. [Console](https://github.com/storybookjs/storybook-addon-console)

​		Install this addon by adding the `@storybook/addon-console` dependency:

```
	npm add @storybook/addon-console
```



##### 	8. [Links](https://github.com/storybookjs/storybook/tree/master/addons/links)

​		Install this addon by adding the `@storybook/addon-links` dependency:

```
	npm add @storybook/addon-links
```



### Launching the Application

------

#### 	Command for running Storybook		

```
	npm run storybook
```

​	Storybook UI is running at : http://localhost:6006