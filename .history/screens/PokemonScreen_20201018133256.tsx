import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
]);
class PokemonScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      pokemon: props.route.params.pokemon,
    };
  }

  componentDidMount() {
    console.log("[Pokemon Screen props]", this.state);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: this.state.pokemon.image }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{this.state.pokemon.image}</Text>
          <Text>{this.state.pokemon.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // marginTop: 4
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 250,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default PokemonScreen;
