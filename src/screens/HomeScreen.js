import React from 'react'
import { StyleSheet, Text, View, Linking, PixelRatio } from 'react-native'
import { useFonts } from 'expo-font';
import Button from '../components/Button/Button';

const HomeScreen = () => {

    const [loaded] = useFonts({
        Raleway: require('../../assets/fonts/Raleway.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const callDoctor = () => {
        Linking.openURL(`tel:3322646941`)
    }

    const callEmergency = () => {
        Linking.openURL(`tel:3310802775`)
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.emptyTopMainView} />
            <View style={styles.mainNameView}>
                <Text style={styles.mainName}>Dr. David Dieguez Vega</Text>
            </View>
            <View style={styles.specialityView}>
                <Text style={styles.specialityText}>Traumatologia y Ortopedia</Text>
                <Text style={styles.specialityText}>Alta especialidad en artroscopia y lesiones deportivas</Text>
            </View>
            <View style={styles.emptyMiddleMainView} />
            <Text style={styles.buttonLabel}>¿Necesitas servicios de ambulancia?</Text>
            <Button title='Emergencias' onPress={callEmergency} />
            <View style={styles.emptySecondaryView} />
            <Text style={styles.buttonLabel}>¿Necesitas atención urgente?</Text>
            <Button title='Consultorio' onPress={callDoctor} />
            <View style={styles.emptyBottomView} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
    },
    emptyTopMainView: {
        flex: 3
    },
    mainNameView: {
        backgroundColor: '#1E6DB6',
        borderRadius: 10,
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    mainName: {
        fontFamily: 'Raleway',
        fontSize: PixelRatio.get() * 10,
        paddingHorizontal: 20,
        color: 'white',
    },
    specialityView: {
        borderColor: 'black',
        alignSelf: 'center',
        flex: 5,
        padding: 10,
        borderRadius: 5,
        marginTop: PixelRatio.get() * 5,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: .4,
        shadowRadius: 5,
        width: '100%',
        backgroundColor: 'white'
    },
    specialityText: {
        color: '#1E6DB6',
        fontWeight: '300',
        fontSize: PixelRatio.get() * 6,
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 10,
    },
    emptyMiddleMainView: {
        flex: 1
    },
    buttonLabel: {
        fontFamily: 'Raleway',
        fontSize: PixelRatio.get() * 10,
        marginTop: 15,
        flex: 4,
        marginLeft: 5,
        width: PixelRatio.getPixelSizeForLayoutSize(120),
    },
    emptySecondaryView: {
        flex: 2
    },
    emptyBottomView: {
        flex: 4
    },
})