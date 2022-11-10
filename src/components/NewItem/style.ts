import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_ELEVATION_ENUM } from "../../enums/ShadowsElevation";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalContent: {
    top: '30%',
    marginHorizontal: 16,
    backgroundColor: COLORS_ENUM.menu_color,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic,
  },
  modalHeader: {
    backgroundColor: COLORS_ENUM.primary,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 6
  },
  form: {
    marginTop:6,
    padding: 6,
    paddingHorizontal: 18,
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  image: {
    borderRadius: 100 * .2,
    margin: 10,
    aspectRatio: 1,
    width: 100,
    height: undefined,
    borderColor: COLORS_ENUM.primary_text,
    overflow: "hidden",
    borderWidth: 1,
  },
  imagePicker: {
    position: 'absolute',
    left: 180,
    top: 46,
    color:COLORS_ENUM.primary_text
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 6,
    padding: 10,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic,
  },
  title: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    color: COLORS_ENUM.primary_light,
  },
  text: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  secondary_title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -.5,
    color: COLORS_ENUM.primary_text,
  },
  input: {
    borderBottomWidth: .5,
    borderColor: COLORS_ENUM.secondary_text,
    marginBottom: 5,
    color: COLORS_ENUM.secondary_text
  },
})