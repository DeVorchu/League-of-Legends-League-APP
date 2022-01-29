import React from 'react';
import { LayoutWrapper } from '../styles/main/layout.styled';
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Content from '../containers/Content'
import Banner from '../components/_Baner'

export default function Layout() {
  return (

    <LayoutWrapper>
      
      <Header />
      <Banner />
      <Content/>
      <Footer />
      
    </LayoutWrapper>

    
  );
}



