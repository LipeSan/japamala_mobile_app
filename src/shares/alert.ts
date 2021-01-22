import { Alert } from 'react-native'

export interface SimpleAlert {
    title?: string,
    message: string,
    onPress?: any
}

const SimpleAlert = (alert: SimpleAlert) => {
    Alert.alert(
        alert.title ? alert.title : "",
        alert.message,
        [{
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        {
            text: "OK",
            onPress: () => alert.onPress ? alert.onPress : null,
        }
        ]
    )
}

export default {
    SimpleAlert
}