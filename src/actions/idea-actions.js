import firebase from 'firebase';


export const ideaInputChange = ({ field, value }) => {
    return {
        type: 'IDEA_INPUT_CHANGE',
        payload: { field, value }
    }
}

//Firebase documentation: https://firebase.google.com/docs/database/web/read-and-write

// Function for creating idea
export const createIdea = ({title, idea}) => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        firebase.database().ref(`/userIdeas/${uid}/ideas`)
        .push({title, idea})
        .then(() => dispatch({type: 'NEW_IDEA'}));
    }
}


// Function for retrieving ideas
export const getIdeas = () => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        firebase.database().ref(`/userIdeas/${uid}/ideas`)
        .on('value', snapshot => {
            dispatch({type: 'GET_IDEAS', payload: snapshot.val()})
        })
    }
}

// Function for editing idea
export const editIdea = ({title, idea, id}) => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
        .set({title, idea})
        .then(()=> dispatch({type: 'IDEA_UPDATED'}));
    }
}

// Function for deleting idea
export const deleteIdea = ({id}) => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
        .remove()
        .then(()=> dispatch({type: 'IDEA_DELETED'}));
    }
}
