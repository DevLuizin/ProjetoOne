import React from "react"
import { View, Text } from "react-native"
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function ResultImc(props){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
        );
}