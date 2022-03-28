/* 
Component Level State => data that is associated with that 1 level component
Global/App Level State => will need this data to share it in multiple components
*/

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedBackForm from "./components/FeedBackForm";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import AboutIconLink from "./components/AboutIconLink";

import AboutPage from "./pages/AboutPage";
import { FeedBackProvider } from "./context/FeedBackContext";

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedBackProvider>
  );
}

export default App;
