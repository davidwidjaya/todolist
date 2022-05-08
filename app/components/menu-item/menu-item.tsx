import * as React from "react"
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native"
import { Styles, MainStyle, Images } from "@theme"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faBell, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import CheckBox from "@react-native-community/checkbox";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const deviceWidth = Dimensions.get("window").width;

export function Menuitem(props: HeaderProps) {

    const {
        preset = "primary",
        tx,
        text,
        style: styleOverride,
        textStyle: textStyleOverride,
        children,
        ...rest
    } = props

    const content = children || <Text tx={tx} text={text} />

    return (
        <View 
        accessibilityLabel="todo-item"
        
        style={{
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
                }}>{props.title}</Text>

            </View>

            <FontAwesomeIcon
                size={14}
                style={{ ...MainStyle.color_grey_primary }}
                icon={faTrash} />

        </View>

    )
}
