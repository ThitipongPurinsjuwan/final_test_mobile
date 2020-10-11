import React from 'react';
import {Divider} from 'react-native-elements';

const Div = () => (
  <Divider style={{backgroundColor: 'black', width: 300, margin: 5}} />
);

export default Div;

// export default class Div extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <Divider style={{backgroundColor: 'blue', width: 100}} />;
//   }
// }
