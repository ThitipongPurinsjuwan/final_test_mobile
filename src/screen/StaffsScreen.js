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
// import Caard from '../components/Card';

export default class StaffsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      img: require('../StaffsPhoto/7501.jpg'),
      search: '',
      // intd: '7501.jpg',
      // img: require('../StaffsPhoto/' + intd),
    };
  }

  updateSearch = (search) => {
    this.setState({search});
  };

  componentDidMount() {
    return fetch(
      'http://172.16.156.151/mobile_app/final_test/API/get_all_staff.php',
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
    const {search} = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
        }}>
        <Card>
          <View style={{width: 300, margin: 20}}>
            <View
              style={{
                marginBottom: 10,
              }}>
              <SearchBar
                placeholder="id or name..."
                onChangeText={this.updateSearch}
                lightTheme={true}
                platform={'android'}
                value={search}
              />
            </View>
            <Button
              title="Search"
              type="outline"
              onPress={() =>
                this.props.navigation.navigate('Search', {
                  params: this.state.search,
                })
              }
            />
          </View>

          <Divider />

          <Card>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={{flex: 1}}>
                  <Card.Title>Staff ID {item.SID}</Card.Title>
                  <Card.Image source={this.state.img} />
                  <View
                    style={{width: 300, marginTop: 10, alignItems: 'center'}}>
                    <Text>Name : {item.SName}</Text>
                    <Text>Telephone : {item.STelephone}</Text>
                    <Text>SPhoto : {item.SPhoto}</Text>
                  </View>
                  <View style={{margin: 20}}>
                    <Divider />
                  </View>
                </View>
              )}
            />
          </Card>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
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
