import React, { useState, useEffect } from 'react';
import { ParamListBase, useIsFocused } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { useStores } from "@models/root-store"
import Spinner from 'react-native-loading-spinner-overlay';
import { MainStyle, Styles, Images, Helper } from "@theme"
import '../../../global.js'
import { Dimensions, View, Text, ToastAndroid, ScrollView, AsyncStorage, Alert, Image, TextInput, TouchableOpacity, RefreshControl, } from "react-native"
import { values } from 'mobx';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShop, faPlus, faTrash, faArrowLeft, faPencil, faArrowDownShortWide, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

import CheckBox from "@react-native-community/checkbox";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SelectDropdown from './../../../node_modules/react-native-select-dropdown/index';
import { Header, ButtonDefault, MenuCard } from "@components"

const deviceWidth = Dimensions.get("window").width;

export interface HomeScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
    const rootStore = useStores();

    var [spinner, setSpinner] = useState(false);
    const isFocused = useIsFocused();
    const [empty, setEmpty] = useState(true);
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const onRefresh = async () => {
        getListActivity();
    };

    const formatting = (newDate) => {
        let date = new Date(newDate);
        let dateFormat =
            date.getDate() +
            ' ' +
            date.toLocaleDateString('default', { month: 'long' }) +
            ' ' +
            ('0' + date.getHours()).slice(-2) +
            ':' +
            ('0' + date.getMinutes()).slice(-2);
        return dateFormat;
    }
    const getListActivity = async () => {
        setSpinner(true);

        let formData = new FormData();

        var result = await rootStore.getListActivity(formData);
        if (result.kind == "ok") {
            setEmpty(false);
            setData(result.data.data);
        }
        else if (result.kind == 'wrong') {
            setSpinner(false);
            Alert.alert(
                'Ooops...',
                result.message.toString(),
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        }
        // }

        setSpinner(false);
    }
    useEffect(() => {
        getListActivity();
    }, [isFocused]);

    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        } style={{ ...Styles.container }}>
            <Header
                type={"default"}
                title={"To Do List App"}
            />
            <View style={{
                padding: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}>
                    <Text style={{
                        ...MainStyle.font_16,
                        ...MainStyle.color_black_primary,
                        ...MainStyle.font_bold,
                    }}>Activity</Text>

                    <ButtonDefault
                        icon={"default"}
                        onPress={() => console.log('click')}
                        title={"Tambah"}
                    />

                </View>


                {
                    empty === true ?
                        <Image
                accessibilityLabel="activity-empty-state"

                            style={{
                                width: 0.8861 * deviceWidth,
                                height: 0.5666 * deviceWidth,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginTop: 0.3888 * deviceWidth
                            }}
                            source={Images.img_activity_empty_state}
                        />
                        :
                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-between' }}>
                            {
                                data.map((val, idx) => {
                                    return (
                                        <MenuCard
                                            onPress={() => props.navigation.navigate("list", { activity_group_id: val.id })}
                                            key={val.id}
                                            title={val.title}
                                            date={formatting(val.created_at)}
                                        />

                                    )
                                })

                            }
                        </View>
                }
            </View>
        </ScrollView>
    )
}
