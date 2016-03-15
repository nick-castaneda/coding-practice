// Better errors and disables crappy js features
'use strict';

// Loads the react-native module and assigns it to React
var React = require('react-native');

// Creates stylesheet and assigns it to React
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

// Creates property app from the React.Component class
// returns a new element with the text styles and and text "Hello world"
class PropertyFinderApp extends React.Component {
  render() {
    return React.createElement(React.Text, {style: styles.text}, "Hello World!");
  }
}

// AppRegistry is the root component. Create a sub-component called
// PropertyFinder that returns the propertyfinderapp class
React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
