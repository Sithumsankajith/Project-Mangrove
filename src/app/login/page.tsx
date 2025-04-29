import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import LoginForm from '@/components/Auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="login-content">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;