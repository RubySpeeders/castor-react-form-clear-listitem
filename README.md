# React Props

Props are a way to pass data from parent components to child components. A prop just looks like an element attribute when using it in your JSX.

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Our current application component structure looks something like this...

```
index
+-------------------------+
|App                      |
|+---------------------+  |
||Header               |  |
|+---------------------+  |
|                         |
|                         |
+-------------------------+
```

Everything is in our `App.js` and it's getting a little crowded so let's break it up into a component structure more like this...

```
index
+-------------------------+
|App                      |
|+---------------------+  |
||Header               |  |
|+---------------------+  |
|                         |
|+---------------------+  |
||Welcome Text         |  |
|+---------------------+  |
|                         |
|+---------------------+  |
||Form Input & Button  |  |
|+---------------------+  |
|                         |
|+----------------------+ |
||List of things        | |
||+--------------------+| |
|||List Item           || |
||+--------------------+| |
||+--------------------+| |
|||List Item           || |
||+--------------------+| |
|+----------------------+ |
|                         |
+-------------------------+
```

In order to maintain functionality we'll need to pass data to the different components. This is where `props` come in.

