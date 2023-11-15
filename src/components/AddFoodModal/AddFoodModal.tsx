import React, {FC} from "react";
import { Modal, View, StyleSheet } from "react-native";
import { Button, Icon, Input, Text } from "@rneui/themed";
import FormAddFoodModal from "../FormAddFoodModal";

type AddFoodModalProps = {
    onClose: () => void;
    visible: boolean;
}

const AddFoodModal: FC<AddFoodModalProps> = ({onClose, visible}) => {
    return(
        <Modal visible={visible} onRequestClose={onClose} transparent animationType='slide'>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.closeContainer}>
                        <Button icon={<Icon name='close' size={28}/>} onPress={onClose} type='clear'/>
                    </View>
                    <FormAddFoodModal text={'KCAL'}/>
                    <FormAddFoodModal text={'name'}/>
                    <FormAddFoodModal text={'portion'}/>
                    <View style={styles.buttonContainer}>
                        <Button title='Add' icon={ <Icon name='add' color='#fff' />} radius='lg' color='#4ecb71' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    content: {
        width: '75%',
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 20, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeContainer: {
        alignItems: 'flex-end'
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
})

export default AddFoodModal;