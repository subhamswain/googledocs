import React from "react";
import "./SideBar.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const SideBar = () => {
    return (
        <div className="sideBar">
            <img
                className="pointer"
                width="25"
                height="25"
                src="https://img.icons8.com/color/48/google-calendar--v2.png"
                alt="google-calendar--v2"
            />
            <img
                className="pointer"
                width="25"
                height="25"
                src="https://img.icons8.com/color/48/google-keep.png"
                alt="google-keep"
            />
            <img
                className="pointer"
                width="25"
                height="25"
                src="https://img.icons8.com/color/48/google-contacts.png"
                alt="google-contacts"
            />
            <img
                className="pointer"
                width="25"
                height="25"
                src="https://img.icons8.com/fluency/48/google-maps-new.png"
                alt="google-maps-new"
            />
            <AddOutlinedIcon sx={{ cursor: "pointer" }}></AddOutlinedIcon>
        </div>
    );
};

export default SideBar;
