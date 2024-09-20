import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

export default function Home() {

    const navegacao = useNavigation()
    const { height } = Dimensions.get('window');

    const fontSizeVH = height * 0.68; // 5vh

    const [selected, setSelected] = React.useState("3 Andar");
    const [salas, setSalas] = React.useState("");

    const data = [
        { key: '3 Andar', value: '3 Andar', },
        { key: '2 Andar', value: '2 Andar' },
        { key: '1 Andar', value: '1 Andar' },
        { key: 'Pátio', value: 'Pátio', },
    ]
    const Salas = {
        'Pátio': [
            { key: '1', value: 'Sala 4', },
            { key: '2', value: 'Sala 5', },
            { key: '3', value: 'Sala 6', },
        ],
        '1 Andar': [
            { key: '4', value: 'Sala 15', },
            { key: '5', value: 'Sala 16', },
            { key: '6', value: 'Sala 17', },
            { key: '7', value: 'Sala 18', },
            { key: '8', value: 'Sala 19', },
            { key: '9', value: 'Sala 20', },
        ],
        '2 Andar': [
            { key: '10', value: 'Sala 24', },
            { key: '11', value: 'Sala 25', },
            { key: '12', value: 'Sala 26', },
            { key: '13', value: 'Sala 27', },
        ],
        '3 Andar': [
            { key: '14', value: 'Sala 30', },
            { key: '15', value: 'Sala 33', },
        ],
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ display: 'flex' }}>
                <View style={styles.background}>

                    <View style={styles.header}>
                        <Text style={styles.titulo}>Validação de Entrada</Text>
                        <Image style={styles.image}
                            source={require('../../../assets/images/ilustracaoQr.png')}
                        >
                        </Image>
                    </View>
                    <ImageBackground
                        source={require('../../../assets/images/BackgroundInv.png')}
                        resizeMode="cover"

                        style={{
                            height: fontSizeVH
                        }}
                    >
                        <View style={styles.section}>

                            <TouchableOpacity
                                style={styles.consulta}
                                onPress={() => navegacao.navigate('Consulta', {
                                    sala: salas,
                                    andar: selected
                                })} // estou enviando a sala como se fosse um parametro de "rota", e la na tela "consulta" irei recupera-lo.
                            >

                                <Text style={styles.textConsulta}>CONSULTA</Text>
                            </TouchableOpacity>


                            <View style={styles.input}>

                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    inputStyles={{ color: '#000', fontWeight: '300' }}
                                    dropdownStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    dropdownItemStyles={{ borderStyle: 'solid', borderColor: '#000', borderWidth: 0.5 }}
                                    dropdownTextStyles={{ color: '#000', fontWeight: '300' }}

                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    save="value"
                                    defaultOption={'Pátio'}
                                />
                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    inputStyles={{ color: '#000', fontWeight: '300' }}
                                    dropdownStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    dropdownItemStyles={{ borderStyle: 'solid', borderColor: '#000', borderWidth: 0.5 }}
                                    dropdownTextStyles={{ color: '#000', fontWeight: '300' }}

                                    setSelected={(val) => setSalas(val)}
                                    data={Salas[selected]}
                                    save="value"
                                    defaultOption={Salas[selected][0]}
                                />

                            </View>
                            <TouchableOpacity
                                style={styles.escanear}
                                onPress={() => navegacao.navigate('Leitor', {
                                    salaSelecionada: salas,
                                    andarSelecionado: selected
                                })}
                            >

                                <Text style={styles.textEscanear}>ESCANEAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View >
            </ScrollView>
        </SafeAreaView>
    )
}