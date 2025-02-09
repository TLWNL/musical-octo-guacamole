import { GiftedChat } from "react-native-gifted-chat";
import { IMessage, IState, StateAction } from "./types"; // Import types from the file where you defined them

export const ActionKind = {
  SEND_MESSAGE: "SEND_MESSAGE",
  SET_IS_TYPING: "SET_IS_TYPING",
};

export function reducer(state: IState, action: StateAction): IState {
  switch (action.type) {
    case ActionKind.SEND_MESSAGE: {
      return {
        ...state,
        messages: GiftedChat.append(state.messages, action.payload),
      };
    }
    case ActionKind.SET_IS_TYPING: {
      return {
        ...state,
        isTyping: action.payload,
      };
    }
    default:
      return state;
  }
}
