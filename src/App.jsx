import Slideshow from './components/SlideShow';
import './styles/App.css';
import { project_images, certs } from './meta';

const App = () => {
  return (
    <div className="App page-container">
      <section className="home-section home-section--about">
        <div className="home-section__inner">
          <h2 className="section-title persian-text">درباره ما</h2>
          <div className="home-two-column">
            <div className="content-card english">
              <h3>Civil Asin Company</h3>
              <p>
                Civil Asin Engineering Company was established in 2000 with the aim
                of providing contracting and construction services in the field of
                civil engineering, focusing on construction and installation
                projects.
              </p>
              <p>
                Our team consists of experienced engineers and specialists who are
                committed to executing projects with the best quality in the
                shortest time at optimal cost.
              </p>
              <p>
                In addition to contracting in design and construction, we specialize
                in project management and technical consulting for residential,
                commercial, educational, hospital, and industrial projects.
              </p>
              <p>
                At Civil Asin, we are committed to excellence, integrity, and client
                satisfaction in all our endeavors.
              </p>
            </div>

            <div className="content-card persian">
              <h3>شرکت سیویل آسین</h3>
              <p>
                شرکت سیویل آسین در سال ۱۳۷۹ با هدف ارائه خدمات پیمانکاری و ساخت در
                زمینه مهندسی عمران با تمرکز بر پروژه‌های ساختمانی و تاسیساتی تأسیس
                گردید.
              </p>
              <p>
                تیم ما متشکل از مهندسان و متخصصان با تجربه است که متعهد به اجرای
                پروژه‌ها با بهترین کیفیت در کمترین زمان با هزینه بهینه هستند.
              </p>
              <p>
                ما علاوه بر پیمانکاری در طرح و ساخت، مدیریت پروژه و مشاوره فنی برای
                پروژه‌های مسکونی، تجاری، آموزشی، بیمارستانی و صنعتی تخصص داریم.
              </p>
              <p>
                شرکت سیویل آسین، متعهد به تعالی، صداقت و رضایت کارفرمایان در تمام
                تلاش‌های خود هستیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section--projects">
        <div className="home-section__inner">
          <h2 className="section-title persian-text">پروژه‌های ما</h2>
          <Slideshow data={project_images} DescOn={true} />
        </div>
      </section>

      <section className="home-section home-section--certs">
        <div className="home-section__inner">
          <h2 className="section-title persian-text">گواهینامه‌ها و عضویت‌ها</h2>
          <Slideshow data={certs} cert={true} DescOn={false} />
        </div>
      </section>
    </div>
  );
};

export default App;
