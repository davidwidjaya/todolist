import * as React from "react"
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native"
import { Styles, MainStyle, Images } from "@theme"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faBell, faPlus } from "@fortawesome/free-solid-svg-icons"

const deviceWidth = Dimensions.get("window").width;

export function ButtonDefault(props: HeaderProps) {

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
            accessibilityLabel="activity-add-button"

            onPress={props.onPress}
            style={{
                ...MainStyle.bgcolor_blue_primary,
                width: 0.2777 * deviceWidth,
                height: 0.10277 * deviceWidth,
                borderRadius: 0.125 * deviceWidth,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
            {
                props.icon == "default" ?
                    <FontAwesomeIcon
                        size={12}
                        style={{ color: 'white' }}
                        icon={faPlus} />

                    : null
            }
            <Text
                style={{
                    marginLeft: 0.0166 * deviceWidth,
                    marginTop: 0.006 * deviceWidth,
                    ...MainStyle.font_12,
                    ...MainStyle.color_white_primary,
                    ...MainStyle.font_semibold,
                }}
            >{props.title}</Text>
        </TouchableOpacity>
    )
}
