import React, { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import FooterBar from './Components/FooterBar';
import Main from './Components/Main';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import { Header } from 'antd/lib/layout/layout';
const { Sider, Content, Footer } = Layout;

const App = () => {

  const [activeSider, setActiveSider] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1000) {
      setActiveSider(false);
    } else {
      setActiveSider(true);
    }
  }, [screenSize]);

  return (
    <>
    <Layout>
      { activeSider && 
      <Sider width={'18vw'} style={{"minHeight": '100vh', "position": "sticky"}}>
        <Navbar />
      </Sider> }

      { !activeSider && 
      <Header style={{"height": "100px"}}>
        <Navbar />
      </Header> }
      <Layout>
        <Content style={{"margin": "1rem"}}>
          <Main />
        </Content>
        <Footer style={{"background-color": "#001529"}}>
          <FooterBar />
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default App