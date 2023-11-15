import React, {FC} from 'react';
import { View, StyleSheet } from "react-native";
import { Input, Text } from "@rneui/themed";

type FormAddFoodModalProps = {
    text: string;
    inputValue: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormAddFoodModal: FC<FormAddFoodModalProps> = ({text, inputValue, setValue}) => {
    return(
        <View style={styles.formItem}>
            <View style={styles.inputContainer}>
                <Input  value={inputValue} onChangeText={setValue} />
            </View>
            <View style={styles.legendContainer}>
                <Text style={styles.legend}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 2
    },
    legendContainer: {
        flex: 1
    },
    legend: {
        fontWeight: '500'
    }
})

export default FormAddFoodModal;