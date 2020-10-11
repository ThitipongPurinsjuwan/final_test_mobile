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

// My Component
import Divider from '../components/Divider';
import Search from '../components/Searc';
import Web from '../components/Webview';
// import Caard from '../components/Card';

export default class PackegGTourScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      img: require('../StaffsPhoto/7501.jpg'),
      search: '',
    };
  }

  componentDidMount() {
    return fetch(
      'http://172.16.156.151/mobile_app/final_test/API/get_customer_GTour.php',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
          <View style={{margin: 10}}>
            <Card.Title style={{fontSize: 25}}>Grand Tour</Card.Title>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={{flex: 1}}>
                  <Card>
                    <Card.Title>Customer ID : {item.CID}</Card.Title>
                    <Card.Image source={this.state.img} />
                    <View
                      style={{width: 300, marginTop: 10, alignItems: 'center'}}>
                      <Text>Name : {item.CName}</Text>
                      <Text>Telephone : {item.CTelephone}</Text>
                      <Text>Sex : {item.CSex}</Text>
                      <Text>Date : {item.Date}</Text>
                    </View>
                  </Card>
                </View>
              )}
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
