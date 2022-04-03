import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Avatar, Button, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { logout } from '@/store/auth/authSlice';
import './index.scss';

const { Text } = Typography;

function ProfilePage() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="profile-page">
      <Space
        direction="vertical"
        align="center"
        size="large"
      >
        <Avatar
          size={80}
          icon={<AntDesignOutlined />}
        />
        <Text strong>
          {user.email}
        </Text>
        <Space>
          <Button type="primary">
            <Link to="/">Back to home</Link>
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Space>
      </Space>
    </div>
  );
}

export default ProfilePage;
