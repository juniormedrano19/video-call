import React, { useRef, useState, useEffect } from "react";
import styles from "./image.module.css";
import Svg from "../Svg";
import { Icons } from "../Svg/iconsPack";

interface IImage {
  isLabel?: boolean;
  label?: string;
  accept: string;
  textAllowed: string;
  name: string;
  onImageChange?: Function;
  value: string;
}

export const Image = ({
  isLabel = false,
  label,
  accept,
  textAllowed,
  name,
  onImageChange,
  value,
}: IImage) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const [, setLoading] = useState<boolean>(false);

  const handlePencilClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "4devs-images");
        setLoading(true);

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/devs4/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const imageUrl = await response.json();
          setImageSrc(imageUrl.secure_url);

          setLoading(false);
          if (onImageChange) {
            onImageChange(imageUrl.secure_url);
          }
        } else {
          console.error("El archivo subido falló");
          setLoading(false);
        }
      } catch (error) {
        console.error("Ha ocurrido un error:", error);
        setLoading(false);
      }
    }
  };

  const handleLabelCloseClick = () => {
    setImageSrc(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (value) {
      setImageSrc(value);
    }
  }, [value]);

  return (
    <div>
      <div>
        {isLabel && <label className={styles["label"]}>{label}</label>}

        <div>
          <div
            style={{
              backgroundImage: imageSrc
                ? `url(${imageSrc})`
                : `url('https://preview.keenthemes.com/metronic8/demo31/assets/media/svg/avatars/blank.svg')`,
            }}
            className={styles["image-input"]}
          >
            <div className={styles["image-wrapper"]}></div>

            <span
              className={styles["label-pencil"]}
              onClick={handlePencilClick}
              title={"Cambiar Imagen"}
            >
              <Svg icon={Icons.pencil} />
              <input
                type="file"
                ref={fileInputRef}
                name={name}
                accept={accept}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <input type="hidden" name="avatar_remove" value="1" />
            </span>

            {imageSrc && (
              <span
                className={styles["label-close"]}
                onClick={handleLabelCloseClick}
                title={"Remover Imagen"}
              >
                <Svg icon={Icons.closeImage} />
              </span>
            )}
          </div>

          <div className={styles["form-text"]}>{textAllowed}</div>
        </div>
      </div>
    </div>
  );
};
