import type { ILocalAudioTrack, ILocalTrack, ILocalVideoTrack } from "agora-rtc-react";
import AgoraRTC, {
  AgoraRTCScreenShareProvider,
  LocalAudioTrack,
  LocalVideoTrack,
  useJoin,
  usePublish,
  useTrackEvent,
} from "agora-rtc-react";
import { useEffect, useState } from "react";
import { appConfig } from "./settings";
import { IShareScreenProps } from "../../application/interfaces";





export const ScreenShare = ({
  screenShareOn,
  screenTrack,
  onCloseScreenShare,
}: IShareScreenProps) => {
  const [client] = useState(() => AgoraRTC.createClient({ mode: "rtc", codec: "vp8" }));
  const [screenVideoTrack, setScreenVideoTrack] = useState<ILocalVideoTrack | null>(null);
  const [screenAudioTrack, setScreenAudioTrack] = useState<ILocalAudioTrack | null>(null);

  
  useJoin(
    {
      appid: appConfig.appId,
      channel: appConfig.channel,
      token: appConfig.token,
      uid: appConfig.ShareScreenUID,
    },
    screenShareOn,
    client,
  );


  useEffect(() => {
    if (!screenTrack) {
      setScreenAudioTrack(null);
      setScreenVideoTrack(null);
    } else {
      if (Array.isArray(screenTrack)) {
        setScreenVideoTrack(
          screenTrack.filter(
            (track: ILocalTrack) => track.trackMediaType === "video",
          )[0] as ILocalVideoTrack,
        );
        setScreenAudioTrack(
          screenTrack.filter(
            (track: ILocalTrack) => track.trackMediaType === "audio",
          )[0] as ILocalAudioTrack,
        );
      } else {
        setScreenVideoTrack(screenTrack);
      }
    }
  }, [screenTrack]);


  usePublish([screenVideoTrack, screenAudioTrack], screenShareOn, client);


  useTrackEvent(screenVideoTrack, "track-ended", () => {
    onCloseScreenShare && onCloseScreenShare();
  });

  return (
    <AgoraRTCScreenShareProvider client={client}>
      {screenShareOn && screenVideoTrack && (
        <LocalVideoTrack
          disabled={!screenShareOn}
          play={screenShareOn}
         
          track={screenVideoTrack}
        />
      )}
      {screenAudioTrack && <LocalAudioTrack disabled={screenShareOn} track={screenAudioTrack} />}
    </AgoraRTCScreenShareProvider>
  );
};

export default ScreenShare;
