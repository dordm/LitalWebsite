import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RTL from './RTL';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import '../css/CardContact.css';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomizedSnackbar, {showSnackbar} from './CustomizedSnackbar'

const theme = createMuiTheme({
    direction: 'rtl',
});

const styles = ({
    textField:{
        width: window.innerWidth > 500 && window.innerWidth < 1500 ? 250 : 300,
        textAlign:'right',
    },
    line:{
        borderRight: window.innerWidth > 500 ? '0.1px solid lightgrey' : '',
        borderTop: window.innerWidth < 500 ? '0.1px solid lightgrey' : '',
        padding: '0.5em',
        marginTop:20,
        marginBottom:20,
        display:'flex'
    },
    gridLeft:{
        fontSize:35,
        display: 'inherit',
    },
    gridTypo:{
        textAlign: 'left'
    },
    gridIcons:{
        textAlign:'right'
    },
    btnSend: {
        background: 'linear-gradient(45deg, #e29cb1 30%, #ffcccc 70%)',
        '&:hover': {
            background: 'linear-gradient(45deg, #d77592 30%, #ff9999 70%)',
        },
    },
    progress:{
        position: 'absolute',
        top: window.innerWidth > 1500 ? '30%' : '50%',
        right:'49%'
    }

});

function RightGrid(props){
    return(
        <Grid item xs={12} md={6} container direction="column" justify="center" alignItems="center">
            <TextField
                id="Name"
                error={props.isOnSubmit && props.name === '' ? true : false}
                label={ props.isOnSubmit && props.name === '' ? 'שדה חובה' :'שם'}
                placeholder="שם"
                className={props.classes.textField}
                margin="normal"
                value={props.name}
                onChange={(val) => props.onEditName(val)}
                required
            />
            <TextField
                error={props.isOnSubmit && !props.validMail}
                id="Email"
                label={!props.isOnSubmit || props.validMail ? 'אימייל' : 'שגיאה'}
                placeholder="אימייל"
                className={props.classes.textField}
                margin="normal"
                value={props.email}
                onChange={(val) => props.onEditEmail(val)}
                required
            />
            <TextField
                id="Msg"
                error={props.isOnSubmit && props.message === '' ? true : false}
                label={props.isOnSubmit && props.message === '' ? 'שדה חובה' :'הודעה'}
                placeholder="הודעה"
                multiline
                rowsMax={window.innerWidth > 500 ? 7 : 4}
                className={props.classes.textField}
                margin="normal"
                value={props.message}
                onChange={(val) => props.onEditMessage(val)}
                required
            />
        </Grid>
    )
}

function LeftGrid(props){
    return(
        <Grid item xs={12} md={6} className={props.classes.line} direction="column" container justify="center" alignItems="center">
            <Grid className={props.classes.gridLeft} item xs={11} md={8} direction="row" container justify="center" alignItems="center">
                <Grid className={props.classes.gridIcons} item xs={6} md={6} direction="column" container justify="flex-start" alignItems="flex-start">
                    {window.innerWidth > 500 ? <br/> : ''}
                    <IconButton style={{fontSize:35}} onClick={props.onTelClick}>
                        <SvgIcon fontSize={'inherit'} color='action'>
                            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                        </SvgIcon>
                    </IconButton>
                    <br />
                    <SvgIcon style={{marginRight:8}} fontSize={'inherit'} color='action'>
                        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </SvgIcon>
                    <br />
                    <IconButton style={{fontSize:38, marginRight:3}} onClick={props.onFacebookClick}>
                        <SvgIcon fontSize={'inherit'} color='action'>
                            <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                        </SvgIcon>
                    </IconButton>
                </Grid>
                <Grid item xs={6} md={6} className={props.classes.gridTypo} direction="column" container justify="flex-end" alignItems="flex-end">
                    {window.innerWidth > 500 ? <br/> : ''}
                    <Typography className="typo" style={{paddingTop:3, paddingBottom:3}} variant="headline">0502212711</Typography>
                    <br/>
                    <Typography className="typo" style={{paddingTop:3, paddingBottom:3}} variant="headline">lital.berni@gmail.com</Typography>
                    <br/>
                    <Typography className="typo" style={{paddingTop:3, paddingBottom:3}} variant="headline">Lital Berni</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

class CardContact extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            message:'',
            loading:false,
            validMail:false,
            submitClick: false,
        }

        this.onEditEmail = this.onEditEmail.bind(this);
        this.onEditMessage = this.onEditMessage.bind(this);
        this.onEditName = this.onEditName.bind(this);
        this.onSendClick = this.onSendClick.bind(this);
    }

    onTelClick(){
        document.location.href = 'tel:0502212711'
    }

    onFacebookClick(){
        window.open("https://www.facebook.com/lital.berni");
    }

    onEditName(e){
        this.setState({
            name: e.target.value
        })
    }

    onEditMessage(e){
        this.setState({
            message: e.target.value
        })
    }

    onEditEmail(e){
        var emailValidate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!emailValidate.test(e.target.value))
            this.setState({
                email: e.target.value,
                validMail:false
            })
        else
            this.setState({
                email: e.target.value,
                validMail:true
            })
    }

    onSendClick(){
        this.setState({
            loading:true
        })

        var emailError = false, nameError =false, messageError=false;
        emailError = !this.state.validMail;
        if(this.state.name === '')
            nameError = true;
        if(this.state.message === '')
            messageError = true;

        if(!messageError && !nameError && !emailError) {
            var template_params = {
                "from_email": this.state.email,
                "from_name": this.state.name,
                "message": this.state.message
            }
            window.emailjs.send("default_service", "lital_website", template_params)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    this.setState({
                        name: '',
                        email: '',
                        message: '',
                        loading: false,
                        submitClick:false,
                    })
                    showSnackbar('success', 'פנייתך נשלחה בהצלחה');
                }, function (error) {
                    console.log('FAILED...', error);
                    this.setState({
                        loading: false,
                        submitClick:true,
                    })
                    showSnackbar('danger', 'אירעה שגיאה בשליחת הפנייה, אנא נסה שנית');
                });
        }
        else {
            this.setState({
                loading: false,
                submitClick: true,
            })
            showSnackbar('warning', 'חסרים נתונים לשליחת האימייל');
        }
    }




    render() {
        const {classes} = this.props;
        return (
            <RTL>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Card className="card">
                            <br/><br/><br/><br/><br/>
                            <RightGrid classes={classes} onEditName={this.onEditName} onEditEmail={this.onEditEmail} onEditMessage={this.onEditMessage} name={this.state.name} email={this.state.email}
                                       message={this.state.message} validMail={this.state.validMail} isOnSubmit={this.state.submitClick}/>
                            <LeftGrid classes={classes} onTelClick={this.onTelClick} onFacebookClick={this.onFacebookClick}/>
                        </Card>
                        <div className="title">
                            צור קשר
                        </div>
                        <Button
                            onClick={this.onSendClick}
                            size="large"
                            style={{fontSize:40, fontFamily: 'Amatic SC, cursive', lineHeight:1}}
                            variant="contained"
                            color="primary"
                            className={classNames(classes.btnSend, "btnSend")}
                            disabled={this.state.loading}
                        >
                            שלח
                        </Button>
                        {this.state.loading
                            ? <CircularProgress className={classes.progress} color="secondary"/>
                            : ''
                        }
                        <CustomizedSnackbar />
                    </div>
                </MuiThemeProvider>
            </RTL>

        );
    }

}

CardContact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardContact);