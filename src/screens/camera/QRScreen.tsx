import React,  {useEffect, useState}from "react";
import {CameraView, useCameraPermissions, ScanningResult} from "expo-camera/next";
import { View, Text } from "react-native";
import { Fab } from "../../components/Fab";
import { appTheme } from '../../theme/appTheme';

export const QRScreen = () => {
    const [permissions, requestPermissions] = useCameraPermissions();
    const [data, setData] = useState<ScanningResult>();
    const [getFacing, setFacing] = useState<string>('back');

    useEffect( () =>{
        (async () =>{
            (!permissions?.granted) && (async () => await requestPermissions());
        })
    },[]);

    const toggleCameraFacing = () => {
        setFacing(current => ( current === 'back') ? 'front' : 'back');
    }

    return (
        <View>
            <CameraView
            facing={ getFacing }
            barcodeScannerSettings={{
                barcodeTypes: ["qr"]
            }}
            onBarcodeScanned={( result: ScanningResult) =>{
                setData( result);
            }}
            >
                <View
                style={{ height: "100", width:"100"}}
                >
                    <View
                        style= {{
                            width: 200,
                            height: 200,
                            borderColor: "white",
                            borderWidth: "absolute",
                            alignSelf: "center",
                            borderRadius: 10,
                            top: "35%"
                        }}
                    />
                    <Text
                        style= {{
                            ...appTheme.title,
                            alignSelf: "center",
                            color: "white",
                            top:"65%"
                        }}
                    >
                        Escaner QR
                    </Text>
                    <Fab
                    action={ toggleCameraFacing}
                    title="Flip"
                    position="button_right"
                    />


                </View>
            </CameraView>
        </View>
    );
};