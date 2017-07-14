**1. Create a new React app using "create-react-app"**.

	* create-react-app react-ecommerce
	* remove files: all from /src except index.js
	* new file: /src/components/App.js
	* update file: /src/index.js

**2. Display a list of products from api**

	* new file: /src/components/ProductList.js
	* hint: use .map and unique key
	* hint: use a Class component
	* hint: use lifecycle methods to call api
	* hint: use state
	* hint: use json-server to create a test api
 	* display loading indicator 

**3. Display a cart component on every page**
	
	* new file: /src/components/Cart.js
	* hint: use App state = {cart: {items: []}}
	* hint: pass 'addToCart' handler 
	* hint: use arrow function

**4. 	Add Routes & Auth & Refactor ProductList to use own state**
	
	* new package: 'react-router-dom'
	* new file: /src/components/Home.js
	* new file: /src/components/Login.js
	* update file: /src/components/ProductList.js - use class & state & move loading inside & lifecycle & call api
	* new route: '/' for 'Home'
	* new route: '/login' for 'Login'
	* new route: '/products' for 'ProductsList'
	* route hint: use 'render' property
	* route hint: use 'exact' property
	* auth hint: use 'this.state.token'
	* auth hint: use 'Redirect' component
	* update file: /src/components/Login.js - use class & state & change event & form submit event
	* form hint: pass 'onLogin' handler

**5. Create a secured admin section with a Dashboard + product table + product add/edit form**

	* new file: /src/components/Admin.js
	* new file: /src/components/AdminProductList.js
	* new file: /src/components/AdminProductForm.js
	* new route: '/admin' to 'Admin'
	* new route: '/admin/products' to 'AdminProductList'
	* new route: '/admin/products/:product_id' to '/AdminProductForm'
	* table hint: use class & state & loader & lifecycle & call api
	* form hint: use class & state & loader & lifecycle & call api & change event & form submit event
	* form requirement: after save redirect to '/admin/products'	
	* new package: 'bootstrap' + import into project

**6. Add reusability with higher order components: Protect & Layout**

	* new file: /src/hoc/Protect.js
	* new file: /src/hoc/FrontLayout.js
	* new file: /src/hoc/AdminLayout.js
	* hint Proiect.js: 3 nested functions.. 1.pass config (token) 2.pass component 3.props
	* hint *Layout.js: 2 nested functions.. 1.pass component 2.props
	
**How to..**

	* class Test extends React.Component
	* React.createElement(component, props, child)
	* Change state: this.setState(newStateObj)
	* Arrow function: () => {}
	* import {BrowserRouter, Link, Redirect, Route} from "react-router-dom"
	* <Link to="/">Home</Link>
	* <Route exact path="/" render={props => <Home {...props}/>}/>
	* <Redirect to="/"/>
	* Current route: this.props.match.path
	* Change location: this.props.history.push(path)
	* JS template `Hello, ${name}`
	* npm install -g json-server
	* json-server --port 8000 --delay 500 data.json
	
**What are pure functions ?**

The whole concept of a pure function is consistency and predictability.

- Pure functions always return the same result given the same arguments. 
- Pure function's execution doesn't depend on the state of the application.
- Pure functions don't modify the variables outside of their scope.

When you call a function that is "pure", you can predict exactly what's going to happen based on its input. This makes functions that are pure easy to reason about and testable.

Pure function

```javascript
function add (x,y) {
  return x + y
}
```

Pure function

```javascript
var friends = ['Ryan', 'Michael', 'Dan']
friends.slice(0, 1) // 'Ryan'
friends.slice(0, 1) // 'Ryan'
friends.slice(0, 1) // 'Ryan'
```
Not a pure function

```javascript
var friends = ['Ryan', 'Michael', 'Dan']
friends.splice(0, 1) // ["Ryan"]
friends.splice(0, 1) // ["Michael"]
friends.splice(0, 1) // ["Dan"]
```

**Single Distribution React Library**

    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    <script type="text/babel">
     // your code here
    </script>
