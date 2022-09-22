import React from 'react'
import { StyleSheet, Text, View, Linking, PixelRatio, Image } from 'react-native'
import { useFonts } from 'expo-font';
import Button from '../components/Button/Button';
import LogoDavid from '../../assets/TraumaDep.png';
import LogoIvan from '../../assets/TCCompleto.png';
import { buildDavid } from '../constants';

const HomeScreen = () => {

    const [loaded] = useFonts({
        Raleway: require('../../assets/fonts/Raleway.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const callDoctor = () => {
        Linking.openURL(buildDavid ? `tel:3322646941` : 'tel:3338299198')
    }

    const callEmergency = () => {
        Linking.openURL(buildDavid ? `tel:3310802775` : 'tel:3338299198')
    }
    
    const DoctorName = buildDavid ? <Text style={styles.mainName}>Dr. David Dieguez Vega</Text> :
        <Text style={styles.mainName}>Dr. Iván Campos Hernández</Text>;

    const Speciality = buildDavid ? 
        <Text style={styles.specialityText}>Alta especialidad en artroscopia y lesiones deportivas</Text>
    :  <Text style={styles.specialityText}>Subespecialidad en Pediatria</Text>;


    return (
        <View style={styles.mainView}>
            <View style={styles.emptyTopMainView} />
            <View style={styles.mainNameView}>
                {DoctorName}
            </View>
            <View style={styles.specialityView}>
                <Text style={styles.specialityText}>Traumatología y Ortopedia</Text>
                {Speciality}
            </View>
            <Image source={buildDavid ? LogoDavid : LogoIvan} style={styles.image} />
            <View style={styles.emptyMiddleMainView} />
            <Text style={styles.buttonLabel}>¿Necesitas atención urgente?</Text>
            <Button title='Emergencias' onPress={callEmergency} />
            <View style={styles.emptySecondaryView} />
            <Text style={styles.buttonLabel}>¿Necesitas una consulta?</Text>
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
        flex: 2
    },
    mainNameView: {
        backgroundColor: buildDavid ? '#1E6DB6' : '#234f77',
        borderRadius: 10,
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    mainName: {
        fontFamily: 'Raleway',
        fontSize: PixelRatio.get() * 9,
        paddingHorizontal: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    specialityView: {
        borderColor: 'black',
        alignSelf: 'center',
        flex: 4,
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
        flex: 6
    },
    buttonLabel: {
        fontFamily: 'Raleway',
        fontSize: PixelRatio.get() * 10,
        marginTop: 10,
        flex: 3,
        marginLeft: 5,
        width: PixelRatio.getPixelSizeForLayoutSize(120),
    },
    emptySecondaryView: {
        flex: 1
    },
    emptyBottomView: {
        flex: 1
    },
    image: {
        opacity: 0.7,
        width: PixelRatio.get() * 100,
        position: 'absolute',
        top: PixelRatio.get() === 2.75 ? PixelRatio.get() * 60 : PixelRatio.get() * 6,
        left: PixelRatio.get() === 2.75 ? PixelRatio.get() * 10 : PixelRatio.get() * 20,
        resizeMode: 'contain'
    }
})