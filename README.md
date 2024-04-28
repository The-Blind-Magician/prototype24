# IMPORTANT NOTES

React is based on `modularity` and a mostly `single-responsibility` architecture. 
When designing components for implementation, several things need to be considered:

1. Components are either "`controlled`" or "`uncontrolled`"
When considering this, ask "is this object responsible for its own state?".
If we only want the color of a box to change when it is clicked, it should be "uncontrolled".
If we want a label changed when an unrelated button is clicked, it should be "controlled"

2. A `parent always controls a child`, never the reverse

3. Sibling or cousin elements should `never communicate directly`, always through the parent by "lifting the state".

4. Modularity is a good thing, but `don't overdo it`. 
Attempt to combine related elements (like groups of buttons), but a login field should never be coupled with a "Contact us" button, etc.

5. Try to `avoid "hackey" solutions`. Because React is modular, `hacks can start compounding` and cause issues down the road. 
Even if it's difficult, to do things the "React way", at least try. It will be easier in the long run.

6. Try to maintain the "`single-responsibility`" style while still considering templating. 
We don't want twelve different types of buttons. We want one that is customizable twelve different ways.

7. Don't be afraid to `pass functions as objects`. Sometimes it doesn't make sense to make an element responsible for its own execution.
For instance, `UploadGroup.js` contains 3 buttons with an "ioHandler" field. These buttons were structured this way because we want them to each behave the same, but perform different operations. In this case, UploadGroup is responsible for fileIO, while the Buttons are responsible for event detection (i.e. click events). We do not want to mix the two if we can help it.

8. If at all possible, set all dynamic values using `this.props.XX`. Bear in mind, `this.props.XX is read-only`. If you need to store writable variables, `use this.state.XX.`

9. If you're passing values to a sibling via the parent you may need to `update the key field` of Child 2 to get it to refresh. I'm sure there's a better way to do this, but I don't know it.

10. Trial and error are your friend. Save/reload often. React is extremely abstract and can be hard to fool-proof the first go round.

11. I highly recommend you whiteboard your structure before starting. React's hyper-modularity can get out of hand very quickly. Identify general zones of control first and specify from there. 

12. When arranging components, flexbox is your friend. The React specific alternative this this is Material-UI, but I've never personally used it.


## `Don't(s)` when developing in React

1. Elements should `never` be modified via `document.getElementByXX()`.
   This defeats the whole point of React and is considered bad form.

2. Elements should `never` attempt to communicate directly with adjacent elements. Data should only pass between a parent and a child. 
   If it is necessary to move data or trigger events from "disconnected" elements, you should "lift up the state".

3. At it's core, this is still JS. Don't assume the code will behave as expected. See below:

> ('0' <= null) => true
> ('0' >= null) => true
> ('0' == null) => false

4. React won't solve all your problems magically. You still need CSS and HTML. 
While React components seem all fancy and nice, they're still just glorified HTML structures.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
