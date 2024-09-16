import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/navbar";
import "./app.css";
import Content from "./components/content";
import About from "./components/about";
import Contact from "./components/contact";
import Explore from "./components/explore";
import ExploreResult from "./components/exploreResult";

function App() {
  return (
    <div className="background">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/result" element={<ExploreResult />} />
      </Routes>
    </div>
  );
}

export default App;

// <div className="background">
//   <Header />
//   <Navbar />
// </div>
{
  /* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */
}
