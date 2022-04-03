import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { ErrorsAlert } from '@/components';
import { login } from '@/store/auth/authThunk';
import { selectAuth } from '@/store/auth/authSelector';
import { isPending } from '@/utils/loadingUtil';
import './index.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  if (auth.user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="form">
        {auth.error && (
          <ErrorsAlert
            message={auth.error.message}
            details={auth.error.details}
          />
        )}
        <Form
          name="login"
          layout="vertical"
          onFinish={handleLogin}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: 'email', message: 'Email is not valid' },
              { required: true, message: 'Email is required' },
            ]}
            hasFeedback
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Password is required' },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            size="large"
            loading={isPending(auth.loading)}
          >
            Login
          </Button>
        </Form>
        <div className="form__actions">
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
