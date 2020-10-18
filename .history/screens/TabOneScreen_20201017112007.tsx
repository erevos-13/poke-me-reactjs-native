import * as React from "react";
import { StyleSheet, FlatList, Item } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { POKEMON_START_LOADING_LIST } from "../store/actions/pokemon";
import { IInit } from "../store/reducers/pokemon";

export default function HomeScreen() {
  const dispatch = useDispatch();
  dispatch({ type: POKEMON_START_LOADING_LIST });

  const pokemons_ = useSelector((state: IInit) => state.pokemons);
  console.log("[One screen pokemons]", pokemons_);
  const renderItem = ( item: any ) => <Item title={item.name} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
      {pokemons_ ? (
        <FlatList
          data={pokemons_}
          keyExtractor={(item, index) => item.name}
          renderItem={renderItem}
        ></FlatList>
      ) : (
        <Text>Not list</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
