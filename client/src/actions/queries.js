import * as api from "../api";

export const textQueryAction = (text) => async (dispatch) => {
  let conversation = {
    who: "user",
    content: {
      text: {
        text: text,
      },
    },
  };
  dispatch({ type: "SAVE_MSG", payload: conversation });

  const textQueryVar = {
    text: text,
  };
  try {
    const { data } = await api.textQuery(textQueryVar);
    for (let content of data.fulfillmentMessages) {
      let conversation = {
        who: "bot",
        content: content,
      };
      dispatch({ type: "SAVE_MSG", payload: conversation });
    }

  } catch (err) {
    let conversation = {
      who: "bot",
      content: {
        text: {
          text: " Error just occured, please check the problem",
        },
      },
    };
    dispatch({ type: "SAVE_MSG", payload: conversation });
    console.log(err);
  }
};

export const eventQueryAction = (event) => async (dispatch) => {
  const eventQueryVar = {
    event: event,
  };
  try {
    const { data } = await api.eventQuery(eventQueryVar);
    for (let content of data.fulfillmentMessages) {
      let conversation = {
        who: "bot",
        content: content,
      };
      dispatch({ type: "SAVE_MSG", payload: conversation });
    }
  } catch (err) {
    let conversation = {
      who: "bot",
      content: {
        text: {
          text: " Error just occured, please check the problem",
        },
      },
    };
    dispatch({ type: "SAVE_MSG", payload: conversation });
  }
};
