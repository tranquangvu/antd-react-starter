import React from 'react';
import { Link } from 'react-router-dom';
import { Space, Typography, Button } from 'antd';

import notFoundImage from '@/assets/images/not-found.svg';
import './index.scss';

const { Text } = Typography;

function NotFoundPage() {
  return (
    <div className="notfound-page">
      <Space direction="vertical" align="center" size="large">
        <img src={notFoundImage} alt="Not found" className="image" />
        <Text strong>Oops! The page you are looking for does not exist.</Text>
        <Button type="primary">
          <Link to="/">Back to home</Link>
        </Button>
      </Space>
    </div>
  );
}

export default NotFoundPage;
