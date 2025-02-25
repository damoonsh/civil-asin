import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us / درباره ما</h1>
      
      <div className="about-us-content">
        <div className="about-us-column english">
          <h2>Civil Asin Engineering Company</h2>
          <p>
            Civil Asin Engineering Company was established in 2010 with the aim of providing engineering services in the field of civil engineering, especially in the design and supervision of various construction projects.
          </p>
          <p>
            Our team consists of experienced engineers and specialists who are committed to delivering high-quality services and innovative solutions to meet the diverse needs of our clients.
          </p>
          <p>
            We specialize in structural design, construction supervision, project management, and technical consulting for residential, commercial, and industrial projects.
          </p>
          <p>
            At Civil Asin, we are dedicated to excellence, integrity, and customer satisfaction in all our endeavors.
          </p>
        </div>
        
        <div className="about-us-column persian">
          <h2>شرکت مهندسی سیویل آسین</h2>
          <p>
            شرکت مهندسی سیویل آسین در سال ۱۳۸۹ با هدف ارائه خدمات مهندسی در زمینه مهندسی عمران، به ویژه در طراحی و نظارت بر پروژه‌های مختلف ساختمانی تأسیس شد.
          </p>
          <p>
            تیم ما متشکل از مهندسان و متخصصان با تجربه است که متعهد به ارائه خدمات با کیفیت بالا و راه حل‌های نوآورانه برای برآورده کردن نیازهای متنوع مشتریان ما هستند.
          </p>
          <p>
            ما در طراحی سازه، نظارت بر ساخت و ساز، مدیریت پروژه و مشاوره فنی برای پروژه‌های مسکونی، تجاری و صنعتی تخصص داریم.
          </p>
          <p>
            در سیویل آسین، ما متعهد به تعالی، صداقت و رضایت مشتری در تمام تلاش‌های خود هستیم.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
