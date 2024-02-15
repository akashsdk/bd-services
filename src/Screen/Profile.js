import React, { useState, useRef } from "react";
import "./Profile.css";

import { Modal, Tooltip, Button } from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  LogoutOutlined,
  ContactsOutlined,
  SendOutlined,
  PlusCircleOutlined,
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

  // For Right Side
  const [users, setUsers] = useState([
    { id: 1, name: "Mr. X", type: "/Family", phone: "(017******90)"},
    { id: 2, name: "Mr. Y", type: "/Friend", phone: "(015******76)" },
    { id: 3, name: "Mr. Z", type: "/Family", phone: "(018******01)" },
  ]);

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleSendUser = () => {
    const name = document.getElementById("nameInput").value;
    const type = document.getElementById("typeInput").value;

    if (name && type) {
      const newUser = {
        id: users.length + 1,
        name: name,
        type: type,
      };

      setUsers((prevUsers) => [...prevUsers, newUser]);
      document.getElementById("nameInput").value = "";
      document.getElementById("typeInput").value = "";
    } else {
      alert("Please fill in both Name and Type fields.");
    }
  };

  // for all Delete
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
    setUsers([]);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  // for Add account
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  return (
    <div className="Profile-Body">
      {/* Left-Side */}
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
              <Link className="Profile-Title-Link" to="/Log-In">
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

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/Personal-Info" className="Profile-Left-Link">
              <ContactsOutlined className="Profile-Button-Icon" />
              <p className="Profile-Button-Text">Personal info</p>
            </Link>

            <Link to="/Log-In" className="Profile-Left-Link2">
              <LogoutOutlined className="Profile-Button-Icon" />
              <p className="Profile-Button-Text">Sign out</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Right-Side */}
      <div className="Profile-Body-Right">
        <div className="Profile-Right-Box">
          <p className="Profile-Title-Text">Friend & Family</p>
          <Link className="Profile-Right-Link" to="/Personal-Info">
            <p>Manage Your Account</p>
          </Link>
          <div className="Profile-Right-Div">
            {users.map((user) => (
              <div key={user.id} className="Profile-Right-Div2">
                <img alt="" src={IMG} className="Profile-Right-Img" />
                <div className="Profile-Right-Div3">
                  <p className="Profile-Title-Text2">{user.name}</p>
                  <p className="Profile-Title-Text3">{user.type} {user.phone}</p>
                </div>
                <DeleteOutlined
                  className="Profile-Title-Icon"
                  onClick={() => handleDeleteUser(user.id)}
                />
              </div>
            ))}

            <button className="Profile-Right-AddButton" onClick={showModal3}>
              <PlusCircleOutlined className="Profile-Title-Icon2" />
              <p className="Profile-Title-Text2">Add another account</p>
            </button>

            <button className="Profile-Right-AddButton2" onClick={showModal2}>
              <DeleteOutlined className="Profile-Title-Icon2" />
              <p className="Profile-Title-Text2">Remove of all accounts</p>
            </button>

            {/* Input for image, two text inputs, and a send icon */}
            <div className="Profile-Right-Div2">
              <input type="file" accept="image/*" />
              <input id="nameInput" type="text" placeholder="Name" />
              <input id="typeInput" type="text" placeholder="Type" />
              <SendOutlined
                className="Profile-Title-Icon"
                onClick={handleSendUser}
              />
            </div>
          </div>
        </div>
      </div>

      <box>
        <Modal
          title="Remove profile picture?"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        ></Modal>

        <Modal
          title="Remove of all accounts?"
          open={isModalOpen2}
          onOk={handleOk2}
          onCancel={handleCancel2}
        ></Modal>

        <Modal
          title="Add another account"
          open={isModalOpen3}
          onOk={handleOk3}
          onCancel={handleCancel3}
          footer={[
            <Button key="back" onClick={handleCancel3}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk3}>
              Submit
            </Button>,
          ]}
        >
          <div>ghjhg</div>
        </Modal>
      </box>
    </div>
  );
}
