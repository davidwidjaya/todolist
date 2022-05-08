import React, { useState, useEffect } from 'react';
import { ParamListBase, useIsFocused } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { useStores } from "@models/root-store"
import Spinner from 'react-native-loading-spinner-overlay';
import { MainStyle, Styles, Images, Helper } from "@theme"
import '../../../global.js'
import { Dimensions, View, Text, ToastAndroid, ScrollView, AsyncStorage, Alert, Image, TextInput, TouchableOpacity, Button, } from "react-native"
import { values } from 'mobx';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShop, faPlus, faTrash, faArrowLeft, faPencil, faArrowDownShortWide, faChevronUp, faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons"

import CheckBox from "@react-native-community/checkbox";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SelectDropdown from './../../../node_modules/react-native-select-dropdown/index';
import { Header, ButtonDefault, MenuCard, MenuItem } from "@components"
import Modal from "react-native-modal";
const deviceWidth = Dimensions.get("window").width;

export interface ListScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
}

export const ListScreen: React.FunctionComponent<ListScreenProps> = props => {
    const rootStore = useStores();

    var [spinner, setSpinner] = useState(false);
    const isFocused = useIsFocused();
    const [empty, setEmpty] = useState(true);
    const [title, setTitle] = useState("");
    const [param, setParam] = useState(props.route.params);
    const [data, setData] = useState([]);
    const [priority, setPriority] = useState("");


    const [isModalVisible, setModalVisible] = useState(false);
    const listPrior = [
        {
            key: "very-high",
            label: "Very High",
        },
        {
            key: "high",
            label: "High",
        },
        {
            key: "normal",
            label: "Medium",
        },
        {
            key: "low",
            label: "Low",
        },
        {
            key: "very-low",
            label: "Very Low",
        },
    ]
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const prosesData = () => {
        toggleModal();
        createTodo();
        getListItem();
    }
    const toggle = (idx) => {
        // return listPrior[idx].key;
        setPriority(listPrior[idx].key);
        console.log(listPrior[idx].key);
    }

    const createTodo = async () => {
        setSpinner(true);

        let formData = new FormData();
        console.log("id_", param.activity_group_id);
        formData.append("activity_group_id", param.activity_group_id);
        formData.append("title", title);
        formData.append("_comment", "Test");
        formData.append("priority", priority);
        console.log(formData);
        var result = await rootStore.createTodo(formData);
        console.log(result);
        if (result.kind == "ok") {
            setEmpty(false);
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
    const getListItem = async () => {
        setSpinner(true);

        let formData = new FormData();
        formData.append("activity_group_id", param.activity_group_id);
        console.log(param.activity_group_id);
        var result = await rootStore.getListItem(formData);
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
        getListItem();
    }, [isFocused]);

    return (
        <ScrollView style={{ ...Styles.container }}>
            <Header
                back={props.navigation.goBack}
                title={"New Activity"}
            />
            <View style={{
                padding: 20
            }}>
                <View style={{
                    position: "relative",
                }}>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        style={{
                            height: 0.125 * deviceWidth,
                            width: 0.8888 * deviceWidth,
                            borderBottomWidth: 1,
                            borderBottomColor: "#D8D8D8",
                            ...MainStyle.font_16,
                            ...MainStyle.color_black_primary,
                            ...MainStyle.font_semibold,
                            paddingBottom: 10,
                            paddingRight: 35,
                            alignItems: "center",
                        }} />
                    <FontAwesomeIcon
                        size={14}
                        style={{
                            ...MainStyle.color_grey_third,
                            marginBottom: 18,
                            position: "absolute",
                            right: 15,
                            bottom: 0
                        }}
                        icon={faPencil} />

                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'flex-end',
                    alignItems: "center",
                    marginTop: 0.066 * deviceWidth
                }}>
                    <ButtonDefault
                        icon={"default"}
                        onPress={() => toggleModal()}
                        title={"Tambah"}
                    />
                </View>
                <Modal
                    accessibilityLabel="modal-add"

                    isVisible={isModalVisible}>
                    <View style={{
                        width: 0.8611 * deviceWidth,
                        height: 1.061 * deviceWidth,
                        ...MainStyle.bgcolor_white_primary,
                        borderRadius: 12
                    }}>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#A4A4A4",
                            height: 0.16666 * deviceWidth,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 0.0555 * deviceWidth
                        }}>
                            <Text style={{
                                ...MainStyle.font_16,
                                ...MainStyle.color_black_primary,
                                ...MainStyle.font_semibold,
                            }}>Tambah List Item</Text>

                            <TouchableOpacity onPress={toggleModal}>
                                <FontAwesomeIcon
                                    size={14}
                                    style={{
                                        ...MainStyle.color_grey_third,
                                        marginTop: 8
                                    }}
                                    icon={faClose} />

                            </TouchableOpacity>
                        </View>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#A4A4A4",
                            // height: 0.16666 * deviceWidth,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 0.0555 * deviceWidth,
                        }}>
                            <View style={{
                                marginBottom: 20

                            }}>
                                <Text style={{
                                    ...MainStyle.font_10,
                                    ...MainStyle.color_black_primary,
                                    ...MainStyle.font_semibold,
                                    marginBottom: 12
                                }}>NAMA LIST ITEM</Text>
                                <TextInput style={{
                                    width: 0.7722 * deviceWidth,
                                    height: 0.1444 * deviceWidth,
                                    borderWidth: 0.5,
                                    borderRadius: 6, ...MainStyle.bgcolor_white_primary,
                                    ...MainStyle.font_14,
                                    paddingVertical: 12,
                                    textAlign: 'left', ...MainStyle.color_black_primary,
                                    paddingLeft: 15
                                }}>

                                </TextInput>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{
                                    ...MainStyle.font_10,
                                    ...MainStyle.color_black_primary,
                                    ...MainStyle.font_semibold,
                                    marginBottom: 12
                                }}>PRIORITY</Text>

                                <SelectDropdown
                                    statusBarTranslucent={true}
                                    buttonStyle={{
                                        width: 0.7722 * deviceWidth,
                                        height: 0.1444 * deviceWidth,
                                        borderWidth: 0.5,
                                        borderRadius: 6, ...MainStyle.bgcolor_white_primary
                                    }}
                                    buttonTextStyle={{
                                        ...MainStyle.font_14,
                                        paddingVertical: 12,
                                        textAlign: 'left', ...MainStyle.color_black_primary
                                    }}
                                    defaultButtonText={"Ini Dropdown"}
                                    data={listPrior.map(item => { return item.label })}
                                    defaultValue={"defaultValue"}
                                    rowTextStyle={{
                                        ...MainStyle.font_14,
                                    }}
                                    rowStyle={{
                                        height: 44
                                    }}
                                    dropdownStyle={{
                                        // borderRadius: 6,
                                    }}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                        toggle(index)
                                        //   onSelect(name, optionObject[index].value)
                                    }}
                                    renderDropdownIcon={isOpened => {
                                        return <FontAwesomeIcon size={16}
                                            style={{ ...MainStyle.color_grey_primary }}
                                            icon={isOpened ? faChevronUp : faChevronDown} />
                                    }}
                                    dropdownIconPosition={'right'}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            paddingTop: 0.05 * deviceWidth,
                            paddingRight: 0.075 * deviceWidth
                        }}>
                            <ButtonDefault
                                onPress={() => prosesData()}
                                title={"Simpan"}
                            />
                        </View>
                    </View>
                </Modal>


                {
                    empty === true ?
                        <Image
                            style={{
                                width: 0.8861 * deviceWidth,
                                // height: 0.5666 * deviceWidth,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginTop: 0.3888 * deviceWidth
                            }}
                            source={Images.img_todo_empty_state}
                        />
                        :
                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-between' }}>
                            {
                                data !== undefined && data.length > 0 ?
                                    data.map((val, idx) => {
                                        return (
                                            <MenuItem
                                                key={val.id}
                                                title={val.title}
                                            />

                                        )
                                    })
                                    : null

                            }
                        </View>
                }
            </View>
        </ScrollView>
    )
}
