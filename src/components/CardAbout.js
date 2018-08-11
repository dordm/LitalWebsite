import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../css/CardAbout.css';

const styles = ({

    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        marginRight:window.innerWidth > 500 ?150 : 0,
        marginTop:window.innerWidth > 500 ?12 : 50,
    },
    cover: {
        width: window.innerWidth > 500 ? 230 : 120,
        height: window.innerWidth > 500 ? 230 : 120,
    },

});

function CardAbout(props) {
    const { classes } = props;


    return (
        <div>
            <Card className="cardAbout">
                <Grid  item xs={8} md={8} direction="column" container justify="flex-start" alignItems="flex-start">
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography className="content">מעצבת גראפית בוגרת קורס בניית אתרים</Typography>
                            <Typography style={{marginRight: window.innerWidth > 500 ? 130 : 0}} className="content">ועיצוב גרפי ב - John Bryce</Typography>
                            <Typography style={{marginRight:50}} className="content">בעלת רקע בתחום ה - UX</Typography>
                            <div className="content" style={{textAlign:'center', display:'flex'}}>
                                <img className="imgIcon" src={require('../images/V lital.png')} alt="vi"/>
                                אחראית
                                <img className="imgIcon" src={require('../images/origami.png')} alt="origami"/>
                                יצירתית
                                <img className="imgIcon" src={require('../images/V lital.png')} alt="vi"/>
                                מקצועית
                            </div>
                        </CardContent>
                    </div>
                </Grid>
                <Grid item xs={4} md={4}  direction="column" container justify="center" alignItems="flex-end">
                    <CardMedia
                        className={classes.cover}
                        image={require('../images/lital.png')}
                        title="Live from space album cover"
                    />
                </Grid>
                <div className="title2">
                    ליטל ברני
                    <br/>
                    Graphic Designer
                </div>
            </Card>
        </div>
    );
}

CardAbout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardAbout);