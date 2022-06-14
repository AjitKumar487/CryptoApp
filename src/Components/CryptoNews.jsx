import { Avatar, Card, Col, Divider, Row, Typography } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import './CryptoNews.css';
import Loader from './Loader';

const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const CryptoNews = ({ simplified }) => {
  const count = simplified ? 6 : 20;
  const { data: cryptonews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count});
  if(!cryptonews?.value)
    return <Loader />

  return (
    <>
    <Row gutter={[24, 24]}>
      {
        cryptonews?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank">
                <div className="news-image-container">
                  <Typography.Title className='news-title' level={5}>{news.name}</Typography.Title>
                  <img src={news?.image?.thumbnail?.contentUrl  || demoImage} />
                </div>
                <Divider />
                <div className="news-description">
                  <p>
                    { news?.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </p>
                </div>

                <Divider />
                <div className="provider-container">
                  <div className='provider-image-name'>
                    <Avatar className='provider-image' src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                    <Typography.Text className='provider-name'>{news?.provider[0]?.name}</Typography.Text>
                  </div>
                    <Typography.Text className='provider-time'>{moment(news?.datePublished).startOf('ss').fromNow()}</Typography.Text>
                </div>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default CryptoNews