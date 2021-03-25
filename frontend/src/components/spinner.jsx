import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  top: {
    color: '#1a90ff',
    animationDuration: '450ms',
    marginLeft : '-40px'
  },
  circle: { strokeLinecap: 'round' }
}));

function FacebookCircularProgress() {
  const classes = useStylesFacebook()
  return (
    <div className={classes.root}>
      <CircularProgress variant="determinate" className={classes.bottom} size={40} thickness={4} value={100} />
      <CircularProgress variant="indeterminate" disableShrink className={classes.top} classes={{ circle: classes.circle }} size={40} thickness={4} />
    </div>
  );
}
export default function Spinner() {
  return <FacebookCircularProgress />
}
