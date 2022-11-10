import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_ELEVATION_ENUM } from "../../enums/ShadowsElevation";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS_ENUM.background
  },
  menu: {
    paddingHorizontal: 16,
    paddingVertical:16,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textDivider: {
    fontSize: 18,
    color:COLORS_ENUM.secondary_text,
    letterSpacing:0.01,
    fontWeight: 'bold',
  },
  list: {
    flex:1,
    marginTop: 10,
    marginStart: 10,
    marginEnd:10,
    padding: 10,
    backgroundColor: COLORS_ENUM.menu_color,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic
  }
})