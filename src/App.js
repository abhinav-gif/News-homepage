import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import Header from './Components/Header';
import FootBar from './Components/FootBar';
import ContentBox from './Components/ContentBox';
import './Styles/mediaqueries.scss'

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Header />
      <ContentBox />
      <FootBar />
    </ChakraProvider>
  );
}

export default App;
