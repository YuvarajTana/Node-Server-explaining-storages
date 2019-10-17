## Understanding localStorage, sessionStorage, and cookie

#### localStorage
  - Stores data with no expiration time, and gets cleared only through JavaScript, or clearing browser settings of locally stored data.   
  
  - It allows to store maximum amounts of data than sessionStorage and cookie
  
  - It follows same origin policy

```js
  // Setting localStorage
  localStorage.setItem('key','va;ue');

  localStorage.getItem('key');
  
  // Setting key with object
  localStorage.setItem('key1', JSON.stringfy({name:'yuvaraj'}));

```

#### sessionStorage
  - Stores data with expiration time and it gets cleard when page session ends

  - Opening multiple tabs/windows with the same URL creates sessionStorage for each tab/window.

  - Closing a tab/window ends the session and clears objects in sessionStorage

  ```js
  // Setting sessionStorage
  sessionStorage.setItem('key','va;ue');

  sessionStorage.getItem('key');
  
  // Setting key with object
  sessionStorage.setItem('key1', JSON.stringfy({name:'yuvaraj'}));

```

#### cookie
  - Cookie can set by client/server and can be abale access both the sides. 
  
  - We can set a cookie with expiration and to the domain

  - Cookie data is transformed to all http requets and can store maximum of 4kb.




[Transitions](# https://thoughtbot.com/blog/transitions-and-transforms)
