import React, { useCallback } from "react";
import { Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import styles from './Login.styles'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginSuccess } from "../../redux";
import i18n from "../../i18n/ultis/i18n";


const schema = yup.object().shape({
  email: yup
    .string()
    .required("ID number 10 or member 7")
    .email('Invalid email format'),
  password: yup
    .string()
    .required("Cannot be left blank")
    .min(6, "Please enter a 4-8 code password")
});


const Login = ({ loginSuccess }) => {

  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onLogin = useCallback(
    (data) => {
      loginSuccess(data.email, data.password);
    },
    [],
  )

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{i18n.t("title")}</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.sectionStyle}>
            <Image source={require('../../assets/User.png')} style={styles.ImageStyle} />
            <Controller
              control={control}
              render={({ field: { onBlur, value, onChange } }) => (
                <TextInput
                  placeholder={i18n.t("loginEmail")}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  style={styles.input}
                />
              )}
              name="email"
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          <View style={styles.sectionStyle}>
            <Image source={require('../../assets/Password.png')} style={styles.ImageStyle} />
            <Controller
              control={control}
              render={({ field: { onBlur, value, onChange } }) => (
                <TextInput
                  placeholder={i18n.t("loginPassword")}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  style={styles.input}
                  secureTextEntry
                />
              )}
              name="password"
            />

          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit(onLogin)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{i18n.t("login")}</Text>
          </TouchableOpacity>
          <Text style={styles.forgetPassword}>{i18n.t("forgetPassword")}</Text>
        </View>
        <View style={{flex: 2}} />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText1}>{i18n.t("lineContact")}</Text>
          <Text style={styles.footerText2}>{i18n.t("phoneContact")}</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};


Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginSuccess: loginSuccess
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Login);



