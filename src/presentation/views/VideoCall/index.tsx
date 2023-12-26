import { useState } from "react";
import { BodyCall } from "./BodyCall";
import { HeaderCall } from "./HeaderCall";
import styles from "./video-call.module.css";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import { JoinCall } from "./JoinCall";
import { IFormJoinCall } from "../../../application/interfaces";
const initialForm: IFormJoinCall = {
  user: "",
  imgUser: "",
};

export const VideoCall = () => {
  const [inCall, setInCall] = useState(false);
  const [formValues, setFormValues] = useState<IFormJoinCall>(initialForm);
  const { user, imgUser } = formValues;
  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

  return (
    <>
      {inCall ? (
        <AgoraRTCProvider client={client}>
          <section className={styles["layout"]}>
            <div className={styles["header"]}>
              <HeaderCall user={user} imgUser={imgUser} />
            </div>

            <div className={styles["body"]}>
              <BodyCall inCall={inCall} user={user} />
            </div>
          </section>
        </AgoraRTCProvider>
      ) : (
        <JoinCall
          setInCall={setInCall}
          setFormValues={setFormValues}
          imgUser={imgUser}
          user={user}
          formValues={formValues}
        />
      )}
    </>
  );
};
