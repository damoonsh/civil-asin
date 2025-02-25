import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us / تماس با ما</h1>
      
      <div className="contact-us-content">
        <div className="contact-us-column english">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p><strong>Head Office Address:</strong> Tehran, Jahan Ara St., 35th St., No. 34, 3rd Floor</p>
            <p><strong>Tel:</strong> 021-88010844 / 021-88027022</p>
            <p><strong>Fax:</strong> 021-88003485</p>
            <p><strong>Postal Code:</strong> 1433634545</p>
          </div>
        </div>
        
        <div className="contact-us-column persian">
          <h2>اطلاعات تماس</h2>
          <div className="contact-info">
            <p><strong>آدرس دفتر مرکزی:</strong> تهران، خیابان جهان آرا، خیابان ۳۵ پلاک ۳۴ ط سوم</p>
            <p><strong>تلفن:</strong> ۰۲۱۸۸۰۱۰۸۴۴/۰۲۱۸۸۰۲۷۰۲۲</p>
            <p><strong>فکس:</strong> ۰۲۱۸۸۰۰۳۴۸۵</p>
            <p><strong>کد پستی:</strong> ۱۴۳۳۶۳۴۵۴۵</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
