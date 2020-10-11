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

// My Component
import Divider from '../components/Divider';
// import Caard from '../components/Card';

export default class CustomersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      // img: '../StaffsPhoto/7501.jpg',
      img: require('../StaffsPhoto/7503.jpg'),
    };
  }

  componentDidMount() {
    return fetch(
      'http://172.16.156.151/mobile_app/final_test/API/get_all_customer.php',
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
          marginTop: 70,
        }}>
        {/* <Card></Card> */}
        <Card>
          <View style={{alignItems: 'center'}}>
            <View style={{width: 200, margin: 20}}>
              <Button
                title="Customer Grand Tour"
                type="outline"
                onPress={() => this.props.navigation.navigate('PackegeGTour')}
              />
            </View>
            <View style={{width: 200, margin: 20}}>
              <Button
                title="Customer Boat Tour"
                type="outline"
                onPress={() => this.props.navigation.navigate('PackegeBTour')}
              />
            </View>
          </View>
          <View>
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
                    </View>
                  </Card>
                </View>
              )}
            />
          </View>
        </Card>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
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
