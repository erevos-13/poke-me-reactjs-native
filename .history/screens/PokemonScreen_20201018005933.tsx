import React from "react";
import {View, Text} from "react-native"
class PokemonScreen extends React.Component{
    constructor(props: any){
        super(props);
        console.log('[Pokemon Info]', this.props);
    }

    render() {
        return (
            <View>
                <Text>test pokimton</Text>
            </View>
        )
    }

}

export default PokemonScreen;