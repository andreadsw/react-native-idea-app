import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';


class IdeaPadForm extends Component {
  render() {
    return (
      <View>
        <InnerSection>
          <Input placeholder='Title' containerStyle={styles.inputContainer}
          value ={this.props.title}
          onChangeText={text => this.props.ideaInputChange({'field': 'title', 'value': text })}/>
        </InnerSection>
        <InnerSection>
          <Input
            placeholder='Write down your ideas here.'
            value={this.props.idea}
            multiline={true}
            inputStyle={{height:200}}
            onChangeText={text => this.props.ideaInputChange({'field': 'idea', 'value': text })}
            containerStyle={styles.inputContainer}
          />
        </InnerSection>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 55,
    width: 300,
  }
});

const mapStateToProps = state => {
  return {
    title: state.ideaPadForm.title,
    idea: state.ideaPadForm.idea,
  }
}

export default connect(mapStateToProps, { ideaInputChange, createIdea })(IdeaPadForm);
