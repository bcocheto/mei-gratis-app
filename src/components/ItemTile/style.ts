import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_ELEVATION_ENUM } from "../../enums/ShadowsElevation";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:'space-between',
    margin: 6,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic
  },
  content: {
    width:200
  },  
  image: {
    borderRadius: 100 * .2,
    margin: 10,
    aspectRatio:1,
    width: 60,
    height: undefined,
    borderColor: COLORS_ENUM.secondary_text,
    overflow: "hidden",
    borderWidth: .6,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '900',
  },
  description: {
    fontSize: 14,
    width: 190,
    
  },
  ballanceTitle: {
    color:COLORS_ENUM.primary_error
  },
  ballanceDescription: {
    color:COLORS_ENUM.secondary_error
  },
  warningTitle: {
    color:COLORS_ENUM.primary_warning
  },
  warningDescription: {
    color:COLORS_ENUM.secondary_warning
  },
  defaultTitle: {
    color:COLORS_ENUM.primary_text
  },
  defaultDescription: {
    color:COLORS_ENUM.secondary_text
  },

})