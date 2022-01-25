import React from 'react';
import { LayoutWrapper } from '../styles/main/layout.styled';
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Content from '../containers/Content'

export default function Layout() {
  return (

    <LayoutWrapper>
      
      <Header />
      <Content/>
      <Footer />
    </LayoutWrapper>

    
  );
}



