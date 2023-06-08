# Exploring Pressable

## Imports
First, you will import the Pressable component from the React Native package. As it is a core component, it can be directly imported from the React Native package. 
```js
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native'
```

In order to keep track of the ViewMenu button state and the show or hide menu items, you should use the useState hook. This will be used to keep track of the local state of the ViewMenu button within this component.

Make sure to first import the useState hook to make it available.
```js
import React, { useState } from 'react'; 
```

## Setting up Local State
Within the MenuItems component, you can set up the local state as needed.
```js
const [showMenu, setShowMenu] = useState(false);
```

## Using the Pressable
The Pressable component can accept a child or any number of children. These children can be any React Node, such as boolean, number, a React element, String, or an array of any of these.   

Within the MenuItems component, the text ViewMenu is wrapped within the Pressable component. Also, the onPress handler calls the setShowMenu method to toggle the Boolean value of showMenu.

When the user clicks on the ViewMenu text, the showMenu Boolean gets toggled to true immediately at the onPress handler of the Pressable.

Also, notice that the text changes, based on the showMenu value. If the showMenu is true, the button text reads 
Home If it is false, then it would read View Menu.

Note that the Pressable component inherits all the styles of the View component, which means you can style it with all the styles you have available for a View component.
```js
<Pressable 
  style={menuStyles.button} 
  onPress={() => { 
    setShowMenu(!showMenu); 
  }}> 
    <Text style={menuStyles.buttonText}> 
      {showMenu ? 'Home' : 'View Menu'} 
    </Text> 
</Pressable> 
```

# Exploring the Image Component

## Import 
The Image component is a core component of React Native used to render images on the screen. You can import it along with the other components needed for the Welcome component as follows:
```js
import { View, Image, StyleSheet, Text } from 'react-native'; 
```

## Folder
Create an img folder within your project under the src folder. Make sure to add the littleLemonLogo.png to the img folder. Now the logo is part of your Little Lemon project and can be accessed by the Image component directly.

You can use the image below for the logo and save it as the littleLemonHeader.png

## Configuring Image Component
The Image component is configured as follows:
```js
<Image style={styles.logo} source={require('img/littleLemonLogo.png')} />
```

## Exploring props to the Image Component

### resizeMode
The most commonly used prop for the Image component is `resizeMode`. It determines how to resize an image when the window frame does not match the raw image dimensions.

resizeMode can accept the following values:

- cover: This is used to scale the image uniformly and maintain the image’s aspect ratio. Below is an example of the picture with the menu with resizeMode prop set to cover.
- contain : This scales the image uniformly so that both dimensions of the image will be equal to or less than the corresponding dimension of the view.
- stretch: This is used to scale with height independently and may change the original image's aspect ratio.
- repeat: The image is repeated to cover the frame of the view. 
- center: The image is centered in the view along with both dimensions. 

### accessible
It is always good to keep accessibility as a priority while developing applications. The accessible prop accepts a Boolean true or false. When it is set to true, it indicates that the image is an accessibility element.

### accessibilityLabel
Once the image is set to be accessible, it is time to provide an accessible label for the image. This is the text that the screen reader reads when the user interacts with the image. Make sure to give a meaningful and descriptive name to the prop.


# Hooks in React Native
## Exploring the useColorScheme hook
### Import 
The good news is that the useColorScheme hook is part of the core react-native package and can be directly imported. Here is how the hook can be imported from React Native.
```js
import { useColorScheme } from 'react-native'; 
```

### Utilizing useColorScheme
Within the Welcome component, you can directly initialize the useColorScheme hook. It returns the colorScheme object as shown below.
```js
const colorScheme = useColorScheme();
```
Now the colorScheme can have the following values:
- dark: The user prefers a dark color theme 
- light: The user prefers a light color theme 
- null: No preference from user 
Depending on the settings within the user’s device, the colorScheme value is updated.

Now within the Welcome component, you can update the background color of the view depending on whether the colorScheme is light or dark, as shown below:
```js
const Welcome = () => { 
  const colorScheme = useColorScheme(); 

  return ( 
   <ScrollView 
      style={[ 
        styles.container, 
        colorScheme === 'light' 
          ? { backgroundColor: '#fff' } 
          : { backgroundColor: '#333333' }, 
      ]}> 
      <Image 
        style={styles.logo} 
        source={require('./img/littleLemonLogo.png')} 
        resizeMode="center" 
        accessible={true} 
        accessibilityLabel={'Little Lemon Logo'} 
      /> 

      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text> 
    </ScrollView> 
  ); 
}; 

export default Welcome; 
```

## Explore the useWindowDimensions hook
### Import
The good news is that the useWindowDimensions hook is part of the core react-native package and can be directly imported. Here is how it can be imported:
```js
import { useWindowDimensions } from 'react-native'; 
```

### Utilizing useWindowDimensions
Within the Welcome component, you can directly initialize the useWindowDimensions hook. It returns the window object as shown below.
```js
const window = useWindowDimensions();
// or de-structuring the window
const {height, width, fontScale} = useWindowDimensions();
```

Now within the Welcome component, you can obtain the window dimensions and print them on the screen as follows:
```js
const Welcome = () => { 
  const window = useWindowDimensions(); 
  return ( 
    <ScrollView style={styles.container}> 
      <Image 
        style={styles.logo} 
        source={require('./img/littleLemonLogo.png')} 
        resizeMode="center" 
        accessible={true} 
        accessibilityLabel={'Little Lemon Logo'} 
      /> 
      <Text style={styles.title}> 
        Little Lemon, your local Mediterranean Bistro 
      </Text> 
      <Text style={styles.regular}>Window Dimensions</Text> 
      <Text style={styles.regular}>Height: {window.height}</Text> 
      <Text style={styles.regular}>Width: {window.width}</Text> 
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text> 
    </ScrollView> 
  ); 
}; 

export default Welcome; 
```

## Exploring other community hooks
### Install
The first step is to ensure that you have installed the community hooks package using the following statement:
```
npm install @react-native-community/hooks
```

Once this package is installed, you can access all the community package hooks.
### useDeviceOrientationHook
This hook can determine if the user’s mobile device is viewed in landscape or portrait mode. You can utilize this hook to determine the orientation if your app needs to support both modes.

First, you can import the hook from the react-native-community package. Then you can directly use the hook within your React component.
```js
import { useDeviceOrientation } from '@react-native-community/hooks' 

const orientation = useDeviceOrientation() 
 
console.log('is orientation portrait: ', orientation.portrait) 
console.log('is orientation landscape: ', orientation.landscape) 
```
The useDeviceOrientation hook returns the orientation object. The object has two values: portrait and landscape.
### useAppStateHook
The useAppState hook is quite useful. This hook is used to determine the current app state. It can be active, background or inactive (iOS only). This determines when the user puts the app in a closed, background, inactive or active state.

This information is helpful to the developer to take specific necessary actions within the app, depending on whether the app is actively running or in the background. For example, specific applications like banking applications may log out the user after a particular time of inactivity or when the app is in the background.

Observe the code below, which uses useAppState to store text from the clipboard within the app:
```js
import { useClipboard } from '@react-native-community/hooks' 

// Inside the component 

const [data, setString] = useClipboard() 

<Text>{data}</Text> 

<Button title='Update Clipboard' onPress={() => setString('new clipboard data')}>Set Clipboard</Button> 
```