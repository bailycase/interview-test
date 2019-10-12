import { createStyles,  makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
    createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '100vh'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
  }),
);

export default useStyles