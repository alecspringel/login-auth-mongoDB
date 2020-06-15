import axios from "axios";
import { SET_EVENT_LIST, ADD_EVENT_TO_LIST, GET_ERRORS } from "./types";


// Login - get user token
export const getAllEvents = () => (dispatch) => {
  const token = localStorage.getItem("jwtToken")
  const storedToken = {
    headers: {
       Authorization: token
    }
 }
  axios
    .get("/api/events", storedToken)
    .then((res) => {
      console.log(res.data)
      dispatch(setEventList(res.data));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const createEvent = (newEvent) => (dispatch) => {
  const token = localStorage.getItem("jwtToken")
  const storedToken = {
    headers: {
       Authorization: token
    }
  }
  axios
    .post("/api/events/create", {newEvent, storedToken})
    .then((res) => {
      dispatch(addEventToList(res.data));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};


export const setEventList = (eventList) => {
  return {
    type: SET_EVENT_LIST,
    payload: eventList,
  };
};

export const addEventToList = (newEvent) => {
  return {
    type: ADD_EVENT_TO_LIST,
    payload: newEvent,
  };
};