import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";

export default function Consulta() {
    const navegacao = useNavigation();
    const { params } = useRoute(); // o "useRoute" me da a possibilidade de recuperar parametros enviados."

    const { salaSelecionada } = params; // fazendo desestruturação para pegar apenas o parametro q enviei la na home. Percebe-se que o nome segue o mesmo.

    console.log(salaSelecionada); // no momento estou apenas mostrando no console, mas vc pode mostrar em qualquer lugar do teu codigo.

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../../../assets/images/Background.png')}
                    resizeMode="cover"
                >
                    <View style={styles.section}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/images/LogoFeira.png')}
                        />
                        <Text style={styles.text}>Consulta</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navegacao.navigate('Home')}
                        >
                            <Text style={styles.textButton}>VOLTAR</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sectionList}>
                        <View style={styles.sectionRow}>
                            <Text style={styles.title}>ID</Text>
                            <Text style={styles.title}>QR Code</Text>
                            <Text style={styles.title}>Data e Hora</Text>
                        </View>

                        <FlatList

                        />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

