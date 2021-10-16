import {
  Avatar,
  Button,
  Container,
  Input,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetch_user,
  updateAvatar,
  updateCover,
} from "../../redux/actions/userActions";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CameraEnhanceTwoToneIcon from "@mui/icons-material/CameraEnhanceTwoTone";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import PanoramaTwoToneIcon from "@mui/icons-material/PanoramaTwoTone";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import Cropper from "react-easy-crop";

import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import AvatarProfile from "./avatarProfile";
import CropperAvatar from "./CropperAvatar/CropperAvatar";
import {
  follow_user,
  unfollow_user,
} from "../../redux/actions/followerActions";

var firebaseConfig = {
  apiKey: "AIzaSyAw6F9U9ndbcFVdbiM3rIptmATbXFte-Jc",
  authDomain: "queansw-3ec85.firebaseapp.com",
  projectId: "queansw-3ec85",
  storageBucket: "queansw-3ec85.appspot.com",
  messagingSenderId: "242379458335",
  appId: "1:242379458335:web:f011aa5fdf2ff78758522a",
  measurementId: "G-ZZG6MYMTDH",
};

// Get a reference to the storage service, which is used to create references in your storage bucket

const CONTAINER_HEIGHT = 300;
const firebaseApp = initializeApp(firebaseConfig);
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function SectionsInformation() {
  const storage = getStorage();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [size, setsize] = useState({
    width: 0,
    height: 0,
  });

  const onCropComplete = React.useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  function getMeta(url) {
    const img = new Image();
    img.addEventListener("load", function () {
      console.log(this.naturalWidth + " " + this.naturalHeight);
      var elem = document.getElementById("myDiv");
      if (elem) {
        var rect = elem.getBoundingClientRect();
        const z = rect.width / this.naturalHeight;
        // alert( z)
        setZoom(z);
        setsize({
          width: rect.width,
          height: rect.height,
        });
      }
    });
    img.src = url;
  }
  React.useEffect(() => {
    getMeta(
      "https://images.unsplash.com/photo-1633114128729-0a8dc13406b9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    );
  }, []);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },

    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducers);
  console.log(user);
  React.useEffect(() => {
    dispatch(fetch_user({ id: getParameterByName("id") }));
  }, []);
  const [file, setFile] = useState(null);
  const [url, setURL] = useState(
    "https://images.unsplash.com/photo-1633164442172-dc4147f21954?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
  );
  const uploadAvatar = (e) => {
    console.log(e.target.files[0]);
    handleUpload(e.target.files[0], "avatar");
  };
  function handleChange(e, type) {
    // console.log(e.target.files[0])
    // setFile(e.target.files[0]);
    handleUpload(e.target.files[0], type);
  }

  React.useEffect(() => {
    console.log(file);
  }, [file]);

  const handleUpload = (e, type) => {};

  const onFollowUser = () => {
    dispatch(follow_user({ user_id: getParameterByName("id") }));
  };
  const onUnFollowUser = () => {
    dispatch(unfollow_user({ user_id: getParameterByName("id") }));
  };
  return (
    <div className="profile-header" id="myDiv">
      <div
        className="profile-img-cover"
        style={{
          backgroundImage: `url("${
            user.cover
              ? user.cover
              : "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          }")`,
        }}
      >
        <Container>
          {/* <Cropper
          image={'https://images.unsplash.com/photo-1633114128729-0a8dc13406b9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'}
          crop={crop}
          zoom={zoom} 
           
          cropSize={{
            height: Number(size.height),
            width: Number(size.width) 
          }}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          
        /> */}
          <div className={"profile-avatar"}>
            <AvatarProfile
              avatar={user.avatar}
              fullname={user.fullname}
              uploadAvatar={uploadAvatar}
            />
            {/* <label htmlFor="icon-button-file" style={{position: 'absolute', bottom: -30, left: 15}}>      
          <Input accept="image/*" onChange={(e) => handleChange(e, 'avatar')} id="icon-button-file" type="file" style={{display: 'none'}}/>
          <IconButton  color="primary" aria-label="upload picture" component="span">
            <CameraEnhanceTwoToneIcon style={{zIndex: 3,fontSize: 35}}/> 
          </IconButton>
        </label> */}

            {/* <h4 className="profile-fullname">{user.fullname}</h4>
           <span>{user.domain}</span> */}
            <div style={{ float: "right" }}>
              {
                localStorage.getItem("user_id") === getParameterByName("id") ? (
                  <>
                    <label htmlFor="icon-button-cover">
                      <Input
                        accept="image/*"
                        onChange={(e) => handleChange(e, "cover")}
                        id="icon-button-cover"
                        type="file"
                        style={{ display: "none" }}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <AddPhotoAlternateTwoToneIcon />
                      </IconButton>
                    </label>
                    {/* <IconButton style={{color: 'white'}}> 
                <label htmlFor="icon-button-file">
                <input type="file" onChange={handleChange}style={{display: 'none'}} />
                 <IconButton color="primary" aria-label="upload picture" component="span">
                   <PhotoCamera />
                 </IconButton>
                </label>
                </IconButton> */}
                    {/* <IconButton
                      style={{ color: "white" }}
                      onClick={(e) => handleUpload(e, "cover")}
                    >
                      <AddPhotoAlternateTwoToneIcon />
                    </IconButton> */}
                  </>
                ) : (
                  <>
                    {/* {user.is_followed ? (
                      <Button
                        style={{ backgroundColor: "#4fc3f7" }}
                        onClick={() => onUnFollowUser()}
                      >
                        <CloseIcon /> Unfollow
                      </Button>
                    ) : (
                      <Button
                        style={{ backgroundColor: "#4fc3f7" }}
                        onClick={() => onFollowUser()}
                      >
                        <AddIcon /> Follow
                      </Button>
                    )} */}
                  </>
                )

                //   <Button
                //   style={{  backgroundColor: '#4fc3f7'}}
                //   onClick={() => onFollowUser()}>
                //    {user.is_followed ?
                //   <>
                //   <CloseIcon />
                //   Unffolow
                //  </>: <> <AddIcon />
                //   Follow</>
                //   }
                //   </Button>
              }
            </div>
          </div>
          <CropperAvatar
            // onDisplay={onDisplay}
            // onCrapAvatar={onCrapAvatar}
            avatar={user.avatar}
          />
        </Container>
      </div>
    </div>
  );
}
