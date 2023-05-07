# Exercise: Render a large list using SectionList

## Scenario
The Little Lemon app needs to display a large list of menu items on the screen, along with the price of each item, sorted into sections. You have been asked to use the SectionList component to render these menu items efficiently. Make sure that the component you write is readable and clean.

Below is the array of menu items, along with the price for each item.
```js
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];
```

Use this array to render the items within the screen. 

The screenshots below illustrate how your app should look after you complete this exercise:
![alt image](/Images/image-1.png)

The colors displayed in the images above can be applied using the following values:

`#F4CE14, #EE9972, #333333, #EDEFEE, black and white.`

## Instructions
### Step 1: Update MenuItems component to display new list of menu items and use SectionList
To complete this exercise, you’ll first need to update the MenuItems component to display the menu items and price. 

Within this component, use the array provided in this scenario to pass to the data prop of the SectionList component. Then configure the renderItem prop of the SectionList component to render each item’s name as well as the price per item. 

### Step 2: Render Section Header
In this step, you will use the SectionList component to render the section header. The headers are provided within the title property in the array menuItemsToDisplay. Utilize it to render the headers for each section of menu items. Make sure that each menu item is now displayed inside the appropriate section.

### Step 3: Style the component

In this step, you will style the new component that you have created to match the screenshots. Make sure to provide meaningful names to all your styles.

## Conclusion 
By completing this exercise, you will demonstrate your understanding and ability to configure and utilize the SectionList component to render a large list of items by section. 