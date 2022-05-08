import React, { useState, useEffect } from 'react';
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { useStores } from "@models/root-store"
import Spinner from 'react-native-loading-spinner-overlay';
import { MainStyle, Styles, Images, Helper } from "@theme"
import '../../../global.js'
import { Textbox, Button_big } from "@components"
import { Dimensions, View, Text, ToastAndroid, ScrollView, AsyncStorage, Alert, Image, TextInput, TouchableOpacity } from "react-native"
import { values } from 'mobx';

const deviceWidth = Dimensions.get("window").width;

export interface LoginScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
}

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = props => {
    const rootStore = useStores();

    var [spinner, setSpinner] = useState(false);
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var [username, setUsername] = useState("");

    //   const routePage = async () => {
    //     setSpinner(true);

    //     if(email == ""){
    //       ToastAndroid.show("Email can't be empty.", ToastAndroid.LONG);
    //     }
    //     else if(password == ""){
    //       ToastAndroid.show("Password can't be empty.", ToastAndroid.LONG);
    //     }
    //     else if(email == "admin" && password == "admin"){
    //       props.navigation.replace("admin");
    //     }
    //     else{
    //       let formData = new FormData();

    //       formData.append("email", email);
    //       formData.append("password", password);

    //       var result = await rootStore.login(formData);

    //       if (result.kind == "ok") {
    //         var token = result.data.token;
    //         global.bearer_token = token;

    //         console.log("Token : "+global.bearer_token);

    //         await AsyncStorage.setItem('bearer_token', token);

    //         props.navigation.replace("home");
    //       }
    //       else if (result.kind == 'wrong') {
    //         setSpinner(false);
    //         Alert.alert(
    //           'Ooops...',
    //           result.message.toString(),
    //           [
    //             { text: 'OK', onPress: () => console.log('OK Pressed') }
    //           ],
    //           { cancelable: false }
    //         );
    //       }
    //     }

    //     setSpinner(false);
    //   }

    useEffect(() => {

    }, []);

    return (
        <View style={{ ...Styles.container, alignItems: 'center' }}>
            <Image
                style={{
                    flexDirection: 'column-reverse',
                    width: deviceWidth,
                    height: 0.82 * deviceWidth,
                }}
                source={Images.login_image}
            />

            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: 0.02 * deviceWidth }} />

                <Textbox
                    title={"Username"}
                    value={username}
                    editable={true}
                    placeholder={"Username"}
                    keyboardType={"default"}
                    change={values => setUsername(values)}
                />

                <Textbox
                    title={"Password"}
                    value={password}
                    editable={true}
                    placeholder={"Password"}
                    keyboardType={"default"}
                    hidden={true}
                    change={values => setPassword(values)}
                />

                <View style={{ height: 0.02 * deviceWidth }} />
                <Button_big
                    onPress={() => props.navigation.replace("home")}
                    text={'Sign In'}
                />

                <View style={{ height: 0.02 * deviceWidth }} />
                <TouchableOpacity style={{
                    marginLeft: 0.055 * deviceWidth,
                    marginRight: 0.055 * deviceWidth,
                }}>
                    <Text
                        style={{
                            ...Styles.label_general
                        }}>Lupa password?</Text>

                </TouchableOpacity>
                <Button_big
                    onPress={() => props.navigation.replace("bootstrap")}
                    text={'Bootstrap'}
                />

            </View>
        </View>
    )
}
