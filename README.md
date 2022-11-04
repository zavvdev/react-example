# What

React.js project example for scalable front-end applications based on Feature-Sliced Design (FSD) pattern.

# Why
The purpose was to create an example of front-end application which will give you a scalable structure and recommendations for:
- building relations between modules;
- organising maintainable & composable UI;
- dealing with external data;
- building ecosystem tools & tests;

Based on this, the tools used in this example may differ and you should not use exactly the same technical stack. For example, you can easily replace axios with any other http client library, switch to a custom webpack configuration instead of Create React App, integrate with TypeScript, etc.

# How

Used technical stack:
- React / JavaScript
- Redux-Toolkit (RTK-Query, Listener Middleware)
- JSS
- Jest / React-Testing-Library
- CRA

### Basic scripts

`npm start`\
Runs the app in the development mode on http://localhost:3000

`npm test`\
Launches the test runner in the interactive watch mode.

`npm run build`\
Builds the app for production to the build folder.

`npm run eject`\
> **_NOTE:_** this is a one-way operation. Once you eject, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them.

`npm run lint`\
Launches eslint runner and addition script for checking integrity of app modules (see next section).

### Ecosystem scripts

`make feature name=<name-of-feature>`\
Example: `make feature name=auth`\
Creates new feature in src directory.

`make shared name=<name-of-shared-component> for=<feature-name, optional>`\
Creates shared component under app directory and automatically adds it to registry. If “for” argument is provided, creates component for provided feature.
Example: `make shared name=Button for=auth`

`make container name=<name> for=<feature-name, optional>`\
`make layout name=<name> for=<feature-name, optional>`\
`make page name=<name> for=<feature-name, optional>`

Creates container, layout and page components accordingly.
> **_NOTE:_** you can't automatically generate pages for the "app" domain because the “app” page is an endpoint registry and it might be different for some other projects. For example, Next.js has its own page registry, and you'll need to import them manually.**

`make integrity-check for=<feature-name, optional>`\
Checks feature files (except test files) for restricted imports between sibling features. If “for” argument is provided, performs check for specific feature directory.

> **_NOTE:_** This script was added because it is not possible to restrict absolute imports between sibling directories using eslint. If you find a way to do this, then this script can be deleted. But for now it’s strongly recommended to not remove ”integrity-check” script from project because it will prevent you from linking features in a wrong way.

All of these ecosystem scripts are case-sensitive, so provide exact names for the variables you want to create something with.

### Main concepts

**1. Grouping by top level feature.**

All files grouped by the features they belong to. For example, if you open `src` folder you can see next:
\__tests__/
app/
books/
cart/
order/

Each folder except “app” and “\__tests__” in src considered as feature and contains its own translations, utilities, domain logic, components etc. “App” - it’s a shared kernel for all features and contains logic of combining all them together. If you open any feature folder, you will see that the structure is almost the same as for the “app”, except for one detail. Since “app” is a shared kernel for all features it means that each feature can build direct dependency on “app” via imports. But any other modules including app cannot do the same. They cannot import whatever they want from feature until it allows to do it. And here you can see the “gateway” directory which is actually the boundary between features. Each feature gateway contains only 2 files: “input.js” and “output.js” and do exactly 2 things - determines what feature consumes and what feature exposes. This means that if some components in feature B want to take something from feature A, then feature A should expose it via its own output gateway and feature B should consume it through input gateway.

**2. Grouping UI pieces by composition capabilities, external dependencies & type.**

This example comes with 4 types of UI pieces:
- **shared** - the first basic UI piece which cannot contain any other shared components, containers, layouts, pages and so on. Should only depend on props or internal state (it’s recommended to prefer controllable shared components). Should not depend on any external data which is injected via custom hooks or whatever, for example: any selectors from global store, dispatches and async data requests are prohibited. Exceptions can be: styling, external libraries and translations;
- **containers** - the second basic UI piece. Component considered as container if it composed from shared components or contain any kind of dependency on external data such as: global store subscriptions, dispatching events, injected external data, async data requests and other. Ideally, containers should not render any other containers, but if you faced a case when your container needs any other container, consider to recompose them or provide a new type of UI piece for this. Its totally fine to create new type of container-like components, for example “modals” folder alongside “containers” and “shared” directories that will contain only modal windows which can create compositions of containers and shared but not modals itself.
- **layouts** - container-like UI piece that provides components for page wrappers such as interface with navigation which should be visible in different pages and so on. Since layouts are actually container-like pieces, they can be removed if you don’t need them or created if you need to avoid composition dependency which was described previously;
- **pages** - top level of UI composition and entry point for features. Can contain any kind of data and composition variations;

Since all structure is based on features - its crucial to determine which UI piece comes from. So it’s recommended to share all of them via single namespace registry. For example, for “books” shared components it looks like:
`export const BooksShared = {   Button,
   Input,
   …
}`
It will prevent any kind of mismatching with naming because you actually can have some components with same name but under different features.

**3. Adapters for external data.**

It’s recommended to receive and send external data through a single entry point. In this example, they called "adapters". You can find them in `src/books/store/adapters` and `src/order/store/adapters`. The idea is to keep external data from leaking inside the application modules, which will only depend on a specific contract that is explicitly defined in one place.

**4. Decomposition of UI and domain rules.**

It’s recommended to always decompose business logic from UI and not make them depend on react render cycle.

This example is using redux and its recommended to use global state management tools that will provide an event-driven model and take care of domain logic with delivering necessary data to UI.

In case of redux you should keep keep in mind a few recommended points:
- Keep as much logic as you can in reducers and middleware (listener-middleware, saga, thunk etc.) instead of react components;
- Use selectors to deliver data to UI. Remember, that only reducers and selectors should access state shape;
- Model actions as events and create them as much as you need instead of doing a bunch of calculations alongside with rendering UI;

You can see detailed redux style guide here: https://redux.js.org/style-guide/

**5. Abstractions over details.**

It’s recommended to create as much abstractions as possible over any kind of packages that you use in application to make it resistant to modifications. For example, you can see that axios package is not using directly in app for api calls. There is some abstraction named HttpService which is made around http methods. This means that by doing like this you can change axios to native fetch or another npm package at any time without braking application because it's only depends on HttpService interface.

This rule applies not only to services but for any kind of code that you write in order to deliver some feature. Especially feature that other code depends on and which have potential to change over time.

**6. Prioritisation in testing.**

Code coverage is not the goal (most of the tests in this example are just for demonstration and reference purposes). You should not test everything what you write. Just focus on the core aspects of the app that provide the most value to users. There is short list of prioritised points what you need to test:
- High value features of the project. For example, if app specialised on the ordering books, you probably should pay maximum attention for testing all related stuff like: order form, order process, flow of adding books to cart and so on. It’s recommended to test it from the user perspective with minimum mocks;
- Edge cases in high value features. For example, any error cases of the main feature processes to make sure that application handles them correctly;
- Things that are easy to break;
- Basic components tests: user interactions, conditional rendering, utils / hooks.

# Run example

1. Install node modules: `npm install`
2. Install node modules for server: `cd server && npm install`
3. Run server: `cd server && npm start`
4. Run client: `npm start`
