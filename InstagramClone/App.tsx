import React from 'react';

import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
// import {
//   useAuthenticator,
//   withAuthenticator,
// } from '@aws-amplify/ui-react-native';

Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};

// export default withAuthenticator(App);
export default App;
