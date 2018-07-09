import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 450,
    minWidth: 350,
    margin: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};


function MediaCard(props) {
  const { classes } = props;
  return (
    <div  style={{ display: 'inline-block'}}>
      <Grid container spacing={32}>
        <Grid item xs={6}>
          <Card className={classes.card} raised='true' centered>
            <CardMedia
              className={classes.media}
              image="https://www.krisdigital.com/images/blog/Reactjs-logo.svg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                React App
              </Typography>
              <Typography component="p">
                This is my awesomeness React App using React and stuff
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color='primary' variant='raised'>
                Share
              </Button>
              <Button size="small" color='secondary' variant='raised'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);