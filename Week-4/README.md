# Installation and Setup of React Navigation
Previously you learned what React Navigation is and how it can be used within your React Native apps to move between screens. In this reading, you will explore the installation and setup instructions to add React Navigation to your app.

### Requirements
Before you get started, make sure that you are using the following:
- React Native version >=0.63 
- Expo version >=41 (If you are using Expo) 
- TypeScript version >=4.1.0 (if you are using TypeScript) 

### Installation into an Expo-managed project
To add React Navigation to a React Native project which uses Expo, follow these instructions:

Install the following dependencies within your project:
```
npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context
```
This will install the versions of the libraries that are compatible with your Expo project. 

Once that is done, you'll have the basic libraries needed to get started with React Navigation.

## Using NavigationContainer
Once the packages are installed, the next step is to wrap the entire app in the NavigationContainer component.
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```
By using this code, the entire app is wrapped within the NavigationContainer component. What this means is that the navigation is available in the whole app. You will learn about each specific navigator in the following items.

In this reading you learned to install and set up React Navigation within your React Native app.

## Creating and Configuring Native Stack Navigator

### Install Native Stack Navigator Library
The very first step in configuring the Native Stack Navigator is to install the library within your React Native app as follows:
```
npm install @react-navigation/native-stack
```

### Create Native Stack Navigator
To create the native stack navigator, you will first import the createNativeStackNavigator from the library you just installed  `@react-navigation/native-stack` 
```
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```

The `createNativeStackNavigator` is a function that returns an `object containing two properties`. The two properties are `Screen` and `Navigator`. Both are React components, and you will use them to configure the navigator. You can instantiate the object for it as follows:
```js
const Stack = createNativeStackNavigator();
```

### Imports 
In this example, you will import the two screens, MenuScreen and WelcomeScreen, which you will be navigating between in the Little Lemon app.
```js
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "./Screens/MenuScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
```

### Configure Native Stack Navigator
Remember that the entire app must be wrapped within the `NavigationContainer`, as seen in the previous sections. Here is how the App component code is written once you have set up the Native Stack Navigator.
```js
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
In this code, the app is wrapped within the NavigationContainer. The Stack object contains both the Navigator and Screen properties. To the Navigator, you can pass the initial route name. Here the initial route has been set to the Welcome screen.

The Screen component can define routes within your app. And each screen in the stack accepts a name prop and a component prop. The component is the name of the imported component itself. The name prop is displayed as a heading on top of the screen when you navigate to each screen. Notice that the stack now has two routes, a Welcome route and a Menu route.

## Passing props to Screen
### Screen Options
Within your stack navigator, if you want to specify the same options for all the screens, then you can utilize the screenOptions prop that can be passed to the Navigator.
```js
<Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
        {/* Rest of the code ... */}
```
In the previous example, the screenOptions prop has been set within the Stack Navigator. A headerStyle has been set with a specific background color. This means that all the screens within this navigator will have the same headerStyle and background color. This will ensure that all the screens are visually consistent.
### Options
If you want to pass specific props per screen, you can then pass them through the options prop within the Stack Screen as shown below:
```js
<Stack.Screen
   name="Welcome"
   component={WelcomeScreen}
   options={{ title: 'Home' }}
 />
```
In the previous example, the title for the Welcome screen has been provided as Home. This is specific to the Welcome screen and will have nothing to do with the other screens.

Now let’s put all this code together to find out how it appears in full:
```js
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Navigating to a Screen
### The Navigation Prop
You use React Navigation for a similar concept in the mobile world. You will use the navigation prop that gets passed down to all the screen components. Using the navigation prop, you can move between the different screens. such as 

Let’s explore the code to do that. 

In the WelcomeScreen component below, notice that navigation has been passed as a prop.
```js
const WelcomeScreen = ({ navigation }) => { 
  return ( 
    <View style={styles.container}> 
      <Image 
        style={styles.logo} 
        source={require('../img/LittleLemonLogo.png')} 
      /> 
      <Text style={styles.title}> 
        Little Lemon, your local Mediterranean Bistro 
      </Text> 
      <Pressable onPress={() => navigation.navigate('Menu')}> 
        <Text style={styles.buttonText}>View Menu</Text> 
      </Pressable> 
    </View> 
  ); 
};  
```
This prop is then used within the Pressable component. When the user clicks on the View Menu text on this welcome screen, they will be taken to the Menu screen, as shown in the code snippet below.

The navigate function on the navigation prop is passed the name of the route that you would like the screen to move to. 

Note that if you call navigation.navigate with a route that has not been defined in the navigator yet, it will simply print an error within the development mode and not show any errors within production mode. This will be a silent error and will not impact the user, other than nothing would happen when they click on the button to move to a non-existent screen.

### Summary
- navigation.navigate('RouteName') pushes a new route to the native stack navigator if it's not already in the stack, otherwise it jumps to that screen.
- We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes.
- The header bar will automatically show a back button, but you can programmatically go back by calling navigation.goBack(). On Android, the hardware back button just works as expected.
- You can go back to an existing screen in the stack with navigation.navigate('RouteName'), and you can go back to the first screen in the stack with navigation.popToTop().
- The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

