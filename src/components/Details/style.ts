import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../enums/ColorsEnum";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContentWrapper: {
    flex: 1,
    top: '55%',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 50,
    elevation:30
  },
  modalHeader: {
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
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
})