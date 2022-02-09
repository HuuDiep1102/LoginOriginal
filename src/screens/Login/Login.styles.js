import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEFDE",
  },
  mainContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 35,
    justifyContent: 'center',
    width: '100%',
    height: 56,
  },
  titleText: {
    justifyContent: 'center',
    marginBottom: 10,
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
    color: '#000000',
    textAlign: 'left'
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
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
    width: '100%',
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
    marginTop: 50,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#EC1C24',
    width: 184,
    textAlign: 'center',
    height: 40,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2, 
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    width: 33,
    height: 20,
    fontSize: 14,
  },
  forgetPassword:{
    opacity: 0.2,
    marginTop: 18,
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
    position: 'absolute',
    top: 590,
    width: 414,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 56,
  },
  footerText1: {
    lineHeight: 20,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Noto Sans TC',
    color: '#F48120'
  },
  footerText2: {
    opacity: 0.2,
    lineHeight: 16,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Noto Sans TC',
    color: '#000000'
  },
});
export default styles;