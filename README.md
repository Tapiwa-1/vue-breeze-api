# Vue 3 Breeze API
 Small frontend project that l have build with vuejs that consumes RESTAPI l build with the help of Laravel Breeze
 <img  src="https://github.com/Tapiwa-1/Tapiwa-1/blob/main/laravuesignin.png"/> 
 
## Features

- Registration
- Login ((Making sure csrf token is set))
- Forget Password
- Logout
- Home Page if login successfully

## Screenshots
| <img  src="https://github.com/Tapiwa-1/Tapiwa-1/blob/main/laravuesignin.png"/> | <img  src="https://github.com/Tapiwa-1/Tapiwa-1/blob/main/laravuesignup.png"/> |
| ------------- | ------------- |
| <img  src="https://github.com/Tapiwa-1/Tapiwa-1/blob/main/laravueforgetpassword.png"/> | <img  src="https://github.com/Tapiwa-1/Tapiwa-1/blob/main/laravueresetpassword.png"/> |
| ------------- | ------------- |

## Dependencies

- <b>axios</b> :  A promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
- <b>flowbite</b> :Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.
- <b>Pinia</b> : State management for vue-projects
- <b>Vue Router</b> : The official router for Vue.js

## Key Notes
- <b>A callback</b> is a function passed as an argument to another function.
```
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```
## Laravel Auth Routes
### Registration
```
Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('guest')
                ->name('register');
```
### Login Route
```
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');

```
