import React from 'react';
import ReactDom from 'react';
import { createStore } from 'redux';
import { rootReducer } from './reducers/reducers';

const store = createStore(rootReducer)
