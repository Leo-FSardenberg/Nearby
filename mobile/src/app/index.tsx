import { Button } from "@/components/button"
import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"
import {View, Text} from "react-native"

export default function Index(){
    return(
        <View style={{ flex: 1, padding: 40, gap:40}}>
            <Text>React Native</Text>

            <Welcome/>
            <Steps/>
            <Button/>
        </View>
    )
}