import Header from './header'
import Footer from './footer'
import Slideshow from './SlideShow';

import {project_images,certs} from "./meta";

function App() {

  return (
    <>
      <Header />
      <Slideshow data={project_images} />
      <Slideshow data={certs} />
      <Footer />
    </>
  )
}

export default App
