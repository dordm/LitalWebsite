import React, { Component } from 'react';
import CardContact from './CardContact'

const styles={
    card:{
        background: '#eeeeee',
    },
    pinkDiv:{
        height: window.innerWidth > 500 ? 70 : 50,
        width: window.innerWidth > 500 ? '50%' : '70%',
        background: '#ffcccc',
        boxShadow: '0 20px 20px 10px grey',
    },
    contactCard:{
        height:500,
        width: window.innerWidth > 500 ? '70%' : '90%',
    },
    paddingTop:{
        paddingTop:64
    },
    greyDiv:{
        background: '#666666',
        height:window.innerWidth > 500 ? 70 : 50
    }
}

class Contact extends Component {
    render() {
        return (
            <div align="center" dir="rtl" style={styles.card}>
                <div style={{...styles.pinkDiv, ...styles.paddingTop}}></div>
                <CardContact/>
                <div style={styles.pinkDiv}></div>
                <br/>
                <div style={styles.greyDiv}></div>
            </div>
        );
    }
}

export default Contact;