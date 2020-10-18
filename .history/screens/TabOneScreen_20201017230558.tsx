import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import {
  POKEMON_START_LOADING_LIST,
  POKEMON_START_LOADING_LIST_SAGA,
  sagaStartListPokemon,
} from "../store/actions/pokemon";
import { IInit } from "../store/reducers/pokemon";
import { connect } from "react-redux";


class HomeScreen extends React.Component<any,any> {
  constructor(props: any) {
    super(props);

    
    console.log("[One screen pokemons]", this.props);
  }

  componentDidMount() {
    this.props.getPokemons();
  }

  render() {

    if(this.props.pokemons.loading=== true) {
      return (
        <View>
          <Text>Test loading</Text>
        </View>
      )
    }
    const Item = ({ item }: any) => {
      console.log("[Item]", item);
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      );
    };
    const renderItem = ({ item }: any) => {
      console.log("[renderItem]", item);
      return <Item item={item} />;
    };

    return (
      <SafeAreaView style={styles.container}>
        {this.props.pokemonspokemons ? (
          <FlatList
            data={this.props.pokemons.pokemons}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        ) : (
          <View>
            <Text>no items</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


const mapState = (state: any) => {
  return {
    pokemons: state.pokemons,

  };
};

const mapDispatch = (dispatch: any) => ({
  getPokemons: () => dispatch(sagaStartListPokemon()),
});

const connector = connect(mapState, mapDispatch);

export default connector(HomeScreen);
