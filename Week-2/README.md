# Explore the FlatList Component

Let’s start with a list of menu items you want to display on the Little Lemon menu. It is declared as an array of objects. Each item contains a name representing the menu item’s name and a unique id.
```js
    const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },	
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' }
```

To use the `FlatList` component, you will need to import it directly from the React Native package, since it is a core component. Use the following code snippet:
```js
import { View, Text, StyleSheet, FlatList } from 'react-native';
```

The `FlatList` component has two required props you will need to pass to it as a bare minimum.
1. The first prop is the `data` that accepts a plain array. This array contains the list of items to display.
2. The second prop is the `renderItem`. The renderItem takes an item from the data and renders it into the list.

You can also provide additional metadata like index to the renderItem. Here index is a number that corresponds to a particular item in the data array.
Now within the MenuItems component, you are going to render the FlatList component as follows:
```js
const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={renderItem}></FlatList>
    </View>
  );
};
```
Notice here that you have provided the data prop with the name of the array you already have defined, which is menuItemsToDisplay. The renderItem method calls a call-back method which renders another component called Item. You can also see an additional prop called the keyExtractor being passed to the FlatList component. It instructs the list to use the id of each item as React keys.

Next you'll define the Item component.
```js
const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);
```

In the code above, the Item component takes name as the prop. And it renders name within a parent view. The Item component is rendered for every item in the array until it reaches the end. 

And that’s it! 

This is a much better way to render large lists performantly than the ScrollView component. The FlatList renders items lazily, which means it only renders items actually seen on the screen. Once you start scrolling up or down, those items off the screen are removed, and the new items are rendered. This form of lazy rendering is very performant and effective when rendering large lists in mobile apps. 

# Explore the SectionList Component
Within each category, there is a data array that contains the name of each menu item for that category.
```js
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
   {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ]
   },
     {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  }
]
```

To use the SectionList component, you will need to import it directly from the React Native package since it is a core component.
```js
import { View, Text, StyleSheet, SectionList } from'react-native';
```

The SectionList component has two required props you will need to pass as a bare minimum. It is very similar to the FlatList component you learned about in an earlier section of the course.

1. The first prop is the sections that accept a plain array. This array contains the list of items to display. 
2. The second required prop is the renderItem. The renderItem takes an item from the sections and renders it into the list.

Now within the MenuItems component, you should render the SectionList component as follows:
```js
const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
       </SectionList>
    </View>
  );
};
```
Notice here that you have provided the `sections` prop with the name of the array you already have defined, which is menuItemsToDisplay. The `renderItem` method calls a call-back method which renders another component called Item. You can also see an additional prop, the `keyExtractor` being passed to the SectionList component. It tells the list to use each id as React keys.

Notice there is a `renderSectionHeader` call-back function passed to the prop as well. This is used to render each section’s header. These examples would be Appetizers, Main Dishes and so on. It renders title from the menuItemsToDisplay array.  

Let’s define the Item component next:
```js
const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);
```

In the above code, the Item component takes name as the prop and it renders name within a parent view. The Item component is rendered for every item in the array until it reaches the end.

You can enhance your SectionList component with separators and footers if you want. They are passed to the component via the ListFooterComponent prop and the ItemSeparatorComponent prop as shown below:
```js
const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}></SectionList>
    </View>
  );
};
```

Below you'll find the component code for the separator and footer:
```js
const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);
```

# TextInput Component and its Features
The feedback form will accept the user’s input via the virtual keyboard. To do this, React Native provides the TextInput component out-of-the-box.

`import`
Let’s go ahead and import the TextInput component, as shown below, along with the other necessary imports:
```js
import React, { useState } from 'react'; 

import { ScrollView, StyleSheet, Text, TextInput } from 'react-native'; 
```
Note that you will have to import the useState hook as well. This will be used to keep track of the local state of all the user inputs within the feedback form.

## Setting local state:
The next step is to set up the state variables within the new FeedbackForm component. The default value for all these state variables will be an empty string.
```js
const [firstName, onChangeFirstName] = useState(''); 
const [lastName, onChangeLastName] = useState(''); 
const [message, onChangeMessage] = useState(''); 
```
You have set up the local state for the first name, last name, and a feedback message. Each of these will keep track of what the user types in the respective text input boxes.

## Configure Text Input
The next step is to configure the TextInput component. You will be rendering three text inputs for each box: first name, last name, and the message.

You will pass a style, value, and onChangeText prop to each text input. The value here represents what the user is typing within the box, and it is the current value of the local state variable of that box. The onChangeText prop will call back the set state method of each of the local state variables.

For instance, for the first name, the onChangeText will get triggered as the user is typing, and it will call the onChangeFirstName method and set the new or updated text to the firstName variable.
```js
     <TextInput 
        style={styles.input} 
        value={firstName} 
        onChangeText={onChangeFirstName} 
      /> 
      <TextInput 
        style={styles.input} 
        value={lastName} 
        onChangeText={onChangeLastName} 
      /> 
      <TextInput 
        style={styles.messageInput} 
        value={message} 
        onChangeText={onChangeMessage} 
      /> 
```

