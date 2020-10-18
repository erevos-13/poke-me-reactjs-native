import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList, Button, SafeAreaView } from "react-native";
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

  const [pokemons, setPokemons] = useState([{id: 1,name: 'sd'},{id: 2,name: 'sd'},{id: 3,name: 'sd'},{id: 4,name: 'sd'}]);
  console.log("[One screen pokemons]", pokemons);
  const Item = (item: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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


export default  HomeScreen;