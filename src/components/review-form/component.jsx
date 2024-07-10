import { useReducer } from "react";

const START_FORM = { name: "", text: "", rating: 5 };

const rateMin = 0;
const rateMax = 5;

function reducer(state, { type, payload }) {
  switch (type) {
    case "name":
      return { ...START_FORM, name: payload };
    case "rating":
      return {
        ...state, rating: payload < rateMin ? rateMin : payload > rateMax ? rateMax : payload,
      };
    case "text":
      return { ...state, text: payload };
    case "clear":
    default:
      return START_FORM;
  }
}

const useForm = (initialValue) => {
  return useReducer(reducer, initialValue);
};

export const ReviewForm = () => {
  const [form, dispatch] = useForm(START_FORM);

  return (
    <form>
      <div className="inputBlock">
        <span>Name</span>
        <input
          value={form.name}
          onChange={(event) => {
            dispatch({ type: "name", payload: event.target.value });
          }}
        />
      </div>
      <div className="inputBlock">
        <span>Rating</span>
        <input
          type="number"
          min="0"
          max="5"
          value={form.rating}
          onChange={(event) => {
            dispatch({ type: "rating", payload: event.target.value });
          }}
        />
      </div>
      <div className="inputBlock">
        <span>Text</span>
        <input
          value={form.text}
          onChange={(event) => {
            dispatch({ type: "text", payload: event.target.value });
          }}
        />
      </div>
      <br/>
      <button className="inputBlock" onClick={() => dispatch("clear")}>
        Save
      </button>
    </form>
  );
};