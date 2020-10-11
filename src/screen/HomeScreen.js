//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
//import all the basic component we have used
import {Tile} from 'react-native-elements';
export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option
  render() {
    return (
      <Swiper style={styles.wrapper} autoplay={true}>
        <View style={styles.slide1}>
          <Tile
            imageSrc={require('../PackagePhoto/BTour.jpg')}
            title="Tour"
            featured
            caption="Boat Toure"
          />
        </View>
        <View style={styles.slide2}>
          <Tile
            imageSrc={require('../PackagePhoto/001.jpeg')}
            title="Tour"
            featured
            caption="Boat Toure"
          />
        </View>
        <View style={styles.slide3}>
          <Tile
            imageSrc={require('../PackagePhoto/002.jpeg')}
            title="Tour"
            featured
            caption="Boat Toure"
          />
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
