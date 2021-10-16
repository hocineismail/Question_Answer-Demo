import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  CardHeader,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  borderRadius: "19px",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmProcess(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { children } = props;
  return (
    <div>
      <Button
        fullWidth
        style={{ marginTop: 35, minWidth: 100 }}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Save
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <CardHeader title={"Enter Your Password for continue updating"} />
              <CardActionArea>
                <div>
                  <Button size="small">Learn More</Button>
                </div>
              </CardActionArea>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
