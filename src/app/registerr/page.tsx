import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import RegisterForm from '@/components/Auth/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="register-content">
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;