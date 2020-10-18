import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
class PokemonScreen extends React.Component<any,any>{
    constructor(props: any){
        super(props);
        console.log('[Pokemon Info]', this.props);
        
        
    }

   

    render() {
        
        return (
            <View style={styles.mainContainer} >
                {/* <Image style={styles.image} source={{uri: this.props.route.params.pokemon.image}} /> */}
                <Text>{this.props.route.params.pokemon.name}</Text>
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
        width: "250"
    }
});

export default PokemonScreen;