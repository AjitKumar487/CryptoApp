import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Typography, Col, Statistic, Divider } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoNews from "./CryptoNews";
import Loader from "./Loader";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  if(isFetching)
    return <Loader />
  
  const globalStats = data?.data?.stats;

  return (
    <>
      <div className="global-stats">
        <Typography.Title level={2}>Global Crypto Stats</Typography.Title>
        <Card>
          <Row>
            <Col xs={24} sm={12} lg={8}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)} /></Col>
            <Col xs={24} sm={12} lg={8}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col xs={24} sm={12} lg={8}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            {/* <Divider /> */}
            <Col xs={24} sm={12} lg={8}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col xs={24} sm={12} lg={8}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
          </Row>
        </Card>
      </div>
      <div className="top-ten-cryptocurrencies">
        <div className="crypto-heading-container">
          <Typography.Title level={2} className="crypto-heading" style={{"marginTop": "1.5rem"}}>Top 10 cryptocurrencies in the world</Typography.Title>
          <Typography.Title level={3} className="crypto-show-more"><Link to="/cryptocurrencies">show more...</Link></Typography.Title>
        </div>
        <Cryptocurrencies simplified={true} />
      </div>
      <div className="top-ten-crypto-news">
        <div className="crypto-news-heading-container">
          <Typography.Title level={2} className="crypto-news-heading" style={{"marginTop": "1.5rem"}}>Latest Cryptocurrency news in the world</Typography.Title>
          <Typography.Title level={3} className="crypto-news-show-more"><Link to="/news">show more...</Link></Typography.Title>
        </div>
        <CryptoNews simplified={true} />
      </div>

    </>
  );
};

export default Homepage;
