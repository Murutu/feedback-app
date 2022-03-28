/* 
Component Level State => data that is associated with that 1 level component
Global/App Level State => will need this data to share it in multiple components
*/

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedBackForm from "./components/FeedBackForm";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm handleAdd={addFeedback} />
        <FeedBackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
