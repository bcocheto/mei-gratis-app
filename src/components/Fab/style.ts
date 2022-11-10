import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_ELEVATION_ENUM } from "../../enums/ShadowsElevation";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    // position:'absolute',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 * 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic
  },
  menu: {
    backgroundColor:COLORS_ENUM.primary_dark,
  },
  subMenu: {
    backgroundColor: COLORS_ENUM.primary_dark,

  }
})