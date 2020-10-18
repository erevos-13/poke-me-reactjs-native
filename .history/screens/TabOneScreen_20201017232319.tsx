import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
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

class HomeScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[One screen pokemons]", this.props);
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount() {
    if (this.props.pokemons.pokemons.length === 0) {
      console.log("[Home]", this.props);
      this.props.getPokemons();
    }
  }

  selectPokemon = (item) => {
    console.log("[Select item]", item);
  };

  render() {
    if (this.props.pokemons.loading === true) {
      return (
        <View>
          <Text>Test loading</Text>
        </View>
      );
    }
    const Item = ({ item }: any) => {
      console.log("[Item]", item);
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.selectPokemon(item)}
        >
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
    const renderItem = ({ item }: any) => {
      console.log("[renderItem]", item);
      return <Item item={item} />;
    };

    return (
      <SafeAreaView style={styles.container}>
        {this.props.pokemons.pokemons ? (
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
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  title: {
    fontSize: 32,
  },
  card: {},
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
