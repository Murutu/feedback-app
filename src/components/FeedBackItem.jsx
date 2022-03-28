// reverse={true} reverses color from dark to light & vice versa
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackItem({ item, handleDelete }) {
  const { deleteFeedBack, editFeedBack } = useContext(FeedBackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedBack(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
