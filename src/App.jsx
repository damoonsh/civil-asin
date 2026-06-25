import Slideshow from './components/SlideShow';
import './styles/App.css';
import { project_images, certs } from "./meta";

const App = () => {
  return (
    <div className="App page-container">
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
