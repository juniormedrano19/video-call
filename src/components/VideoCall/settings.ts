
import { UID } from "agora-rtc-react";

const ShareScreenUID: UID = 'Compartiendo pantalla';
export const appConfig = {
    appId:  import.meta.env.VITE_APP_ID,
    channel: import.meta.env.VITE_CHANNEL_MAIN || "challenge-ci",
    token: import.meta.env.VITE_TOKEN ? import.meta.env.VITE_TOKEN : null,
    ShareScreenUID: ShareScreenUID,
  };

