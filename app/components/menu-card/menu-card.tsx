import * as React from "react"
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native"
import { Styles, MainStyle, Images } from "@theme"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faBell, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"

const deviceWidth = Dimensions.get("window").width;

export function MenuCard(props: HeaderProps) {

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
        <TouchableOpacity
        accessibilityLabel="activity-item"

            onPress={props.onPress}
            style={{
                width: 0.41666 * deviceWidth,
                height: 0.41666 * deviceWidth,
                borderRadius: 0.0333 * deviceWidth,
                paddingHorizontal: 0.04722 * deviceWidth,
                paddingTop: 0.03611 * deviceWidth,
                paddingBottom: 0.04722 * deviceWidth,
                borderWidth: 1,
                justifyContent: "space-between",
                marginTop: 0.0555 * deviceWidth
            }}>
            <Text numberOfLines={2} style={{
                ...MainStyle.font_14,
                ...MainStyle.color_black_primary,
                ...MainStyle.font_bold,
            }}>{props.title}</Text>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <Text numberOfLines={2} style={{
                    ...MainStyle.font_10,
                    ...MainStyle.color_grey_primary,
                    ...MainStyle.font_medium,
                }}>{props.date}</Text>

                <FontAwesomeIcon
                    size={12}
                    style={{ ...MainStyle.color_grey_primary }}
                    icon={faTrash} />

            </View>
        </TouchableOpacity>
    )
}
