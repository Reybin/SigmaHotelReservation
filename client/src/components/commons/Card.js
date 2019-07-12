import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    marginBottom: 20
  },
});



const CommonCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    id: '',
    name: ' ',
    urlImage: ' ',
    entityName: ' '
  });
  function handleClickOpen(id) {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.item.imageUrl}
          title={props.item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary" onClick={props.handleEdit} >
          EDITAR
        </Button>
        <Button size="small" variant="outlined" color="secondary" >
          ELIMINAR
        </Button>
      </CardActions>
    </Card>
  );
}

export default CommonCard;