import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';
import CryptoJS from 'crypto-js';



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
  },
  margin: {
    margin: theme.spacing(1),
    
  },
  crypttext : {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width :'100%'
  }
}));


export default function PartCrypto() {
    const classes = useStyles();

    const [key, setKey] = useState('4F8ABBD4EE68E655F42146E87D6E4022');
    const [iv, setIv] =useState('32C863027BDDB0C8');
    const [text, setText] =useState('');
    const [result, setResult] = useState('');

    const onChangeKey = useCallback( e => {
      setKey(e.target.value);
    },[key])
    
    const onChangeIV = useCallback( e => {
      setIv(e.target.value);
    },[iv])

    const onChangeText = useCallback( e => {
      setText(e.target.value);
    },[text])


    const encryptClick = useCallback( e => { 
      const _key = CryptoJS.enc.Utf8.parse(key);
      const _iv = CryptoJS.enc.Utf8.parse(iv);

      const cipherData = CryptoJS.AES.encrypt(text,_key,{
        iv :_iv,
        mode :CryptoJS.mode.CBC,
        padding : CryptoJS.pad.Pkcs7,
        format :CryptoJS.format.OpenSSL
      }).toString();
      
      setResult(cipherData);
    })

    const decryptClick = useCallback( e => {
      const _key = CryptoJS.enc.Utf8.parse(key);
      const _iv = CryptoJS.enc.Utf8.parse(iv);

      const ecryptdata = CryptoJS.AES.decrypt(text, _key, {
        iv :_iv,
        mode :CryptoJS.mode.CBC,
        padding : CryptoJS.pad.Pkcs7,
        format :CryptoJS.format.OpenSSL
      }).toString(CryptoJS.enc.Utf8)
      console.log(result)
      console.log(ecryptdata.toString(CryptoJS.enc.Utf8));
      setResult(ecryptdata);
    })


    return (
      <div className="part-crypto-secion"> 
        <form className={classes.crypttext} noValidate autoComplete="off">
          <TextField style={{ margin: 17 }} id="outlined-basic" label="key"  placeholder={key} variant="outlined" onChange={onChangeKey}/>
          <TextField style={{ margin: 17 }} id="outlined-basic" label="iv" placeholder={iv} variant="outlined" onChange={onChangeIV}/>
        </form>
        <div className={classes.root}>
            <TextField
            id="standard-full-width"
            label="input Text"
            style={{ margin: 20 }}
            placeholder=""
            helperText="?????????????????? ???????????? ????????? ???????????????"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={onChangeText}
            /> 
        </div>
        <div className="crypro-button">
            <Button
            onClick={encryptClick}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<VpnKeyIcon/>}
            >
            Encrypt
            </Button>
            <Button
            onClick={decryptClick}
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
            placeholder={result}
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