# Sample web repository
## _Code architecture followed by 55Tech developers._

[![N|Solid](https://www.fiftyfivetech.io/wp-content/uploads/2021/05/logo.png)](https://nodesource.com/products/nsolid)

 ✨ This repository showing that how we are using clean code architecture, folder structure, and component reusability.✨

## Features

- _**Functionality**_  : Work correctly, efficiently, and robustly.
- _**Readability**_    : The primary audience for our code is other developers.
-  _**Extensibility**_ : Well-designed code should be extensible as a building                           block for solving new problems.
- _**Scalability**_    : The code that can scale along with the need of your                            business.

## Tech

- [React](https://reactjs.org/) - HTML enhanced for web apps!
- [StoryBook](https://storybook.js.org/) - UI component explorer for frontend developers.
- [Material UI](https://mui.com/) - The React component library you always wanted.
- [Web pack](https://webpack.js.org/) - bundle your JavaScript applications.
- [Apollo Client](https://www.apollographql.com/docs/react/) - Manage both local and remote data with GraphQL.
- [React hook form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.


## Installation

Requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies and start the server.

```sh
cd sample-web
npm i or npm install
node start
```

##### Package manager
This project is using Yarn as package manager, if you do not have this installed on your machine please start by looking at the [Yarn docuentation and tutorials](https://classic.yarnpkg.com/en/docs). After installing the package manager the following commands will be availible for you:
- `yarn install` - Installing dev dependencies unless `mode=production`
- `yarn start` - Starting the project
- `yarn build` - Building the source files

If you seem to still have issues with these commands, try running `yarn cache clean` and do `yarn install`

##### Linting
Project is using ESLint to make sure that we keep same coding style in the project. Currently the ruleset is defined in `.eslintrc.json`.

##### Webpack and Babel
Webpack is a module bundler which packs all modules with dependencies – js, styles, images, etc. into static assets .js, .css, .jpg , .png, etc. Webpack comes with presets which help for compilation into the required form. For example, react preset that helps to get the final output in react form, es2015 or env preset that helps to compile the code in ES5 or 6 or 7, etc. We have used babel 6 in the project setup. In case you want to switch to babel7, install the required packages of babel using @babel/babel-package-name.

<img src="/src/assets/readmeImages/webpack-babel.png" alt="Webpack Plugins" title="Webpack Plugins" style="margin: 5% 20%">



### Project structure
This project is structured in the following way:
- Clean Architecture

<img src="/src/assets/readmeImages/new_arch.png" alt="Clean Architecture" title="Clean Architecture With ReactJS" style="margin: 5% 20%">

```
├── .git
├── .gitignore
├── package.json
├── public
|  └── index.html
├── README.md
├── sample-storybook-0.0.1.tgz
├── src
|  ├── App.css
|  ├── App.tsx
|  ├── assets
|  |  └── image
|  |     ├── index.ts
|  |     └── login
|  |        └── image.png
|  ├── components
|  |  ├── index.ts
|  |  └── ComponentName
|  |     ├── ComponentName.tsx
|  |     ├── index.ts
|  |     └── ComponentName.Style.ts
|  ├── core
|  |  ├── actions
|  |  |  ├── index.ts
|  |  |  └── signup
|  |  |     ├── index.ts
|  |  |     ├── signup.actions.ts
|  |  |     └── constants.ts
|  |  ├── interfaces
|  |  |  ├── index.ts
|  |  |  ├── State.interfaces.ts
|  |  |  └── signup
|  |  |     ├── index.ts
|  |  |     └── signup.interfaces.ts
|  |  └── reducers
|  |     └── signup
|  |        ├── index.ts
|  |        └── signup.reducers.ts
|  ├── index.css
|  ├── index.tsx
|  ├── layouts
|  |  ├── index.ts
|  |  └── publicLayout
|  |     ├── index.ts
|  |     ├── PublicLayout.tsx
|  |     ├── PublicLayoutStyles.ts
|  |     └── utils
|  |        ├── index.ts
|  |        └── stateUtils.ts
|  ├── models
|  |  ├── index.ts
|  |  └── signUpOptionsInterface
|  |     └── signUpOptionsInterface.ts
|  ├── pages
|  |  ├── Home
|  |  |  └── HorizontalPaddingWrapper.tsx
|  |  ├── Signup
|  |  |  ├── index.ts
|  |  |  ├── Signup.Styles.ts
|  |  |  ├── SignUpForm.tsx
|  |  |  └── utils
|  |  |     ├── index.ts
|  |  |     └── stateUtils.ts
|  |  └── index.ts
|  ├── routes
|  |  ├── index.ts
|  |  └── Routes.tsx
|  ├── services
|  |  ├── auth
|  |  |  ├── index.ts
|  |  |  └── signup.services.ts
|  |  └── index.ts
|  ├── store
|  |  ├── combineReducer.ts
|  |  └── configureStore.tsx
|  ├── theme
|  |  ├── color.ts
|  |  └── theme.ts
|  └── utils
|     ├── api
|     |  └── api.ts
|     ├── constants
|     |  ├── constants.ts
|     |  ├── index.ts
|     |  └── routesConstants.ts
|     ├── DateTime
|     |  ├── DateTime.helper.ts
|     |  └── index.ts
|     ├── functions
|     |  ├── functions.ts
|     |  └── index.ts
|     ├── help.ts
|     └── index.ts
├── tsconfig.json
└── webpack.config.js
        [File structure is recursive]
```
**src/index.ts** - Here we added the logic to render root component on particular html element.

**index.ts** - You should always include `index` file in every folder. When you have a lot of components you need to export from a given folder and you would like to destructure in the files you're importing them into. You don't have to follow this at all, but is still best practice to do it this way; it can be easier when exporting a large amount of files such as from a reducer in Redux or a utility folder with a large amount of smaller components like a `<Button>` or `<Input>`, and it is easier to read for other users if everything coalesces into a single index file rather than several different files.

**components** - Contains the common UI components/subComponents. If more then two pages need to use the any component, then it should be moved to the common `components` folder. 

**assets** - Saving images, files etc in `src` directory is a good solution and it is oftentimes encouraged to use instead of the static file serving. You need to store images in src/assets folder. Also by that all the images are processed by Webpack so we can provide further optimizations.

**core** - The core folder — the heart of the app. Core folder could also be named Commons or Shared. It contains everything that is used across the app.

**core/actions** - It contains the actions in folders form e.g. `core/reducers/signup`. It contains the action files. It used to trigger action to update the redux state. Also you have to store action type names in `constants.js` file.

**core/reducers** - It contains the reducers in folders form e.g. `core/reducers/signup`. There will be reducer files e.g. `core/reducers/Home/signup.reducers.js`, each file will have default export of slice/reducer and will have various reducer functions to update the redux state. We have used reduxjs/toolkit so the way of writing reducers is different here.


**core/store** - Where you can configure the redux store in a common place, also combine reducers.

**services** - There are as many services as there are concerns in the app, so it is easy to find where the stuff I need is. You need to create Page name or component name folder and file before adding APIs.

**theme** - In this style folder we have the common styles for complete application. In there we have mixin styles(Mixins allow you to define styles that can be re-used throughout your stylesheet). There we have media-queries, layout specifications etc according the APP responsiveness.

**utils** - It's a common utils folder to store constant values and commonly used functions in entire app. With this way it will be easy to find utils in common places or also easy to access them.

**pages** - There is a index.js file where we have already defined the route component. Now when you create a new page you have to add the route in the routes group. 

##### How should a Page component look
A React component will look the same if it is a "Page" or just a heading somewhere, the only difference there is placement of it. These rules or guidelines should therefore be followed regardless to make it easier for new developers to join the project. 
```
ComponentName/PageName
│   index.ts
│   ComponentName.tsx
|   ComponentName.styles.ts
│
└─── utils
│   └─── constantUtils.ts
│   └─── functionUtils.ts
│   └─── stateUtils.ts
│   
└─── components
    └─── index.ts
    └─── utils
    └─── SubComponentName
        └─── SubComponentName.tsx
        └─── index.ts
        └─── SubComponentName.styles.ts
        [File structure is recursive]
```

**index.ts** - This file will have the import from the component but might at times require additional imports from subcomponents and export them in the same file. You should never need to import something from a subcomponent.

**componentName.tsx** - Contains the manu funcitonality of the component. If the component requires subcomponents then they should be placed in the `components` folder and not in this file. We strive to have small easily testable components with not to many responsibilities. 

**componentName.styles.ts** - styles for the particular component, if you are using same styles/className in subComponents don't write again then.

**components** - Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. They are sometimes called "presentational components" and the main concern is how things look. If any other components need to use the component placed here, then it should be moved to the common `components` folder.

### What is the best way to add/develop features?
If you want to add the UI in a particular page, first if the component is not related to core business logic add the component to Storybook repo and then you have to add/use components in the specific page folder and also add the responsive css in ComponentName.styles.ts file in the same folder. If there is a need to receive Redux state updates and dispatch actions for the feature then you should create stateUtils.ts file in utils folder of same Component folder and use useDispatch and useSelector hooks.
If you want to add new state in the redux store then you have to create reducers in the specific page folder in core/reducers folder(if not exists then create). The same we have to do with the actions.
If you want to call API(If API is not added then you need to add the api in services folder with specific page name folder) then you have to use it in actions.
You have to add three actions in redux while using apis to handle reject and response in best way.
In this app we are not using mapDispatchToProps and mapStateToProps instead we are using useDispatch and useSelector hooks.

<img src="/src/assets/readmeImages/react_app_flow.png" alt="React App Flow" title="React App Flow">

<img src="/src/assets/readmeImages/redux-saga.png" alt="Redux Saga" title="Redux Saga">



## License

**55 Tech**

**We are relentlessly focusing on digital transformation. Dive deep into the customer cases to know more about the project which we delivered.**
