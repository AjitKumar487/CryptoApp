import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import FooterBar from './Components/FooterBar';
import Main from './Components/Main';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
const { Sider, Content, Footer } = Layout;

const App = () => {
  return (
    <>
    <Layout>
      <Sider width={'18vw'} style={{"minHeight": '100vh', "position": "sticky"}}>
        <Navbar />
      </Sider>
      <Layout>
        <Content style={{"margin": "1rem"}}>
          <Main />
        </Content>
        <Footer>
          <FooterBar />
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default App