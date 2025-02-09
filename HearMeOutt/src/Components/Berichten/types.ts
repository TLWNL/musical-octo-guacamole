// types.ts (or any name you prefer for the file)
export interface IMessage {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar?: string;
  };
  sent?: boolean;
  received?: boolean;
}

export interface IState {
  messages: IMessage[];
  isTyping: boolean;
}

export interface StateAction {
  type: string;
  payload?: any;
}
