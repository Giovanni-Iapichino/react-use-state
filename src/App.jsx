// LAYOUT COMPONENTS
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

// DATA COMPONENTS
import languages from "./data/languages";

export default function App() {
  return (
    <>
      <div className="container">
        <h1>Learn Web Development</h1>
      </div>
      <div className="container">
        <div className="d-flex gap-4 p-3 mt-5">
          <button className="btn btn-primary">HTML</button>
          <button className="btn btn-primary">CSS</button>
          <button className="btn btn-primary">JavaScript</button>
          <button className="btn btn-primary">Node.js</button>
          <button className="btn btn-primary">Express</button>
          <button className="btn btn-primary">ReactJS</button>
        </div>

        <div class="card ms-3 mt-3">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
