import React from "react"
import { View, Text } from "react-native"
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function ResultImc(){
    return(
        <View>
            <Text>{props.ResultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
        );
}