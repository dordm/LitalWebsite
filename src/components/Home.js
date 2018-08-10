import React, { Component } from 'react';
import CardAbout from './CardAbout'
import CardWhatIDo from './CardWhatIDo'
import ImagesSlideGrid from './ImagesSlide'

function HomeImage(props){
    return (
        <div style={{height: props.windowHeight, width: '100%'}}>
            <img alt='title' style={{width:'inherit', height: 'inherit'}} src={require('../images/homeStamp.jpg')} />
        </div>
    )
}

function AboutMe(){
    return(
        <div>
            <br /><br />
            <CardAbout />
            <br /><br />
        </div>
    )
}

function WhatIDo(){
    return(
        <div>
            <br /><br />
            <CardWhatIDo />
            <br /><br />
        </div>
    )
}

function ImagesSlide(){
    return(
        <div>
            <br /><br />
            <ImagesSlideGrid />
            <br /><br />
        </div>
    )
}

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            width: window.innerWidth
        }

    }

    render() {
        return (
            <div  align="center" dir="rtl" style={styles.card}>
                <HomeImage windowHeight={this.state.width > 500 ? '60vh' : '40vh'}/>
                <AboutMe />
                <WhatIDo />
                <ImagesSlide />
            </div>
        );
    }
}

const styles={
    card:{
        background: '#eeeeee',
    }
}

export default Home;