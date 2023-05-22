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