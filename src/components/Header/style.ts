import { StatusBar, StyleSheet } from "react-native";
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
    padding: 16,
    backgroundColor: COLORS_ENUM.primary
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS_ENUM.primary_light,
  },
  searchButton: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(72,179,192,0.9)',
    borderRadius: 45 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.medium_width,
      height: SHADOWS_OFFSET_ENUM.medium_height
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.medium,
    shadowOpacity: SHADOWS_OPACITY_ENUM.medium,
    elevation:SHADOWS_ELEVATION_ENUM.medium
  }
})