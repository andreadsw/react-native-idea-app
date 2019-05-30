import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, editIdea, deleteIdea } from '../actions';
import { connect } from 'react-redux';
import IdeaPadForm from './ideapad-form';
import _ from 'lodash';


class EditIdea extends Component {
  componentDidMount() {
      const { params } = this.props.navigation.state;
      _.each(params.idea, (value, field)=> {
          this.props.ideaInputChange({field, value});
      });
  }

  // Function for onPress
  edit() {
    //Destructuring to get the id from params (from idea object)
    const { id } = this.props.navigation.state.params.idea;
    const { title, idea } = this.props;
    // function from action index.js
    this.props.editIdea({ title, idea, id });
    this.props.navigation.navigate('Ideas');
  }

  // Function for onPress
  delete() {
    const { id } = this.props.navigation.state.params.idea;
    this.props.deleteIdea({ id });
    this.props.navigation.navigate('Ideas');
  }

  render() {
    return (
      <View style={styles.container}>
        <IdeaPadForm {...this.props} />
        <InnerSection>
        <Button title='Save' onPress={this.edit.bind(this)} buttonStyle={styles.buttonColorSave} />
        </InnerSection>
        <InnerSection>
        <Button title='Delete' onPress={this.delete.bind(this)} buttonStyle={styles.buttonColorDelete} />
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
  buttonColorSave: {
    backgroundColor: 'green',
    width: 300,
  },
  buttonColorDelete: {
    backgroundColor: 'red',
    width: 300,
  }
});

const mapStateToProps = state => {
  return {
    title: state.ideaPadForm.title,
    idea: state.ideaPadForm.idea,
  }
}

export default connect(mapStateToProps, { ideaInputChange, editIdea, deleteIdea })(EditIdea);
