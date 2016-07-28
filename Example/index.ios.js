import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native';
import ImageCarousell from 'react-native-image-carousell';

class Example extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([
        require('./images/1.png'),
        require('./images/2.png'),
        require('./images/3.png'),
        require('./images/4.png'),
        require('./images/5.png'),
        require('./images/6.png'),
        require('./images/7.png'),
        require('./images/8.png'),
        require('./images/9.png'),
        require('./images/10.png'),
      ]),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageCarousell
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Example', () => Example);
