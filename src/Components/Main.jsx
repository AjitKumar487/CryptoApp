import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './Homepage'
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetails from './CryptoDetails';
import CryptoNews from './CryptoNews';

const Main = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route exact path="/news" element={<CryptoNews />} />
      </Routes>
  )
}

export default Main;