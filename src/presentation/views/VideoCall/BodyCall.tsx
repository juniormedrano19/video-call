import { useEffect, useState } from "react";
import AgoraRTC, {
  LocalUser,
  RemoteUser,
  useIsConnected,
  useJoin,
  useLocalMicrophoneTrack,
  useLocalCameraTrack,
  usePublish,
  useRemoteUsers,
  useLocalScreenTrack,
} from "agora-rtc-react";
import { appConfig } from "../../../components/VideoCall/settings";
import ScreenShare from "../../../components/VideoCall/ScreenShare";
import styles from "./video-call.module.css";
import { IBodyCall, ICallButton } from "../../../application/interfaces";
import { Icons } from "../../../components/Svg/iconsPack";
import Svg from "../../../components/Svg";

export const BodyCall = ({ inCall }: IBodyCall) => {
  const [calling, setCalling] = useState<boolean>(inCall);
  const isConnected = useIsConnected();


  useJoin(
    {
      appid: appConfig?.appId,
      channel: appConfig?.channel,
      token: appConfig?.token ? appConfig?.token : null,
    },
    calling
  );
  const [micOn, setMic] = useState(false);
  const [cameraOn, setCamera] = useState(false);
  const [screenShareOn, setScreenShareOn] = useState(false);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);
  const { screenTrack, error } = useLocalScreenTrack(screenShareOn, {}, "auto");

  const closeCall = () => {
    setCalling(false);
    return (window.location.href = "/");
  };

  const callButtons: ICallButton[] = [
    {
      id: 1,
      title: "Activar Micrófono",
      icon: micOn ? "microphone" : "microphoneOff",
      className: micOn
        ? `${styles["footer-button"]}`
        : `${styles["footer-button"]} ${styles["inactive-footer-button"]}`,
      onClick: () => setMic(!micOn),
      allTheText: false,
    },
    {
      id: 2,
      title: "Activar Cámara",
      icon: cameraOn ? "video" : "cameraOff",
      onClick: () => setCamera(!cameraOn),
      className: cameraOn
        ? `${styles["footer-button"]}`
        : `${styles["footer-button"]} ${styles["inactive-footer-button"]}`,
      allTheText: false,
    },
    {
      id: 3,
      title: "Compartir Pantalla",
      icon: screenShareOn ? "close" : "share",
      onClick: () => setScreenShareOn(!screenShareOn),
      className: !screenShareOn
        ? `${styles["footer-button"]}`
        : `${styles["footer-button"]} ${styles["inactive-footer-button"]}`,
      allTheText: false,
    },
    {
      id: 4,
      title: "Cortar Llamada",
      icon: "endCall",
      onClick: closeCall,
      className: `${styles["footer-button"]} ${styles.allText}`,
      allTheText: true,
    },
    // {
    //   id: 5,
    //   title: "Grabar videollamada",
    //   icon: "record",
    //   onClick: () => {},
    //   className: `${styles["footer-button"]}`,
    //   allTheText: false,
    // },
    // {
    //   id: 6,
    //   title: "Enviar mensaje",
    //   icon: "message",
    //   onClick: () => {},
    //   className: `${styles["footer-button"]}`,
    //   allTheText: false,
    // },
    // {
    //   id: 7,
    //   title: "Ver más",
    //   icon: "dots",
    //   onClick: () => {},
    //   className: `${styles["footer-button"]}`,
    //   allTheText: false,
    // },
  ];

  useEffect(() => {
    const startAgora = async () => {
      try {
        if (inCall) {
          await AgoraRTC.createMicrophoneAndCameraTracks();
        } else {
          return;
        }
      } catch (error) {
        alert(
          `Ha ocurrido un error, reinicia tu navegador y vuelve a probar ${error}`
        );
      }
    };

    startAgora();
  }, [inCall]);

  useEffect(() => {
    setScreenShareOn(false);
  }, [error]);
  usePublish([localMicrophoneTrack, localCameraTrack]);

  const remoteUsers = useRemoteUsers();

  return (
    <div className={styles["body-call"]}>
      <div className={styles["main-call"]}>
        <div className={styles["user-list"]}>
          <div
            className={styles["local-user"]}
            style={{
              width: `${
                remoteUsers?.length === 0
                  ? "100vw"
                  : remoteUsers?.length === 1 && "50%"
              }`,
            }}
          >
            {screenShareOn ? (
              <ScreenShare
                onCloseScreenShare={() => {
                  setScreenShareOn(false);
                }}
                screenShareOn={screenShareOn}
                screenTrack={screenTrack}
              />
            ) : (
              <>
                <LocalUser
                  audioTrack={localMicrophoneTrack}
                  cameraOn={cameraOn}
                  micOn={micOn}
                  videoTrack={localCameraTrack}
                  playVideo={cameraOn}
                  cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                >
                  <span className={styles["user-name"]}>Junior Medrano</span>
                  <div
                    className={`${
                      micOn
                        ? `${styles["microphone-on"]} ${styles["microphone"]}`
                        : `${styles["microphone-off"]} ${styles["microphone"]}`
                    }`}
                  >
                    <Svg
                      icon={micOn ? Icons.microphone : Icons.microphoneOff}
                    />
                  </div>
                </LocalUser>
              </>
            )}
          </div>
          <div
            className={styles["remote-users"]}
            style={{
              width: `${
                remoteUsers?.length === 0
                  ? "0px"
                  : remoteUsers?.length === 1
                  ? "50%"
                  : "300px"
              }`,
            }}
          >
            {remoteUsers.map((user) => (
              <div
                className={`${
                  remoteUsers?.length === 1
                    ? ` ${styles["remote-full"]}`
                    : `${styles["remote-user"]}`
                }`}
                key={user.uid}
              >
                <RemoteUser
                  cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                  user={user}
                >
                  <span className={styles["user-name"]}>{user.uid}</span>
                  <div
                    className={`${
                      user?.hasAudio
                        ? `${styles["microphone-on"]} ${styles["microphone"]}`
                        : `${styles["microphone-off"]} ${styles["microphone"]}`
                    }`}
                  >
                    <Svg
                      icon={
                        user?.hasAudio ? Icons.microphone : Icons.microphoneOff
                      }
                    />
                  </div>
                </RemoteUser>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isConnected && (
        <div className={styles["footer-call"]}>
          <div className={styles["wrapper-footer"]}>
            {callButtons?.map(
              (
                { title, icon, onClick, className, allTheText }: ICallButton,
                index
              ) => {
                return (
                  <button
                    title={title}
                    key={index}
                    className={className}
                    onClick={onClick}
                  >
                    {allTheText && <p>{title}</p>}
                    <Svg icon={Icons[icon as keyof typeof Icons]} />
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};
