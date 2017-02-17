# Angular Master-Detail Examples

This repo contains two examples of how to build master-detail user interfaces with Angular—one for the web, and one for native mobile using [NativeScript](https://www.nativescript.org/showcases). Both apps are simple Pokémon viewing apps driven by the [free-to-use pokéapi](http://pokeapi.co/).

![](http://i.imgur.com/hmXCe7G.png)

## Web

To run the web app, first clone this repo, and then `cd` into the `pokemon-web` folder.

```
cd pokemon-web
```

Next, run `npm install` to install the app’s dependencies.

```
npm install
```

And finally use `ng serve` to run the app using the Angular CLI.

```
ng serve
```

If all went well you should be able to visit `localhost:4200` in your browser to see your app running.

## Native

To run the native app you need to have NativeScript and its dependencies installed on your development machine. Check out [NativeScript’s installation documentation](http://docs.nativescript.org/start/quick-setup) for details on how to do that.

After that clone this repo and `cd` into the `pokemon-native` folder.

```
cd pokemon-native
```

And then use the `tns run` command to start the app on either iOS or Android.

```
tns run ios
```

Or

```
tns run android
```
