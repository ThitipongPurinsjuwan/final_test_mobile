import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://thailandtourismdirectory.go.th/th/info/attraction/detail/itemid/21344',
        }}
      />
    );
  }
}

export default MyWeb;
