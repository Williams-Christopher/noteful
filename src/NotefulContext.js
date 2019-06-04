import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    path: '',
    goBack: () => {},
    deleteNote: () => {},
});

export default NotefulContext;