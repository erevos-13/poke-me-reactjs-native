import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import pokemonReducer from "./store/reducers/pokemon";
import createSagaMiddleware from "redux-saga";
import ReactThunk from "redux-thunk";
import { watchPokemon } from "./store/saga";
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReactThunk, sagaMiddleware))
);

sagaMiddleware.run(watchPokemon);

// Log the initial state
console.log(store.getState())

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <Provider store={Store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Provider>
    );
  }
}
