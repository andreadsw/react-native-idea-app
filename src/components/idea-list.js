import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getIdeas } from '../actions';
import _ from 'lodash';


class IdeaList extends Component {

  componentDidMount() {
    this.props.getIdeas();
  }

  renderList() {
    return this.props.ideas.map((idea)=> {
      return(
        <ListItem
        key={idea.id}
        title={idea.title}
        onPress={() => this.props.navigation.navigate('EditIdea', { idea })}
        leftIcon={{ name: 'lightbulb-outline' }}
        rightIcon={{ name: 'keyboard-arrow-right' }} />
      )
    })
  }

  render() {

    return (
      <View containerStyle={{marginTop: 0, padding: 0}}>
         {this.renderList()}
      </View>
    );
  }
}

function mapStateToProps(state){
  //state.ideas
  // map to become an array of objects
  const ideas = _.map(state.ideas, (val, id ) => {
    val['id'] = id;
    return val;
  })
  return { ideas };
}

export default connect(mapStateToProps, { getIdeas })(IdeaList);
