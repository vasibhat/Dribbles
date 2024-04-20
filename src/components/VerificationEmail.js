import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const VerificationEmail = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto">
          <h2 className="text-xl font-medium mb-4 text-center">Please verify your email address</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOoVej8L0BZLIVGfE2_XLfyJlzH_FRzvsq-96R4QgrZ23Y5vqCnckAtcwgT5ETEC60AI&usqp=CAU" alt="Logo" className="w-20 mx-auto mb-4" />
          <p className="text-black mb-4 text-center">
            Please verify your email address. We've sent a confirmation email to:
          </p>
          <span className="font-bold block text-center">account@refero.design</span>
          <p className="text-black mb-4 text-center">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <div className="flex flex-col space-y-4">
            <p className="text-center">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it you can</p>
            <a href="" className="text-lg text-pink-400 hover:underline focus:outline-none text-center">
              resend the confirmation email.
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-center">Wrong email address?</p>
            <a href="" className="text-lg text-pink-400 hover:underline focus:outline-none text-center">
              Change it.
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerificationEmail;
