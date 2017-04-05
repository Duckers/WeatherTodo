# WeatherTodo

The WeatherTodo app is a test reference app to showcase how to use Fuse Fabric.

## State

The current state of the app is: __Not finished__.

It has numerous known bugs and lacking features, so use as example only.

## Some features shown

Here are some of the features shown in the app:

- How to configure the Fabric (`WeatherTodo.js`)
- How to create a single fabric that can be databound to in Fuse (`WeatherTodo.js`, `WeatherTodo.ux`)
- Changing the contents of the store (`Todos.js`)
- Subscribing to multiple node changes in the store using `onChanged` (`Todos.js`)
- Pushing viewmodels onto a route (`EditTodo.js`)
- Setting page local data (`EditTodo.js`)
- Adding configuration to the fabric (`OpenWeatherMapConfig.js`)
- Using `this.create` to respond to Fabric lifecycle events
- How to use `next` for fiber chaining (`ConsoleLogger.js`, `GeoLocator.js`, etc)
- Creating Fabric events (`MockGeoLocation.js` and `GeoLocator.js`)
- Creating mock code that can stand in for real implementations (`MockGeoLocation.js`, `MockBackend.js`, etc)
- Layering APIs (`ConsoleLogger.js`, `LogLevelFilter.js`)
- How to create a facade for multiple fibers (`BackendValidator.js`)

It is not yet decided that all of these techniques are considered best practice.

## Features not shown in this project yet

There are a number of features not shown in this project yet, including:

- Namespacing
- `onInput`
- Testing

## Antipatterns

This example code curently exhibits some antipatterns that will be removed as Fabric becomes more mature:

- The selection API uses two way binding, and that is currently handled using `UserEvent`. This will be replaced by `onInput` once it is ready.
-