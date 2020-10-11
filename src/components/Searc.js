import React from 'react';
import {SearchBar} from 'react-native-elements';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={{marginHorizontal: 1, marginVertical: 5, marginBottom: 5}}>
        <SearchBar
          placeholder="id or name..."
          onChangeText={this.updateSearch}
          lightTheme={true}
          platform={'android'}
          value={search}
        />
        <Text>{this.state.search}</Text>
      </View>
    );
  }
}
