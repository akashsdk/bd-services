import React, { useState, useRef } from "react";
import "./Profile.css";

import { Modal, Tooltip } from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  LogoutOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import IMG from "../Image/Profile.png";

export default function Profile() {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setImage(null);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Profile-Body">
      <div className="Profile-Body-Left">
        <div className="Profile-Left-Box">
          <div style={{ flex: "1" }} />
          <p className="Profile-Title-Text">My Profile</p>
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Tooltip title="LogOut" color="#f42a41">
              <Link className="Profile-Title-Link">
                <LogoutOutlined style={{ fontSize: "25px" }} />
              </Link>
            </Tooltip>
          </div>
        </div>

        <div>
          {image ? (
            <img className="Profile-Img" src={image} alt="Preview"></img>
          ) : (
            <img className="Profile-Img" src={IMG} alt="Preview"></img>
          )}

          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <div style={{ display: "flex", marginTop: "20px" }}>
            <button
              className="Profile-Change-Button"
              onClick={handleImageClick}
            >
              <UploadOutlined className="Profile-Button-Icon" />
              <p className="Profile-Button-Text">Change Image</p>
            </button>

            <button className="Profile-Remove-Button" onClick={showModal}>
              <DeleteOutlined className="Profile-Button-Icon" />
              <p className="Profile-Button-Text">Remove Image</p>
            </button>
          </div>

          <p className="Profile-Name-Text">Md Tasnim Shahriar Akash</p>

          <Link>
          <ContactsOutlined />
          <p>Personal info</p>
          </Link>
          
        </div>
      </div>

      <div className="Profile-Body-Right">Right</div>

      <box>
        <Modal
          title="Remove profile picture?"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        ></Modal>
      </box>
    </div>
  );
}
