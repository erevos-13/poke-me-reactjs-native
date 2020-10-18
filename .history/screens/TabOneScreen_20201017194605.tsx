import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import {
  POKEMON_START_LOADING_LIST,
  POKEMON_START_LOADING_LIST_SAGA,
  sagaStartListPokemon,
} from "../store/actions/pokemon";
import { IInit } from "../store/reducers/pokemon";

export default function HomeScreen() {
  const dispatch = useDispatch();
  let pokemons_: any = useSelector((state: IInit) => state.pokemons);

  const [pokemons, setPokemons] = useState([{id: 1,name: 'sd'},{id: 2,name: 'sd'},{id: 3,name: 'sd'},{id: 4,name: 'sd'}]);
  console.log("[One screen pokemons]", pokemons);
  const Item = (item: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const renderItem = (item: any) => <Item title={item.name} />;
  useCallback(() => {}, []);
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

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
       <FlatList
          data={[{id: 1,name: 'swewe34wd'},{id: 2,name: 'sfdfdfd'},{id: 3,name: 'sw3w33wewewd'},{id: 4,name: '44343434fwefew'}]}
          keyExtractor={(item, index) => item.name}
          renderItem={renderItem}
        ></FlatList>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
  item: {},
  name: {},
  text: {
    color: "black",
  },
});
