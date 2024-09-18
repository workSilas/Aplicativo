import { CameraView, Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

export default function Leitor() {

  const navegacao = useNavigation()
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { params } = useRoute();

  const { salaSelecionada } = params; // fazendo desestruturação para pegar apenas o parametro q enviei la na home. Percebe-se que o nome segue o mesmo.
  console.log(salaSelecionada);
  

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    navegacao.navigate('Consulta', {
      qrCode: data,
      sala: salaSelecionada
    })
    alert(`QR-CODE scanneado com sucesso!`);
  }

  if (hasPermission === null) {
    return <Text>Precisamos da permissão do uso da câmera para funcionar. </Text>;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Aperte para scannear novamente!"} onPress={() => setScanned(false)} />
      )}
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/scanningWhite.png')}
        />
      </View>

      <ImageBackground
        style={styles.section}
        source={require('../../../assets/images/BackgroundInv.png')}
        resizeMode="cover"

      >
        <Text style={styles.textButton}>Escaneie o QR-Code</Text>
        <TouchableOpacity
          style={styles.button}
          resizeMode="cover"
          onPress={() => navegacao.navigate('Home')}
        >
          <Text style={styles.textButton}>VOLTAR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>

  );
}