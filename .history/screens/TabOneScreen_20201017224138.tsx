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

function HomeScreen() {
  const dispatch = useDispatch();
  let pokemons_: any = useSelector((state: IInit) => state.pokemons);

  const [pokemons, setPokemons] = useState(null);
  console.log("[One screen pokemons]", pokemons);

  useEffect(() => {
    console.log("[One screen pokemons useEffect]");
    dispatch(sagaStartListPokemon());

    return () => {
      console.log("[One screen pokemons return useEffect]", pokemons_);
      setPokemons(pokemons_.pokemons);
    };
  }, [dispatch]);

  const onPressLearnMore = () => {
    console.log("[Press button]", pokemons_);
    console.log("[Press button] use state", pokemons);
  };

  const Item = (item: any) => {
    console.log("[Item]", item);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title.item.name}</Text>
      </View>
    );
    
  };

  const renderItem = (item: any) => {
    console.log("[renderItem]", item);
    return <Item title={item} />;
  };

  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {pokemons ? (
        <FlatList
          data={pokemons}
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

export default HomeScreen;
