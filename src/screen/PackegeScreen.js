//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
//import all the basic component we have used

import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import {WebView} from 'react-native-webview';
// My Component
import Divider from '../components/Divider';
import Search from '../components/Searc';
import Web from '../components/Webview';
// import Caard from '../components/Card';

export default class PackegeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      img: require('../StaffsPhoto/7501.jpg'),
      search: '',
    };
  }

  // componentDidMount() {
  //   return fetch(
  //     'http://172.16.29.11/mobile_app/final_test/API/get_all_staff.php',
  //   )
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({data: responseJson});
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  //Setting Screen to show in Setting Option
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card>
          <View style={{margin: 5}}>
            <Card.Title style={{fontSize: 20}}>Reservation</Card.Title>
          </View>
          <View style={{width: 200, margin: 20}}>
            <Button
              title="Grand Tour"
              type="outline"
              onPress={() => this.props.navigation.navigate('PackegeGTour')}
            />
          </View>
          <View style={{width: 200, margin: 20}}>
            <Button
              title="Boat Tour"
              type="outline"
              onPress={() => this.props.navigation.navigate('PackegeBTour')}
            />
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
