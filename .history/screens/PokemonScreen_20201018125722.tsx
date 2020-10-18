import React from "react";
import {View, Text, StyleSheet} from "react-native"
class PokemonScreen extends React.Component<any,any>{
    constructor(props: any){
        super(props);
        console.log('[Pokemon Info]', this.props);
        
    }

    render() {
        
        return (
            <View style={styles.mainContainer} >
                <Text>{this.props.route.params.pokemon.name}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default PokemonScreen;