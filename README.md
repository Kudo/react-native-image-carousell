# react-native-image-carousell
A component for image gallery carousell like iOS Photos app

### Features
- Has a bottom preview for near photos and will scroll responsively
- Support zoom (Currently iOS only)
- Will hide preview when zoomScale > 1

<img src="https://raw.githubusercontent.com/Kudo/react-native-image-carousell/master/Example/images/Example.gif" width="300" alt="Example.gif" />

## Installation
```
npm install --save react-native-image-carousell
```

## Usage
```es6
import ImageCarousell from 'react-native-image-carousell';

class Example extends React.Component {
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
```

## Example
Check [Example](https://github.com/Kudo/react-native-image-carousell/tree/master/Example)

## License
MIT
