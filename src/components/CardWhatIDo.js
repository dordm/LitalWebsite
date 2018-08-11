import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import '../css/CardWhatIDo.css';

const styles = ({
    details: {
        display: 'flex',
        flexDirection: 'column',
        height:window.innerWidth > 500 ? 230 : 180
    },
    content: {
        flex: '1 0 auto',
        marginTop:window.innerWidth > 500 ?12 : 55,
        marginRight:window.innerWidth > 500 ?50 : 0,
    },
});

function CardWhatIDo(props) {
    const { classes } = props;


    return (
        <div>
            <Card className="cardAbout">
                <CardMedia style={{height:window.innerWidth > 500 ? 230 : 180, width:'inherit', position:'absolute', zIndex:1}} image={window.innerWidth > 500 ? require('../images/cardWhatIDoBack.jpg') : require('../images/cardWhatIDoMobileBack.jpg')}/>
                <Grid style={{zIndex:10}} item xs={12} md={12} direction="column" container justify="flex-start" alignItems="flex-start">
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography className="fontStyling">אני מתמחה במיתוג עסקי, ברושורים, עיצוב לוגו, ניירת משרדית</Typography>
                            <Typography className="fontStyling">כרטיסי ביקור, פולדרים, מודעות, הזמנות לחתונה ועוד</Typography>
                        </CardContent>
                    </div>
                </Grid>
                <div className="title3">
                    ההתמחות שלי
                </div>
            </Card>
        </div>
    );
}

CardWhatIDo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardWhatIDo);