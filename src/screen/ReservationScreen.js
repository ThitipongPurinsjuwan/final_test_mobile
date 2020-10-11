//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  FlatList,
} from 'react-native';
//import all the basic component we have used

import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';

// import Caard from '../components/Card';

export default class ReservationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      img: require('../StaffsPhoto/7501.jpg'),
      search: '',
      checkedGTour: false,
      checkedBTour: false,
      checkedLunch: true,
      cid: '',
      cname: '',
    };
  }

  getCID() {
    return (
      fetch(
        'http://172.16.156.151/mobile_app/final_test/API/get_id_with_name_of_customer.php?id=' +
          this.state.cname,
      )
        // return fetch(
        //   'http://172.16.156.151/mobile_app/final_test/API/get_id_with_name_of_customer.php?id=Thitipong',
        // )
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({data: responseJson});
          this.setState({cid: this.state.data[0]['CID']});
          alert('cid : ' + this.state.cid);
          this.insertBooking();
          // this.state.cid = this.state.data['CID'];
        })
        .catch((error) => {
          alert(error);
          console.error(error);
        })
    );
  }

  insertBooking() {
    fetch(
      'http://172.16.156.151/mobile_app/final_test/API/insert_booking.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CID: this.state.cid,
          GTour: this.state.checkedGTour,
          TTour: this.state.checkedBTour,
          Lunch: this.state.checkedLunch,
        }),
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
        // this.setState({loading: false, disabled: false});
      })
      .catch((error) => {
        alert(error);
        console.error(error);
        // this.setState({loading: false, disabled: false});
      });
  }

  updateCheckGT = () => {
    this.setState({checkedGTour: !this.state.checkedGTour});
  };

  updateCheckBT = () => {
    this.setState({checkedBTour: !this.state.checkedBTour});
  };

  updateCheckLunch = () => {
    this.setState({checkedLunch: !this.state.checkedLunch});
  };

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
          <View style={{margin: 5}}>
            <Input
              placeholder=" Name..."
              name="name"
              leftIcon={{type: 'font-awesome', name: 'address-book'}}
              onChangeText={(value) => this.setState({cname: value})}
            />
            <CheckBox
              center
              title="Grand Tour"
              checked={this.state.checkedGTour}
              onPress={this.updateCheckGT}
            />
            <CheckBox
              center
              title="Boat Tour"
              checked={this.state.checkedBTour}
              onPress={this.updateCheckBT}
            />
            <CheckBox
              center
              title="Lunch"
              checked={this.state.checkedLunch}
              onPress={this.updateCheckLunch}
            />
          </View>
          <View style={{width: 200, margin: 20}}>
            <Button title="Save" type="outline" onPress={() => this.getCID()} />
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
