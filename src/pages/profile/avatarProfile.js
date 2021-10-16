import { Avatar, IconButton, Input, makeStyles } from "@material-ui/core";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";

import CameraEnhanceTwoToneIcon from "@mui/icons-material/CameraEnhanceTwoTone";

export default function AvatarProfile(props) {
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
  const { avatar, fullname, domain, uploadAvatar } = props;

  const onChangePicter = (e) => {
    uploadAvatar(e);
  };
  return (
    <div
      className="profile-avatar-section"
      style={{
        position: "relative",
        height: "30vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          bottom: 30,
          display: "grid",
          gridTemplateColumns: "120px auto",
        }}
      >
        <div>
          <Avatar
            style={{ border: "5px solid white" }}
            alt={`avatar ${fullname}`}
            src={avatar}
            className={classes.large}
          />
        </div>
        <h4 className="profile-fullname">{fullname}</h4>
        <span>{domain}</span>
      </div>

      <label
        htmlFor="icon-button-cover"
        style={{
          position: "absolute",
          zIndex: 3,
          bottom: 30,
          left: 50,
          background: "gray",
          borderRadius: 50,
        }}
      >
        <Input
          accept="image/*"
          onChange={(e) => onChangePicter(e)}
          id="icon-button-cover"
          type="file"
          style={{ display: "none" }}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          style={{ padding: 5 }}
        >
          <CameraEnhanceTwoToneIcon />
        </IconButton>
      </label>
    </div>
  );
}
