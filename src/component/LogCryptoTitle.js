import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: '50%',
      maxWidth: 500,
    },
  });

  
export default function LogCryptoTitle() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        {/* <Typography variant="h4"  gutterBottom>
          전체로그 복호화
        </Typography> */}
      </div>
  );
}