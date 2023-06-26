# Intructions 
The Little Lemon app should have a Welcome screen and a Subscribe screen. Users will start on the Welcome screen and move to the Subscribe screen, where they can fill out and submit a form. The steps below will guide you through the specific requirements.

## Step 1: Setup Stack Navigation
You will need React Navigation to move between the two screens of the app. The App.js file has already been completed for you in the starter code.

The `navigators/RootNavigator.js` file needs additional setup. Make sure to add the stack screens to complete the navigation setup.
```js
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
```

## Step 2: Welcome screen component
The Welcome screen should have a Little Lemon logo and some text to welcome users. It should also contain a Pressable button that can navigate to the Subscribe screen. The text on this button should read “Newsletter”.

Add the code to complete the Welcome Screen component. You will need components such as View, Text, Image and Pressable to achieve the desired output. Make sure to use the navigation prop to move between the screens.
```js
import * as React from 'react';
import { View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View></View>;
};

export default WelcomeScreen;
```

## Step 3: Subscribe Screen component
The Subscribe screen must contain a text input box that allows the user to enter their email address and a button that reads “Subscribe”. Clicking on this button will then show an alert message to the user to confirm the subscription. The entire workflow is illustrated in the screenshots above. Use this as an inspiration to get your own Little Lemon app setup.

Add the code to complete the Subscribe screen component. In addition to the components that you used in the Welcome screen, you will also use the TextInput component to configure the text input box to enter an email address and the Alert component to display an alert message.
```js
import * as React from 'react';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  return <View></View>;
};

export default SubscribeScreen;
``` 

## Step 4: Validate email
You can use the validateEmail util method, which is part of the starter code, to determine if the user has entered a valid email. If the email is valid, then the Subscribe button should be enabled. If the email is invalid, then the button should be disabled. You will simply have to work on the UI to enable and disable the button. The validateEmail util method is already available! You can import it with the following line of code:
```js
import { ValidateEmail } from '../utils';
```

## Step 5: Style the components
Once you get the basic functionality completed, revisit the components and ensure proper styling has been applied. Use the StyleSheet API to abstract styles and keep code clean. Make sure to add meaningful names to the styles as well.