## Tips and Tricks to handle the virtual keyboard
### keyboardDismissMode
A common problem you will encounter while developing React Native apps is that the virtual keyboard within a ScrollView will be constantly visible while you scroll through a page. You would have to tap outside of the text input and dismiss it. This could get annoying to the user. Instead, you can provide a seamless user experience by applying the keyboardDismissMode prop within your ScrollView component.

Setting the prop value to `on-drag` will ensure the keyboard is dismissed when you start scrolling or dragging on the screen. This will be seamless for the user, who can always tap back on the text input box to open up the virtual keyboard again.
```js
<ScrollView keyboardDismissMode="on-drag"> 
```
The keyboardDismissMode prop by default has the value `none`, which means the drags do not dismiss the keyboard.

### KeyboardAvoidingView
Another handy component for managing the virtual keyboard is the KeyboardAvoidingView. As the name suggests, it is a component that automatically adjusts its height, position, or bottom padding based on the keyboard’s height so that it remains visible. In contrast, the virtual keyboard is still displayed. This component is part of the core react-native package and can be imported directly as follows:
```js
import { KeyboardAvoidingView } from 'react-native';
```
While using this component, you can set specific properties depending on whether it is an iOS or Android device. To determine that, you can use the Platform API, also available within React Native.
```js
import { Platform } from 'react-native';
```

#### Configuring KeyboardAvoidingView
This component inherits all the props of View, making it essentially View with additional capabilities. Within the KeyboardAvoidingView component, you can pass the behavior prop. This prop determines how to react to the presence of the keyboard. Depending on the use case, three values can be passed to it: height, position and padding. 

In this example, you can see how the Platform API sets the behavior value to padding for iOS devices and, height for all other devices.
```js
<KeyboardAvoidingView
   style={styles.container}
   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
```

### Putting it all together 
Finally, let’s find out how your code might look once you’ve applied both keyboardDismissMode and KeyboardAvoidingView together.
```js
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const FeedbackForm = () => {
  // declare the variables
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F4CE14',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});

export default FeedbackForm;
```

# Common props of TextInput component

## placeholder
As the name suggests, this is the placeholder string displayed before the user enters anything into the text input box. By default, this will be empty.

## multiline
The multiline prop is Boolean; when set to true, the text input can be multiple lines. By default, it is set to false, and all the text that cannot fit within a single line is truncated and not visible to the user.

The multiline prop has been set to true in the following code snippet for the message text input. This means the user can enter feedback for multiple lines.

## maxLength
As the name suggests, this prop limits the maximum number of characters that can be entered. This prop accepts a number as the value.

## keyboardType
The React Native TextInput component supports various native keyboard types on both iOS and Android. Here are <a href="https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/">links</a> to the various platform-specific keyboards available.

## secureTextEntry
this typical of props prevent user to see the characters they are typing. for example use is password, the value of this props is boolean
the defailt value is false.

# Text Input Method
## onFocus

This call-back method is called when the text input is focused.

In the feedback form for the Little Lemon app, let’s say you want to display an alert message when the first name text input is in focus. To do that, you can use the onFocus method and pass a rendering of the alert to it, as shown below. Here the alert comes from the Alert component, which is a built-in component in React Native.
```js
<TextInput 
   style={styles.input} 
   value={firstName} 
   onChangeText={onChangeFirstName} 
   placeholder={'First Name'} 
   onFocus={() => {Alert.alert(“First name is focussed”)}} 
/> 
```

## onBlur
This call-back method is called when the text input is blurred or loses focus. Extending the same example, you can display an alert when the first name text input is blurred as follows:
```js
<TextInput 
   style={styles.input} 
   value={firstName} 
   onChangeText={onChangeFirstName} 
   placeholder={'First Name'} 
   onFocus={() => {Alert.alert(“First name is focussed”)}} 
   onBlur={() => {Alert.alert(“First name is now blurred”)}} 
/> 
```
The alert that indicates that the first name is blurred will automatically display once the first name text input box loses focus.

## clearButtonMode
This is an exciting prop that is available only on iOS. It displays a clear button on the right side of the text view. This is only supported on single-line text inputs and iOS.

The value is set to never by default and accepts other values such as always, unless-editing, and while-editing.
```js
<TextInput 
   style={styles.input} 
   value={firstName} 
   onChangeText={onChangeFirstName} 
   placeholder={'First Name'} 
   clearButtonMode={“always”} 
/> 
```
In the above code snippet, the clearButtonMode prop has been set to always. This means that the text input for the first name will always display the clear button, and clicking on it will automatically clear all the existing text. 

In this reading, you learned about additional methods and props that can be used to customize the TextInput component.
