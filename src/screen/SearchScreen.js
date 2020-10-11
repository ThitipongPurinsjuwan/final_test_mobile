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
import Search from '../components/Searc';
// import Caard from '../components/Card';

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      data: '',
      img: require('../StaffsPhoto/7501.jpg'),
      param: navigation.getParam('params', ''),
      // intd: '7501.jpg',
      // img: require('../StaffsPhoto/' + intd),
    };
  }

  componentDidMount() {
    var api =
      'http://172.16.156.151/mobile_app/final_test/API/get_staff_where.php?id=' +
      this.state.param;
    return fetch(api)
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
        <Divider />
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <Card>
                <Card.Title>Staff ID {item.SID}</Card.Title>
                <Card.Image source={this.state.img} />
                <View style={{width: 300, marginTop: 10, alignItems: 'center'}}>
                  <Text>Name : {item.SName}</Text>
                  <Text>Telephone : {item.STelephone}</Text>
                  <Text>SPhoto : {item.SPhoto}</Text>
                </View>
              </Card>
            </View>
          )}
        />
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
