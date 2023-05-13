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