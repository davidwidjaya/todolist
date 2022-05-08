import React, { useState, useEffect } from 'react';
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { useStores } from "@models/root-store"
import Spinner from 'react-native-loading-spinner-overlay';
import { MainStyle, Styles, Images, Helper } from "@theme"
import '../../../global.js'
// import { Textbox, Button_big, Bottom_nav, Searchbox, Menuitem, Menucart } from "@components"
import { Dimensions, View, Text, ToastAndroid, ScrollView, AsyncStorage, Alert, Image, TextInput, TouchableOpacity, } from "react-native"
import { values } from 'mobx';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShop, faPlus, faTrash, faArrowLeft, faPencil, faArrowDownShortWide, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

import CheckBox from "@react-native-community/checkbox";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SelectDropdown from './../../../node_modules/react-native-select-dropdown/index';

const deviceWidth = Dimensions.get("window").width;

export interface BootstrapScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
}

export const BootstrapScreen: React.FunctionComponent<BootstrapScreenProps> = props => {
    const rootStore = useStores();

    var [spinner, setSpinner] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const countries = [
        {
            key: 1,
            label: "NN",
        },
        {
            key: 2,
            label: "NN2",
        },
    ]
    useEffect(() => {

    }, []);

    return (
        <ScrollView style={{ ...Styles.container }}>
            <Text style={{
                ...MainStyle.font_16,
                ...MainStyle.color_black_primary,
                ...MainStyle.font_bold,
            }}>Activity</Text>
            <Text style={{
                ...MainStyle.font_16,
                ...MainStyle.color_black_primary,
                ...MainStyle.font_semibold,
            }}>Buat activity pertamamu</Text>
            <Image
                style={{
                    width: 0.8861 * deviceWidth,
                    height: 0.5666 * deviceWidth,
                    alignSelf: "center",
                }}
                source={Images.img_activity_empty_state}
            />
            <TouchableOpacity style={{
                ...MainStyle.bgcolor_blue_primary,
                width: 0.2777 * deviceWidth,
                height: 0.10277 * deviceWidth,
                borderRadius: 0.125 * deviceWidth,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <FontAwesomeIcon
                    size={12}
                    style={{ color: 'white' }}
                    icon={faPlus} />
                <Text
                    style={{
                        marginLeft: 0.0166 * deviceWidth,
                        marginTop: 0.006 * deviceWidth,
                        ...MainStyle.font_12,
                        ...MainStyle.color_white_primary,
                        ...MainStyle.font_semibold,
                    }}
                >Tambah</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 0.41666 * deviceWidth,
                height: 0.41666 * deviceWidth,
                borderRadius: 0.0333 * deviceWidth,
                paddingHorizontal: 0.04722 * deviceWidth,
                paddingTop: 0.03611 * deviceWidth,
                paddingBottom: 0.04722 * deviceWidth,
                borderWidth: 1,
                justifyContent: "space-between"
            }}>
                <Text numberOfLines={2} style={{
                    ...MainStyle.font_14,
                    ...MainStyle.color_black_primary,
                    ...MainStyle.font_bold,
                }}>Daftar Belanja Bulanan</Text>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Text numberOfLines={2} style={{
                        ...MainStyle.font_10,
                        ...MainStyle.color_grey_primary,
                        ...MainStyle.font_medium,
                    }}>5 Oktober 2021</Text>

                    <FontAwesomeIcon
                        size={12}
                        style={{ ...MainStyle.color_grey_primary }}
                        icon={faTrash} />

                </View>
            </TouchableOpacity>

            <View style={{
                ...MainStyle.bgcolor_blue_primary,
                height: 0.1777 * deviceWidth,
                width: deviceWidth,
                justifyContent: "center",
                paddingLeft: 0.0555 * deviceWidth
            }}>
                <Text numberOfLines={1} style={{
                    ...MainStyle.font_18,
                    ...MainStyle.color_white_primary,
                    ...MainStyle.font_bold,
                }}>To Do List App</Text>

            </View>


            <View style={{
                ...MainStyle.bgcolor_blue_primary,
                height: 0.1777 * deviceWidth,
                width: deviceWidth,
                paddingLeft: 0.0555 * deviceWidth,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <TouchableOpacity>
                    <FontAwesomeIcon
                        size={18}
                        style={{ ...MainStyle.color_white_primary, marginRight: 0.0611 * deviceWidth }}
                        icon={faArrowLeft} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={{
                    ...MainStyle.font_18,
                    ...MainStyle.color_white_primary,
                    ...MainStyle.font_bold,
                    marginTop: 0.0101 * deviceWidth
                }}>To Do List App</Text>
            </View>


            <View style={{
                position: "relative",
            }}>
                <TextInput style={{
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
                        marginRight: 51,
                        position: "absolute",
                        right: 0,
                        bottom: 0
                    }}
                    icon={faPencil} />

            </View>

            <View style={{
                width: 0.1055 * deviceWidth,
                height: 0.1055 * deviceWidth,
                borderWidth: 1,
                borderColor: "#E5E5E5",
                borderRadius: 45
            }}>
                <FontAwesomeIcon
                    size={14}
                    style={{
                        ...MainStyle.color_grey_third,
                    }}
                    icon={faArrowDownShortWide} />
            </View>

            <View style={{
                width: 0.886 * deviceWidth,
                height: 0.1555 * deviceWidth,
                borderRadius: 0.3333 * deviceWidth,
                borderWidth: 0.1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 0.0527 * deviceWidth,
                paddingVertical: 0.0472 * deviceWidth,
            }}>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>

                    <CheckBox
                        tintColors={{ true: 'black', false: '#A4A4A4' }}
                        onCheckColor={Colors.GRAY}
                        boxType="square"
                        style={{
                            borderRadius: 4,
                        }}
                        disabled={false}
                        value={false}
                        onValueChange={(newValue) => console.log('d')}
                    />

                    <Text numberOfLines={1} style={{
                        ...MainStyle.font_14,
                        ...MainStyle.color_black_primary,
                        ...MainStyle.font_medium,
                        marginLeft: 0.09166 * deviceWidth
                    }}>Minyak goreng</Text>

                </View>

                <FontAwesomeIcon
                    size={14}
                    style={{ ...MainStyle.color_grey_primary }}
                    icon={faTrash} />

            </View>



            <View style={{ marginBottom: 16 }}>
                <Text style={{}}>{"Dropdown"}</Text>
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
                    data={countries.map(item => { return item.label })}
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
        </ScrollView>
    )
}
