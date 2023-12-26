import { ILocalAudioTrack, ILocalVideoTrack } from "agora-rtc-react";
import { MouseEventHandler } from "react";

export interface ICallButton {
  id: number;
  title: string;
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  allTheText: boolean;
}

export interface IBodyCall {
  inCall: boolean;
}
export interface IHeaderCall {
  imgUser: string;
  user: string;
}

export interface IJoinCall {
  setInCall: Function;
  setFormValues: Function;
  formValues: IFormJoinCall;
  imgUser: string;
  user: string;
}

export interface IShareScreenProps {
  screenShareOn: boolean;
  screenTrack: ILocalVideoTrack | [ILocalVideoTrack, ILocalAudioTrack] | null;
  onCloseScreenShare?: () => void;
}

export interface IFormJoinCall {
  user: string;
  imgUser: string;
}
