import { Avatar, Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {

  const count = simplified ? 10 : 100;

  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(SearchTerm.toLowerCase()));
    setcryptos(filteredData);
  }, [data, SearchTerm])

  if(isFetching)
    return <Loader />;

  console.log(cryptos);

  return (
    <>
    {
      simplified ? "" :
      <div className="search-crypto">
      <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    }
    <Row gutter={[32, 32]} className="crypto-card-container">
      {
        cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<Avatar src={currency.iconUrl} size="small" />} hoverable >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default Cryptocurrencies