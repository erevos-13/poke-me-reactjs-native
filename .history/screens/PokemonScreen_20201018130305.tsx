import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
class PokemonScreen extends React.Component<any,any>{
    constructor(props: any){
        super(props);
        console.log('[Pokemon Info]', this.props);
        this.state ={
            pokemon: this.props.route.params.pokemon
        }
        
    }

    render() {
        
        return (
            <View style={styles.mainContainer} >
                <Image style={styles.image} source={{uri: this.state.pokemon.image}} />
                <Text>{this.state.pokemon.name}</Text>
            </View>
        )
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
        height: "250",
        width: '100%'
    }
});

export default PokemonScreen;