import React, {useState} from 'react';

import CookieChoiceContext from './context';

import utils from '../../utils';

const {areTrackingCookiesEnabled} = utils;

const TestProvider = ({children}) => {
  const [cookiesEnabled, setCookiesEnabled] = useState(areTrackingCookiesEnabled);

  return (
    <CookieChoiceContext.Provider value={{
      cookiesEnabled, setCookiesEnabled,
    }}>
      {children}
    </CookieChoiceContext.Provider>
  );
}

export default TestProvider;
