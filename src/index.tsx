import React from 'react';
import { render } from "react-dom";

import { AuthForm } from './AuthForm'
import './global-styles.css';
import '../reverseList';

render(<AuthForm />, document.getElementById('root'));
