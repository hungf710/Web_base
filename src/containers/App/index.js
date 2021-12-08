/**
 *
 * DemoApp
 *
 */

import React, { memo } from 'react';
import AppRouter from '../AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../Style/global-styles';

export function App() {
  return (
    <div id="LauncherApp">
      <AppRouter />
      <ToastContainer />
      <GlobalStyle/>
    </div>
  );
}

App.propTypes = {};
export default memo(App);
