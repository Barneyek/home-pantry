import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root';
import './i18n';

ReactDOM.render(
    <Suspense fallback={(<div>Loading...</div>)} >
      <Root />
    </Suspense>,
document.getElementById('root'));
