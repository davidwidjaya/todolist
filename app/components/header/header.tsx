import * as React from "react"
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native"
import { Styles, MainStyle, Images } from "@theme"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faBell } from "@fortawesome/free-solid-svg-icons"

const deviceWidth = Dimensions.get("window").width;

export function Header(props: HeaderProps) {

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
        <>
            {props.type == "default" ?
                <View 
                accessibilityLabel="header-background"
                style={{
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
                    }}>{props.title}</Text>

                </View>
                :
                <View
                accessibilityLabel="header-background"
                
                style={{
                    ...MainStyle.bgcolor_blue_primary,
                    height: 0.1777 * deviceWidth,
                    width: deviceWidth,
                    paddingLeft: 0.0555 * deviceWidth,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={props.back}>
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
                    }}>{props.title}</Text>
                </View>
            }
        </>
    )
}
