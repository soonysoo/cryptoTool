import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width : 300
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  }
}));


export default function PartCrypto() {
    const classes = useStyles();
  
    return (
      <div className="part-crypto-secion"> 
        <div className={classes.root}>
            <TextField
            id="standard-full-width"
            label="input Text"
            style={{ margin: 20 }}
            placeholder=""
            helperText="암호화하거나 복호화할 내용을 입력하세요"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            /> 
        </div>
        <div className="crypro-button">
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<VpnKeyIcon/>}
            >
            Encrypt
            </Button>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<LockOpenIcon></LockOpenIcon>}
            >
                Decrypt
            </Button>
        </div>
        <div className={classes.root}>
            <TextField
            id="filled-full-width"
            label="result"
            style={{ margin: 20 }}
            placeholder=""
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
            />   
        </div>
      </div>
    );
  }