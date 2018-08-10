import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
        background: 'linear-gradient(45deg, #e29cb1 30%, #ffcccc 70%)',
        top: 0,
    },
    flex:{
        flexGrow: 1,
    },
    btnsColors:{
        color: 'white',
        alignItems: 'center'
    },
    btn:{
        fontSize:18
    }
};

function Navbar(props){
    const { classes } = props;
    return (
        <div>
            <AppBar position="fixed" classes={{root: classes.root}}>
                <Toolbar classes={{root: classes.btnsColors}}>
                    <Typography dir='ltr' variant="title" color="inherit" className={classes.flex}>
                        Lital Design
                    </Typography>
                    <div dir='rtl'>
                        <Button className={classes.btn} color='inherit' href='/'>בית
                        </Button>
                        <Button className={classes.btn} color="inherit" href='/gallery'>גלריה
                        </Button>
                        <Button className={classes.btn} color="inherit" href='/contact'>צור קשר
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);