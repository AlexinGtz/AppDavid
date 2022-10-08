import React from 'react'
import { StyleSheet, Text, View, Linking, PixelRatio, Image, Dimensions } from 'react-native'
import { useFonts } from 'expo-font';
import Button from '../components/Button/Button';
import LogoDavid from '../../assets/TraumaDep.png';
import LogoIvan from '../../assets/TCCompleto.png';
import { buildDavid } from '../constants';

const deviceWidth = Dimensions.get('window').width;

const HomeScreen = () => {

    const [loaded] = useFonts({
        RobotoReg: require('../../assets/fonts/Roboto-Light.ttf'),
        RobotoBold: require('../../assets/fonts/Roboto-Bold.ttf'),
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
        <Text style={styles.specialityText}>Alta especialidad en artroscopía y lesiones deportivas</Text>
    :  <Text style={styles.specialityText}>Alta especialidad en ortopedía pediátria</Text>;


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
            <View style={styles.imageView}>
                <Image source={buildDavid ? LogoDavid : LogoIvan} style={styles.image} />
            </View>
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
        display: 'flex',
        width: '100%'
    },
    emptyTopMainView: {
        height: '10%'
    },
    mainNameView: {
        backgroundColor: buildDavid ? '#1E6DB6' : '#234f77',
        borderRadius: 10,
        width: deviceWidth < 500 ? '90%' : '70%',
        height: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center'
    },
    mainName: {
        fontFamily: 'RobotoBold',
        fontSize: deviceWidth < 500 ? PixelRatio.get() * 9 : PixelRatio.get() * 20,
        paddingHorizontal: 20,
        color: 'white',
        textAlign: 'center'
    },
    specialityView: {
        borderColor: 'black',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        marginTop: PixelRatio.get() * 5,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: .4,
        shadowRadius: 5,
        width: deviceWidth < 500 ? '80%' : '60%',
        backgroundColor: 'white',
        height: '15%',
        alignContent: 'center' 
    },
    specialityText: {
        color: '#1E6DB6',
        fontWeight: '300',
        fontSize: deviceWidth < 500 ? PixelRatio.get() * 7 : PixelRatio.get() * 12,
        height: '60%',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    emptyMiddleMainView: {
        height: '25%'
    },
    buttonLabel: {
        fontFamily: 'RobotoReg',
        fontSize:  deviceWidth < 500 ? PixelRatio.get() * 10 : PixelRatio.get() * 20,
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 5,
        width: '100%',
        textAlign: 'center'
    },
    emptySecondaryView: {
        height: '5%'
    },
    emptyBottomView: {
        height: '5%'
    },
    imageView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        opacity: 0.7,
        width: deviceWidth < 500 ? PixelRatio.get() * 100 : PixelRatio.get() * 170,
        resizeMode: 'contain'
    }
})