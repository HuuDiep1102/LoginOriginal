import React, {useCallback, useDispatch} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from './Home.styles'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { logout } from "../../redux";

const Logout = ({ logout }) => {

  const onLogout = useCallback(
    () => {
      logout();
    },
    [],
  )
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <TouchableOpacity
        onPress={onLogout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: logout
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Logout);
