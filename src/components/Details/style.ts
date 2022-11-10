import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";
import { SHADOWS_RADIUS_ENUM } from "../../enums/ShadowRadius";
import { SHADOWS_OFFSET_ENUM } from "../../enums/ShadowsOffset";
import { SHADOWS_OPACITY_ENUM } from "../../enums/ShadowsOpacity";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContentWrapper: {
    flex: 1,
    top: '45%',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 50,
    elevation:30
  },
  modalHeader: {
    flexDirection:'column',
    backgroundColor: COLORS_ENUM.primary,
    padding: 16,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  modalHeaderContent: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  modalContent: {
    flex: 1,
    padding:16,
  },
  modalConfig: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    margin: 6,
    color: COLORS_ENUM.primary_light,
    shadowColor:"#000",
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height:SHADOWS_OFFSET_ENUM.basic_height
    },
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    elevation:6,
  },
  image:{
    borderRadius: 100 * .2,
    margin: 10,
    aspectRatio: 1,
    width: 100,
    height: undefined,
    borderColor: COLORS_ENUM.primary_light,
    overflow: "hidden",
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing:-.5,
    fontWeight: 'bold',
    color: COLORS_ENUM.primary_light,
  },
  secondary_title: {
    fontSize: 14,
    fontWeight:'500',
    lineHeight: 18,
    letterSpacing:-.5,
    color: COLORS_ENUM.primary_text,
  },
  subTitle: {
    fontSize: 14,
    fontWeight:'400',
    lineHeight: 16,
    letterSpacing:-.2,
    color: COLORS_ENUM.secondary_text,
    marginBottom:5
  }
})