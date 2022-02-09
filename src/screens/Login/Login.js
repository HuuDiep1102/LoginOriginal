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

const schema = yup.object().shape({
  email: yup
    .string()
    .required("身分證字號10碼或會員7碼")
    .email('电子邮件格式无效'),
  password: yup
    .string()
    .required("不能留空")
    .min(6, "請輸入 4-8 碼密碼")
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
          <Text style={styles.titleText}>會員登入</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.sectionStyle}>
            <Image source={require('../../assets/User.png')} style={styles.ImageStyle} />
            <Controller
              control={control}
              render={({ field: { onBlur, value, onChange } }) => (
                <TextInput
                  placeholder="身分證字號10碼或會員7碼"
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
                  placeholder="請輸入 4-8 碼密碼"
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
            <Text style={styles.buttonText}>登 入</Text>
          </TouchableOpacity>
          <Text style={styles.forgetPassword}>忘記密碼？</Text>
        </View>
        <View style={{flex: 2}} />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText1}>前往LINE@文字客服</Text>
          <Text style={styles.footerText2}>如有任何疑問，歡迎您來電寰宇家庭客服中心：{"\n"}
            0809-080-000 或 02-7706-8000</Text>
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



