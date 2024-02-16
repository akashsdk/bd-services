import React, { useState, useRef } from "react";
import "./Profile.css";

import { Modal, Tooltip, Button, Input } from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  LogoutOutlined,
  ContactsOutlined,
  PlusCircleOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
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
    {
      id: 1,
      name: "Mr. X",
      relation: "Family",
      phone: "(017******90)",
      email: "",
      address: "",
    },
    {
      id: 2,
      name: "Mr. Y",
      relation: "Friend",
      phone: "(015******76)",
      email: "",
      address: "",
    },
    {
      id: 3,
      name: "Mr. Z",
      relation: "Family",
      phone: "(018******01)",
      email: "",
      address: "",
    },
  ]);

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
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

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    relation: "",
    address: "",
  });

  // Function to handle changes in the new user details
  const handleNewUserChange = (field, value) => {
    setNewUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  // Function to handle adding a new user
  const handleAddUser = () => {
    if (
      newUser.name &&
      newUser.email &&
      newUser.phone &&
      newUser.relation &&
      newUser.address &&
      users.length < 3
    ) {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id: prevUsers.length + 1,
          name: newUser.name,
          relation: newUser.relation,
          phone: newUser.phone,
          email: newUser.email,
          address: newUser.address,
        },
      ]);
      // Reset the new user details
      setNewUser({
        name: "",
        email: "",
        phone: "",
        relation: "",
        address: "",
      });
      // Close the modal
      setIsModalOpen3(false);
    }
  };

  const isMaxUsersReached = users.length === 3;

  // for Add account
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const showModal3 = () => {
    setIsModalOpen3(true);
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
                  <p className="Profile-Title-Text3">
                    /{user.relation} ({user.phone})
                  </p>
                </div>
                <DeleteOutlined
                  className="Profile-Title-Icon"
                  onClick={() => handleDeleteUser(user.id)}
                />
              </div>
            ))}

            <p style={{ color: isMaxUsersReached ? "red" : "green", marginBottom:'0px' }}>
              You can add max 3 people
            </p>

            <button className="Profile-Right-AddButton" onClick={showModal3}>
              <PlusCircleOutlined className="Profile-Title-Icon2" />
              <p className="Profile-Title-Text2">Add another account</p>
            </button>

            <button className="Profile-Right-AddButton2" onClick={showModal2}>
              <DeleteOutlined className="Profile-Title-Icon2" />
              <p className="Profile-Title-Text2">Remove of all accounts</p>
            </button>
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
          onOk={handleAddUser} // Call handleAddUser when OK button is clicked
          onCancel={handleCancel3}
          footer={[
            <Button key="back" onClick={handleCancel3}>
              Back
            </Button>,
            <Button key="submit" type="primary" onClick={handleAddUser}>
              Submit
            </Button>,
          ]}
        >
          <div>
            <Input
              id="nameInput"
              type="text"
              size="large"
              placeholder="Name"
              prefix={<UserOutlined />}
              value={newUser.name}
              onChange={(e) => handleNewUserChange("name", e.target.value)}
            />
            <br />
            <br />

            <Input
              size="large"
              placeholder="Email"
              prefix={<MailOutlined />}
              value={newUser.email}
              onChange={(e) => handleNewUserChange("email", e.target.value)}
            />
            <br />
            <br />
            <Input
              size="large"
              placeholder="Phone"
              prefix={<PhoneOutlined />}
              value={newUser.phone}
              onChange={(e) => handleNewUserChange("phone", e.target.value)}
            />
            <br />
            <br />
            <select
              className="Profile-Select"
              id="relationInput"
              value={newUser.relation}
              onChange={(e) => handleNewUserChange("relation", e.target.value)}
            >
              <option value="">Relationship</option>
              <option value="Husband">Husband</option>
              <option value="Wife">Wife</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Other's Family">Other's Family</option>
              <option value="Friend">Friend</option>
              <option value="Other's">Other's</option>
            </select>
            <br />
            <br />
            <Input
              size="large"
              placeholder="Address"
              prefix={<EnvironmentOutlined />}
              value={newUser.address}
              onChange={(e) => handleNewUserChange("address", e.target.value)}
            />
          </div>
        </Modal>
      </box>
    </div>
  );
}
