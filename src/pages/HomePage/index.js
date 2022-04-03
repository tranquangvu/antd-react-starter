import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { logout } from '@/store/auth/authSlice';
import logoImage from '@/assets/images/logo.png';
import './index.scss';

const { Title, Paragraph } = Typography;

function HomePage() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>
        <div className="intro">
          <Title level={1} className="intro__title">
            Antd React Starter
          </Title>
          <Paragraph className="intro__description">
            A simple react starter (create-react-app) with antd,
            @reduxjs/toolkit, axios & more...
          </Paragraph>
          <div className="intro__actions">
            {isAuth && (
              <>
                <Button type="primary">
                  <Link to="/me">Profile</Link>
                </Button>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            )}
            {!isAuth && (
              <Button type="primary">
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
