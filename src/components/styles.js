import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
     height: '0',
     paddingTop: '56.25%', // 16:9
  },
   viewimg: {
     position: 'relative',
     width: "100%",
     top:'0',
     right:' 0',
     bottom: '0',
     left:' 0',
     objectFit: 'cover'
   },
  
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '-5px'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));