import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    goBack: () => {},
    deleteNote: () => {},
    addFolder: () => {},
    addNote: () => {},
});

export default NotefulContext;
