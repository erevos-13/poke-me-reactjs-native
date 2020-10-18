import React from "react";
import {View, Text} from "react-native"
class PokemonScreen extends React.Component<any,any>{
    constructor(props: any){
        super(props);
        console.log('[Pokemon Info]', this.props);
        
    }

    render() {
        return (
            <View>
                <Text>{this.props.params.name}</Text>
            </View>
        )
    }

}

export default PokemonScreen;