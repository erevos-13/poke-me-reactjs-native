import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { POKEMON_START_LOADING_LIST } from "../store/actions/pokemon";
import { IInit } from "../store/reducers/pokemon";

export default function HomeScreen() {
  const dispatch = useDispatch();
  
  const [pokemons, setPokemons] = useState([{name: ''}])
  console.log("[One screen pokemons]", pokemons);
  const Item = (item: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  
  const renderItem = ( item: any ) => <Item title={item.name} />;
  useCallback(
    () => {
      
    },
    [],
  )
    useEffect(() => {
    console.log("[One screen pokemons useEffect]");
    dispatch({ type: POKEMON_START_LOADING_LIST });
    let pokemons_: any = useSelector((state: IInit) => state.pokemons);
      setPokemons(pokemons_);
    return () => {
      console.log("[One screen pokemons useEffect]");

    }
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {pokemons ? (
        <FlatList
          data={pokemons}
          keyExtractor={(item, index) => item.name}
          renderItem={renderItem}
        ></FlatList>
      ) : (
        <Text style={styles.title}>Not list</Text>
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
  item: {

  },
  name: {

  },
  text:{
    color: "black"
  }
});
