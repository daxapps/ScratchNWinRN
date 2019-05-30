import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

var itemArray = new Array(25).fill('empty');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber: ""
    }
  }

  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() });
  };

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber: randomNumber, isScratched: true });
    return randomNumber;
  };

  scratchItem = itemNumber => {
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = "unlucky";
    }
    this.forceUpdate();
  };

  scratchItemIcon = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "dollar"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o"
    }
    return "circle"
  };

  scratchItenColor = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "green"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red"
    }
    return "gray"
  }

  showAllItem = () => {
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = 'lucky'

    this.forceUpdate();
  }

  resetGame = () => {
    this.setState({randomNumber: this.generateRandomNumber()}, () => {
      itemArray.fill('empty');
      this.forceUpdate;
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Scratch N Win!</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(0)
            }}>
              <FontAwesome
              name={this.scratchItemIcon(0)}
              size={50}
              color={this.scratchItenColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(1)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItenColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(2)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItenColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(3)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItenColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(4)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItenColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(5)
            }}>
              <FontAwesome
              name={this.scratchItemIcon(5)}
              size={50}
              color={this.scratchItenColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(6)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(6)}
                size={50}
                color={this.scratchItenColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(7)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(7)}
                size={50}
                color={this.scratchItenColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(8)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(8)}
                size={50}
                color={this.scratchItenColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(9)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(9)}
                size={50}
                color={this.scratchItenColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(10)
            }}>
              <FontAwesome
              name={this.scratchItemIcon(10)}
              size={50}
              color={this.scratchItenColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(11)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(11)}
                size={50}
                color={this.scratchItenColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(12)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(12)}
                size={50}
                color={this.scratchItenColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(13)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(13)}
                size={50}
                color={this.scratchItenColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(14)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(14)}
                size={50}
                color={this.scratchItenColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(15)
            }}>
              <FontAwesome
              name={this.scratchItemIcon(15)}
              size={50}
              color={this.scratchItenColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(16)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(16)}
                size={50}
                color={this.scratchItenColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(17)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(17)}
                size={50}
                color={this.scratchItenColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(18)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(18)}
                size={50}
                color={this.scratchItenColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(19)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(19)}
                size={50}
                color={this.scratchItenColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress={ () => {
              this.scratchItem(20)
            }}>
              <FontAwesome
              name={this.scratchItemIcon(20)}
              size={50}
              color={this.scratchItenColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(21)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(21)}
                size={50}
                color={this.scratchItenColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(22)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(22)}
                size={50}
                color={this.scratchItenColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(23)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(23)}
                size={50}
                color={this.scratchItenColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={ () => {
              this.scratchItem(24)
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(24)}
                size={50}
                color={this.scratchItenColor(24)}
              />
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {},
  itemrow: {
    flexDirection: "row"
  },
  item: {
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    minWidth: 70
  }
});
