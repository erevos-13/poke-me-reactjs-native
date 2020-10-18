import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
class PokemonScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        pokemon: props.route.params.pokemon
    }
  }

  componentDidMount() {
      console.log('[Pokemon Screen props]', this.state)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: this.state.pokemon.image }}
          />
          <Text>{this.state.pokemon.image}</Text>
        </View>
        <Text>{this.state.pokemon.name}</Text>
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
  image: {
    height: 250,
    width: 250,
  },
});

export default PokemonScreen;
