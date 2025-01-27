import Header from './components/header'
import Footer from './components/footer'
import Slideshow from './components/SlideShow';

import './styles/App.css';
import {project_images,certs} from "./meta";

function App() {

  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <Slideshow data={project_images} />
        <Slideshow data={certs} cert={true} />
      </div>
      <Footer />
    </div>
  )
}

export default App
