import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackStats() {
  const { feedback } = useContext(FeedBackContext);

  // calculate ratings average
  // ,0 is a 2nd argument with a default of 0
  // remove any 0s with this regular expression (/[.,]0$/, '')

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedBackStats;
