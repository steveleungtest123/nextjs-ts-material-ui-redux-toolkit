import { store } from '@/state/store';
import theme from '@/theme/theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
