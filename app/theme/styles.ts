import { Dimensions } from "react-native"
import { color } from './color';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const MainStyle = {
    font_numans: {
        fontFamily: "Poppins-Regular"
    },
    font_1: {
        fontFamily: "Poppins-Regular",
        fontSize: 1
    },
    font_2: {
        fontFamily: "Poppins-Regular",
        fontSize: 2
    },
    font_3: {
        fontFamily: "Poppins-Regular",
        fontSize: 3
    },
    font_4: {
        fontFamily: "Poppins-Regular",
        fontSize: 4
    },
    font_5: {
        fontFamily: "Poppins-Regular",
        fontSize: 5
    },
    font_6: {
        fontFamily: "Poppins-Regular",
        fontSize: 6
    },
    font_7: {
        fontFamily: "Poppins-Regular",
        fontSize: 7
    },
    font_8: {
        fontFamily: "Poppins-Regular",
        fontSize: 8
    },
    font_9: {
        fontFamily: "Poppins-Regular",
        fontSize: 9
    },
    font_10: {
        fontFamily: "Poppins-Regular",
        fontSize: 10
    },
    font_11: {
        fontFamily: "Poppins-Regular",
        fontSize: 11
    },
    font_12: {
        fontFamily: "Poppins-Regular",
        fontSize: 12
    },
    font_13: {
        fontFamily: "Poppins-Regular",
        fontSize: 13
    },
    font_14: {
        fontFamily: "Poppins-Regular",
        fontSize: 14
    },
    font_15: {
        fontFamily: "Poppins-Regular",
        fontSize: 15
    },
    font_16: {
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    font_17: {
        fontFamily: "Poppins-Regular",
        fontSize: 17
    },
    font_18: {
        fontFamily: "Poppins-Regular",
        fontSize: 18
    },
    font_19: {
        fontFamily: "Poppins-Regular",
        fontSize: 19
    },
    font_20: {
        fontFamily: "Poppins-Regular",
        fontSize: 20
    },
    font_21: {
        fontFamily: "Poppins-Regular",
        fontSize: 21
    },
    font_22: {
        fontFamily: "Poppins-Regular",
        fontSize: 22
    },
    font_23: {
        fontFamily: "Poppins-Regular",
        fontSize: 23
    },
    font_24: {
        fontFamily: "Poppins-Regular",
        fontSize: 24
    },
    font_25: {
        fontFamily: "Poppins-Regular",
        fontSize: 25
    },
    font_26: {
        fontFamily: "Poppins-Regular",
        fontSize: 26
    },
    font_27: {
        fontFamily: "Poppins-Regular",
        fontSize: 27
    },
    font_28: {
        fontFamily: "Poppins-Regular",
        fontSize: 28
    },
    font_29: {
        fontFamily: "Poppins-Regular",
        fontSize: 29
    },
    font_30: {
        fontFamily: "Poppins-Regular",
        fontSize: 30
    },
    font_31: {
        fontFamily: "Poppins-Regular",
        fontSize: 31
    },
    font_32: {
        fontFamily: "Poppins-Regular",
        fontSize: 32
    },
    font_33: {
        fontFamily: "Poppins-Regular",
        fontSize: 33
    },
    font_34: {
        fontFamily: "Poppins-Regular",
        fontSize: 34
    },
    font_35: {
        fontFamily: "Poppins-Regular",
        fontSize: 35
    },
    font_36: {
        fontFamily: "Poppins-Regular",
        fontSize: 36
    },
    font_37: {
        fontFamily: "Poppins-Regular",
        fontSize: 37
    },
    font_38: {
        fontFamily: "Poppins-Regular",
        fontSize: 38
    },
    font_39: {
        fontFamily: "Poppins-Regular",
        fontSize: 39
    },
    font_40: {
        fontFamily: "Poppins-Regular",
        fontSize: 40
    },
    font_medium: {
        fontFamily: "Poppins-Medium",
    },
    font_bold: {
        fontFamily: "Poppins-Bold",
    },
    font_semibold: {
        fontFamily: "Poppins-SemiBold",
    },
    font_italic: {
        fontStyle: "italic"
    },
    font_underline: {
        textDecorationLine: "underline"
    },

    //new backgroundcolor
    bgcolor_black_primary:{
        backgroundColor: "#111111"
    },
    bgcolor_blue_primary:{
        backgroundColor: "#16ABF8"
    },
    bgcolor_white_primary:{
        backgroundColor: "#FFFFFF"
    },
    //new color
    color_black_primary:{
        color: "#111111"
    },
    color_blue_primary:{
        color: "#16ABF8"
    },
    color_white_primary:{
        color: "#FFFFFF"
    },
    color_grey_primary:{
        color: "#888888"
    },
    color_grey_secondary:{
        color: "#D8D8D8"
    },
    color_grey_third:{
        color: "#A4A4A4"
    },
    color_grey_forth:{
        color: "#E5E5E5"
    },


    //old
    bg_color_grey_light:{
        backgroundColor: "#E8E8E8"
    },
    bg_color_grey_dark:{
        backgroundColor: "#BDBDBD"
    },
    bgcolor_green:{
        backgroundColor: "#5DB075"
    },
    bgcolor_white:{
        backgroundColor: "white"
    },
    color_grey_light:{
        color: "#E8E8E8"
    },
    color_grey_dark:{
        color: "#BDBDBD"
    },
    color_green:{
        color: "#5DB075"
    },
    color_white:{
        color: "white"
    },
    color_black:{
        color: "#121212"
    }
}

export const Styles = {
    //Screen
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    fullscreen: {
        width: deviceWidth,
        height: deviceHeight,
    },
    margin_lr: {
        marginLeft: 0.055*deviceWidth,
        marginRight: 0.055*deviceWidth,
    },
    size_10: {
        width: 0.027*deviceWidth,
        height: 0.027*deviceWidth,
    },
    size_7: {
        width: 0.01944*deviceWidth,
        height: 0.01944*deviceWidth,
    },
    size_12: {
        width: 0.0333*deviceWidth,
        height: 0.0333*deviceWidth,
    },
    size_16: {
        width: 0.044*deviceWidth,
        height: 0.044*deviceWidth,
    },
    size_20: {
        width: 0.055*deviceWidth,
        height: 0.055*deviceWidth,
    },
    size_25: {
        width: 0.0694*deviceWidth,
        height: 0.0694*deviceWidth,
    },
    size_30: {
        width: 0.083*deviceWidth,
        height: 0.083*deviceWidth,
    },
    size_40: {
        width: 0.11*deviceWidth,
        height: 0.11*deviceWidth,
    },
    size_120: {
        width: 0.33*deviceWidth,
        height: 0.33*deviceWidth,
    },
    size_120_60: {
        width: 0.33*deviceWidth,
        height: 0.166*deviceWidth,
    },
    size_vendor: {
        width: deviceWidth,
        height: 0.405*deviceWidth,
    },

    //textbox
    textbox:{
        height: 0.1*deviceWidth,
        width:0.91*deviceWidth,
        marginVertical: 0.01*deviceWidth,
        padding: 0.03*deviceWidth,
        borderWidth: 1,
        borderColor:MainStyle.color_grey_dark.color,
        borderRadius:8,
        backgroundColor:MainStyle.color_grey_light.color,
        ...MainStyle.font_14
    },

    //dropdown
    dropdown:{
        height: 0.11*deviceWidth,
        width:0.91*deviceWidth,
        marginVertical: 0.01*deviceWidth,
        padding: 0.03*deviceWidth,
        borderWidth: 1,
        borderColor:MainStyle.color_grey_dark.color,
        borderRadius:8,
        backgroundColor:MainStyle.color_grey_light.color,
        ...MainStyle.font_14
    },
    dropdown_container:{
        width:0.91*deviceWidth,
        marginVertical: 0.01*deviceWidth,
        padding: 0.03*deviceWidth,
        borderWidth: 1,
        borderColor:MainStyle.color_grey_dark.color,
        borderRadius:8,
        backgroundColor:MainStyle.color_grey_light.color,
        ...MainStyle.font_14
    },

    //buttonbig
    button_big_view:{
        width:0.91*deviceWidth,
        height:0.1*deviceWidth,
        marginLeft: 0.055*deviceWidth,
        marginRight: 0.055*deviceWidth,
        justifyContent:'center',
        borderRadius:8,
    },
    button_text:{
        ...MainStyle.font_16,
        fontFamily: 'Cabin-Bold'
    },
    label_general:{
        ...MainStyle.font_16,
    },


    //bottomnav
    navmenu_view: {
        ...MainStyle.bgcolor_white,
        width: deviceWidth,
        height: 0.155*deviceWidth,
        paddingLeft: 0.066*deviceWidth,
        paddingRight: 0.066*deviceWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    navmenu_button: {
        alignItems: "center",
        flexDirection: "column",
    },
    navmenu_text_active: {
        ...MainStyle.font_12,
        ...MainStyle.color_black,
        marginTop: 0.013*deviceWidth,
    },
    navmenu_text_inactive: {
        ...MainStyle.font_12,
        ...MainStyle.color_grey_dark,
        marginTop: 0.013*deviceWidth,
        opacity: 0.4,
    },

    //searchbox
    searchbox:{
        height: 0.1*deviceWidth,
        width:0.91*deviceWidth,
        marginVertical: 0.01*deviceWidth,
        padding: 0.03*deviceWidth,
        borderWidth: 1,
        borderColor:MainStyle.color_grey_dark.color,
        borderRadius:8,
        backgroundColor:MainStyle.color_grey_light.color,
        ...MainStyle.font_14,
        position:'relative'

    },

    searchbox_icon:{
        ...MainStyle.bgcolor_green,
        position: 'absolute',
        height: 0.1 * deviceWidth,
        width: 0.11 * deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 8,
        borderTopEndRadius: 8,
        right: 0,
        marginVertical: 0.01 * deviceWidth,
    }
}