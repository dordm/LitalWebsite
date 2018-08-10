import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// import { create } from 'jss';
// import rtl from 'jss-rtl';
// import JssProvider from 'react-jss/lib/JssProvider';
// import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
//
// // Configure JSS
// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
//
// // Custom Material-UI class name generator.
// const generateClassName = createGenerateClassName();

const styles = ({
    card: {
        display: window.innerWidth > 500 ? 'flex' : '',
        height:window.innerWidth > 500 ? 400 : 600,
        width: window.innerWidth > 500 ? '70%' : '90%',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 20px 5px grey',
        border: '1px solid black',
        flexGrow: 1,
    },
    cover: {
        width: window.innerWidth > 500 ? 250 : 120,
        height: window.innerWidth > 500 ? 250 : 120,
    },
    title:{
        position: 'absolute',
        top: window.innerWidth > 500 ? 170 : 140,
        backgroundColor: '#ff0099',
        height: window.innerWidth > 500 ? 60 : 50,
        width:window.innerWidth > 500 ? 150 : 130,
        right:window.innerWidth > 500 ? '15%' : '5%',
        marginRight: window.innerWidth > 500 ? -30 : -10,
        fontSize: window.innerWidth > 500 ? 35 : 30,
        textAlign:'right',
        color: 'white',
        paddingTop: window.innerWidth > 500 ? 15 : 12,
        paddingRight:15,
        boxShadow: '0 0 20px 2px grey',
    },
    textField:{
        width: window.innerWidth > 1500 ? 300 : 200,
        textAlign:'right'
    },
    vertLine:{
        borderRight: window.innerWidth > 500 ? '0.1px solid lightgrey' : '',
        borderTop: window.innerWidth < 500 ? '0.1px solid lightgrey' : '',
        padding: '0.5em',
        marginTop:20,
        marginBottom:20
    }
});

class CardContact extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    {/*<div  className={classes.details}>*/}
                        {/*<CardContent className={classes.content}>*/}
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Grid item xs={12} item md={6} container direction="column" justify="center" alignItems="center">
                                <TextField
                                    id="Name"
                                    label="שם"
                                    placeholder="שם"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="Email"
                                    label="אימייל"
                                    placeholder="אימייל"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="Msg"
                                    label="הודעה"
                                    placeholder="הודעה"
                                    multiline
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} item md={6} className={classes.vertLine} direction="column" container justify="center" alignItems="center">
                            </Grid>
                            {/*<Typography variant="headline">Live From Space</Typography>*/}
                            {/*<Typography variant="subheading" color="textSecondary">*/}
                            {/*Mac Miller*/}
                            {/*</Typography>*/}
                        {/*</CardContent>*/}
                    {/*</div>*/}
                </Card>
                <div className={classes.title}>
                    צור קשר
                </div>
            </div>
        );
    }

}

CardContact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardContact);