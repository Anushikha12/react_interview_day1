//1.)What is Virtual DOM?

//Virtual DOM is the in-memory or virtual representation of the real DOM.since direct update or any small change in real DOM causes re-rendering of the page which is slow.Hence,to solve this isssue ,react uses the concept of virtual dom.basically,there are two copies of virtual DOM.whenever,the page loads ,first copy of virtual DOM is made which is in sync with the real DOM.when, any state changes ,second copy of virtual DOM is made and these both copies are compared through diffing algorithm.then the first copy of virtual DOM makes only those changes in the real DOM ,hence,the whole page doesn't re-render.this whole process is known as reconciliation.

//2.)What is SPA?

//SPA ia a web app implementation that loads only a single web document,then updates the body content of that single document via JS.In this,our browser doesnot reload,only updates the same page.

//3.)What is difference between class and functional component.

//functional component:------
//they are pure js functions that accepts props as arguments and returns some JSX.
//there are no render method used here.
//react hooks is used instead of react lifecycle components.
//constructor are not used.

//class components:--------
//these are ES6 classes that requires to extend from React.Component.
//render method is used here.
//react lifecycle methods are used.
//constructor and super keyword is used.

//4.)What does mean by state and its use in react?

//State of a component is an object that holds some information that may change over the lifetime of the component
//State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

//5.)What is JSX and why do we use it instead of js?

//jsx stands for javascript XML.it allows us to write html in js without using any createElement() or appendChild() methods.
//its a syntactic sugar for React.createElement().
//babel converts jsx to simple js which browser can understand.
//its easy to visualizw DOM by writing jsx.

//6.)What is package.json?

//it is the file which is used to store metadata of our react application.
//it also stores information about the dependency packages which we are using in our project.
