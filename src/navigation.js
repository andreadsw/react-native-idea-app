import React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/login-form';
import IdeaList from './components/idea-list';
import AddIdea from './components/add-idea';
import EditIdea from './components/edit-idea';


// There is only createStackNavigator on this version of react-navigation. See package.json
// Here you create screens stacks
const AuthStack = createStackNavigator ({

  Login: {
    screen: LoginForm,
    navigationOptions: () => ({
      title: 'Login',
      //Adding individually styling for header
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),

  }
});

const AppStack = createStackNavigator ({
  Ideas: {
    screen: IdeaList,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Your IdeaPad',
        headerLeft: null,
        //Adding individually styling for header
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Icon
            type='evilicon'
            onPress={() => navigation.navigate('AddIdea')}
            name='plus'
            size={30}
            iconStyle={{ paddingRight: 10 }}
          />
        )
      };
    }
  },
  AddIdea: {
    screen: AddIdea,
    navigationOptions: {
      title: 'Add your IdeaPad',
      headerLeft: null,
      //Adding individually styling for header
      headerStyle: {
      backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  EditIdea: {
    screen: EditIdea,
    navigationOptions: {
      title: 'Edit your IdeaPad',
      headerLeft: null,
      //Adding individually styling for header
      headerStyle: {
        backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
      },
    }
  }
});

export default createStackNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      // header null works more effectively than headerBackTitle: null,
      //headerBackTitle: null just hide the word 'back' keeping the icon >
      // without setting null the header does not get at the top of screen,
      // which is very annoying. A lot of research to find here:
      //https://github.com/GeekyAnts/native-base-react-navigation-stack-navigator/issues/5
      header: null
    },
  }
);
