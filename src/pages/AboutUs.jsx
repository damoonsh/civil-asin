import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-title">About Us / درباره ما</h1> */}

      <div className="about-us-content">
        <div className="about-us-column english">
          <h2>Civil Asin Company</h2>
          <p>
            Civil Asin Engineering Company was established in 1379 with the aim of providing contracting and construction services in the field of civil engineering, focusing on construction and installation projects.
          </p>
          <p>
            Our team consists of experienced engineers and specialists who are committed to executing projects with the best quality in the shortest time at optimal cost.
          </p>
          <p>
            In addition to contracting and construction, we specialize in structural design, project management, and technical consulting for residential, commercial, educational, hospital, and industrial projects.
          </p>
          <p>
            At Civil Asin, we are committed to excellence, integrity, and client satisfaction in all our endeavors.
          </p>
        </div>

        <div className="about-us-column persian">
          <h2>شرکت سیویل آسین</h2>
          <p>
            شرکت سیویل آسین در سال ۱۳۷۹ با هدف ارائه خدمات پیمانکاری و ساخت در زمینه مهندسی عمران با تمرکز بر پروژه‌های ساختمانی و تاسیساتی تأسیس گردید.
          </p>
          <p>
            تیم ما متشکل از مهندسان و متخصصان با تجربه است که متعهد به اجرای پروژه‌ها با بهترین کیفیت در کمترین زمان با هزینه بهینه هستند.
          </p>
          <p>
            ما علاوه بر پیمانکاری و ساخت، در طراحی سازه، مدیریت پروژه و مشاوره فنی برای پروژه‌های مسکونی، تجاری، آموزشی، بیمارستانی و صنعتی تخصص داریم.
          </p>
          <p>
            در شرکت سیویل آسین، ما متعهد به تعالی، صداقت و رضایت کارفرمایان در تمام تلاش‌های خود هستیم.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
