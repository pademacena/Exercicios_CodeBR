import React from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notificar = msg => { 
        if(Platform.OS === 'android') { // ios caso for apple
            // ToastAndoird.show(msg)
            //ToastAndroid nao funcionou bem no android, porem o Alert funcionou perfeitamente
            Alert.alert('Informacao', msg)
        } else {
            Alert.alert('Informacao', msg)
        }
    }
    return (
        <Button title='Plataforma?'
        onPress={() => notificar('Parabens')}/>
    )
}