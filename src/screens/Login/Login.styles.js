import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEFDE",
    alignItems: "center",
    justifyContent: "center"
  },
  // background: {
  //   resizeMode: "cover",
  //   justifyContent: "center"
  // },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 56,
    backgroundColor: 'blue',
    // paddingTop: 84,
    // paddingBottom: 756,
    //top: 3,
    //left: 16,
  },
  titleText: {
    justifyContent: 'flex-end',
    top: 3,
    left: 16,
    lineHeight: 52,
    fontWeight: '400',
    fontSize: 46,
    fontFamily: 'FZHeiB-B01',
    color: '#F48120'
  },
  errorText: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Noto Sans TC',
    color: '#000000'
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 334,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 24,
    marginTop: 36,
  },
  ImageStyle: {
    padding: 1,
    height: 24,
    width: 24,
    alignItems: 'flex-start'
  },
  inputContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: "skyblue",
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: 48,
    width: 334,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 24,
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    //marginTop: 30,
    width: '100%',
    backgroundColor: "steelblue",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#EC1C24',
    width: 184,
    textAlign: 'center',
    height: 45,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
    fontWeight: '700',
    width: 33,
    height: 20,
    fontSize: 14,
  },
  forgetPassword:{
    lineHeight: 20,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Noto Sans TC',
    color: '#000000'
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  footerContainer: {
    flex: 1,
    width: 414,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: 'lightblue',
  },
  footerText1: {
    lineHeight: 20,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Noto Sans TC',
    color: '#F48120'
  },
  footerText2: {
    lineHeight: 16,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Noto Sans TC',
    color: '#000000'
  },
});
export default styles;