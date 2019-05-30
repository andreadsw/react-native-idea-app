import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';
import IdeaPadForm from './ideapad-form';


class AddIdea extends Component {
  create() {
    const { title, idea } = this.props;
    this.props.createIdea({ title, idea });
    this.props.navigation.navigate('Ideas');
  }
  render() {
    return (
      <View style={styles.container}>
        <IdeaPadForm />
        <InnerSection>
        <Button title='submit' onPress={this.create.bind(this)} buttonStyle={styles.buttonColor} />
        </InnerSection>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  buttonColor: {
    backgroundColor: 'green',
    width: 300,
  }
});

const mapStateToProps = state => {
  return {
    title: state.ideaPadForm.title,
    idea: state.ideaPadForm.idea,
  }
}

export default connect(mapStateToProps, { ideaInputChange, createIdea })(AddIdea);
