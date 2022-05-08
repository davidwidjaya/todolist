import React, { useState, useEffect } from 'react';
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { useStores } from "@models/root-store"
import Spinner from 'react-native-loading-spinner-overlay';
import { MainStyle, Styles, Images, Helper } from "@theme"
import '../../../global.js'
// import { Textbox, Button_big, Bottom_nav, Searchbox, Menuitem, Menucart } from "@components"
import { Dimensions, View, Text, ToastAndroid, ScrollView, AsyncStorage, Alert, Image, TextInput, TouchableOpacity } from "react-native"
import { values } from 'mobx';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShop } from "@fortawesome/free-solid-svg-icons"


const deviceWidth = Dimensions.get("window").width;

export interface BootstrapScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
}

export const BootstrapScreen: React.FunctionComponent<BootstrapScreenProps> = props => {
    const rootStore = useStores();

    var [spinner, setSpinner] = useState(false);
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var [username, setUsername] = useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    useEffect(() => {

    }, []);

    return (
        <View style={{ ...Styles.container, alignItems: 'center' }}>

        </View>
    )
}
