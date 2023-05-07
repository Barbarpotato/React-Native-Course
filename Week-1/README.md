# Exploring building a component
So far, we have learned about different React Native components, including core components, community components and your custom native components. Where the `core component` is the component that can be used once we initialize our react native project. The `community components` come from an open source react-native community that need to be installed in our project before we can using it and finally the `native component`, where the component that we can made for our-self and can be re-use overtime as we like. we can actually publish our native component to the community and that made our native component to be a comunity component.

In this reading, you will explore the code to build a component from scratch for the Little Lemon app.

The first step is to create a new file for the reusable header component of the Little Lemon app. Create a new file within the components folder; you can call it anything you like. In this example, it’s been named LittleLemonHeader.js

## Define LittleLemonHeaderComponent
```js
import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function LittleLemonHeader() {
    return (
      <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
        <Text style={{ padding: 40, fontSize: 30, color: 'black' }}>
          Welcome to Little Lemon
        </Text>
      </View>
```
The preceding component is a simple reusable header component. It uses the two core components of React Native: `View` and `Text`. Within the parent view, the welcome text is wrapped.

The text will read “Welcome to Little Lemon.” Notice that styling options have been added to both the parent view and the text content. While rendering JSX elements, you must ensure that the elements are wrapped within a parent view, just as you see in this example.

`Render LittleLemonHeader Component`
Now that the header component is defined, how do you display the rendering of the header component on the mobile app?

In the next step, rendering the header component, you will import it within the App component, which is the entry point to the Little Lemon app.  The header component can be imported from the components folder where it lives, using the statement below:

```js
import LittleLemonHeader from './components/LittleLemonHeader';
```

## App Component
```js
import * as React from 'react';
import { View } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './components/LittleLemonHeader';
 export default function App() {
   return (
     <View
       style={{
         flex: 1,
```
The App component renders the LittleLemonHeader within its return method. Notice it is wrapped by a parent view. The View is given styling with a background color and a flex property of 1.

# Explore the View and Text Components

## Build a Header with the View and Text Components
First, you will build the reusable header component. Keep in mind that you can call this custom component anything you want, but in this example it will be named LittleLemonHeader. This component uses both the View and the Text components.
`LittleLemonHeader.js`
```js
import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
      <Text
        style={{ padding: 40, fontSize: 30, color: 'black' }}
        numberOfLines={3}>
        Welcome
        <Text style={{ fontWeight: 'bold' }}> Little Lemon</Text>     {' '}
      </Text>
    </View>
  );
}
```
The component renders a parent View, which has been given a background color and a flex property of 0.2. This means that the header component will occupy 20 percent of the total space on the screen. 

Next, you will see a `Text` component that renders the text `Welcome`. Here the Text component has been given various styling items — padding of 40 pixels, a font size of 30 and a text color of black. You will also notice another `Text` component nested within the parent `Text` component. The component renders the text `Little Lemon` in bold.

The nested `Text` component inherits all the properties and styling from the parent `Text` component. Notice that the number of visible lines have been set to 3 for the parent `Text` component. 

And that’s it! The Little Lemon header component is complete.

## Importing and Rendering the Header
Next, you will import the LittleLemonHeader component that's in the App.js file, which is the root file of this application. Once it is imported, you can render it within the parent View component, as shown in the solution code.

Here the parent view has a flex property of 1 and a background color.
`App.js`
```js
import * as Reactfrom'react';
import{ View } from'react-native';

importLittleLemonHeaderfrom'./components/LittleLemonHeader';

exportdefaultfunctionApp() {
return (
    <View
      style={{
        flex: 1,
backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
    </View>
  );
}
```

# Explore the ScrollView Component

## Create a List
The first step is to create a MenuItems.js file within the components folder of your project. You can name this component whatever you wish. This component is going to display the scrollable list of menu items.

Second, you will declare an array of menu items for Little Lemon. This array will be used later to render the menu items. Observe the code below for the MenuItems component, which contains the array.
`MenuItems.js`
```js
import React from 'react';

import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        indicatorStyle={"white"}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "black",
        }}>
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
          View Menu
        </Text>
        <Text style={{ color: '#F4CE14', fontSize: 36 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;
```

## Build a ScrollView Component
Within the MenuItems component, you will render the ScrollView component within the parent view. Keep in mind that the ScrollView should always be bounded by height. You can see that the ScrollView has been provided with both horizontal and vertical padding of 40 pixels along with a background color. 

In addition, the ScrollView has been provided with the prop `indicatorStyle` with a value of white. This means that the scroll bar indicator will be white in color. This can be swapped to black if the background color is light. 

And that’s it! The ScrollView is now set up, and will render the menu items from the array.

## Import and Render your List
Next, you will need to import the MenuItems component from the App.js file. Once imported, you will then render the component, as shown in the code.
`App.js`
```js
import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      <MenuItems />
    </View>
  );
}
```
# Styling using StyleSheet
You can create stylesheets specific to each component and keep the stylesheets within the same file as the component. This will keep the styles closer to the component and makes it easier to reference.

To create a stylesheet, you will use the `create` method. The styles can be stored within a `const`, as shown below:
```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
```


