import { StatusBar, StyleSheet } from "react-native";
import { BUTTON_SIZE_ENUM } from "../../enums/ButtonSize";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_ELEVATION_ENUM } from "../../enums/ShadowsElevation";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;


export const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    backgroundColor: COLORS_ENUM.primary_dark,
    paddingTop: STATUS_BAR_HEIGHT,
    flexDirection: 'row',
    elevation: 5,
  },
  content: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop:16,
    paddingBottom:128,
    backgroundColor: COLORS_ENUM.primary
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS_ENUM.primary_light,
  },
  searchButton: {
    height: BUTTON_SIZE_ENUM.aux,
    width: BUTTON_SIZE_ENUM.aux,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: COLORS_ENUM.primary_light,
    borderRadius: 100 * 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation:SHADOWS_ELEVATION_ENUM.basic
  }
})