import React, {FC} from "react";
import { Modal, View, StyleSheet } from "react-native";

type AddFoodModalProps = {
    onClose: () => void;
    visible: boolean;
}

const AddFoodModal: FC<AddFoodModalProps> = ({onClose, visible}) => {
    return(
        <Modal visible={visible} onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.content}>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    content: {

    }
})

export default AddFoodModal;