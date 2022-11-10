import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_ELEVATION_ENUM } from "../../enums/ShadowsElevation";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS_ENUM.menu_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    paddingTop: 14,
    paddingBottom:14,
    marginTop: -40,
    marginStart:34,
    marginEnd: 34,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic
  },
  item: {
    flexDirection: 'column',
    alignItems:'center'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight:'500',
    color:COLORS_ENUM.primary_text,
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
    color:COLORS_ENUM.success
  },
  pendencie: {
    fontSize: 22,
    fontWeight: 'bold',
    color:COLORS_ENUM.primary_error
  }
})