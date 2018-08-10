import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = ({
    card: {
        display: 'flex',
        width: window.innerWidth > 500 ? '50%' : '90%',
        boxShadow: '10px 5px 5px grey',
        backgroundColor: '#ffd9cc'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: window.innerWidth > 500 ? 200 : 120,
        height: window.innerWidth > 500 ? 200 : 120,
    },
});

function CardWhatIDo(props) {
    const { classes } = props;


    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">Live From Space</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Mac Miller
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={require('../images/lital.png')}
                    title="Live from space album cover"
                />
            </Card>
        </div>
    );
}

CardWhatIDo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardWhatIDo);