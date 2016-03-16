/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 40,
    margin: 50
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return <React.Text style={styles.text}>Nick Castaneda is chill AF</React.Text>;
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
