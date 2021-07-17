import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IdleTimer from "react-idle-timer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            maxWidth: 300,
            backgroundColor: "#282c34",
            textAlign: "center",
            color: "#ccc",
            boxShadow: theme.shadows[10],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IdleTimer timeout={60000} onIdle={handleOpen} onActive={handleClose}/>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">App is not active</h2>
                        <p id="transition-modal-description">
                            We are waiting for you!)
                        </p>
                        <q>Enjoy the moment</q>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
