import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import InnerSection from './inner-section';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';


class LoginForm extends Component {

  login() {
    const { email, password } = this.props;
    this.props.login({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <Text>{this.props.error}</Text>
      );
    }
  }

  showButton() {
    if(this.props.loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={'small'} />
        </View>
      );
    }
    return(<Button title='Login' onPress={this.login.bind(this)} buttonStyle={styles.buttonColor} />)
  }

  // To navigate between screens after authentication
  //@Todo: Needs working on the navigation flow when login failure
  componentWillReceiveProps(nextProps){
    if(nextProps.user !== this.props.user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <Input placeholder='E-mail' containerStyle={styles.inputContainer}
          value ={this.props.email}
          onChangeText={text => this.props.authInputChange({prop: 'email', value: text })}/>
        </InnerSection>

        <InnerSection>
          <Input
            placeholder='Password'
            value ={this.props.password}
            onChangeText={text => this.props.authInputChange({prop: 'password', value: text })}
            secureTextEntry
            containerStyle={styles.inputContainer}
          />
        </InnerSection>

        {this.renderError()}

        <InnerSection>
          {this.showButton()}
        </InnerSection>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonColor: {
    backgroundColor: 'green',
    width: 300
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 55,
    width: 300,
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    user: state.auth.loading,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, { authInputChange, login })(LoginForm);
