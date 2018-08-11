import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../css/Gallery.css';
import images from '../js/images'

const styles = theme => ({
    imgStyle:{
        backgroundSize:'cover'
    },
});

class Gallery extends Component {

    onImageHover(img){
        img.target.src = images.find((image) =>
            image.title === img.target.alt
        ).hoverImage;;
    }

    onImageOut(img){
        img.target.src = images.find((image) =>
            image.title === img.target.alt
        ).img;
    }

    onImageClick(img){
        window.location.href = '/gallery/' + img.target.alt;
    }

    render() {
        const { classes } = this.props;
        return (
            <div align="center" style={{background:'#eeeeee'}}>
                <br/>
                <div className="theTitle">
                    העבודות שלי
                </div>
                <br/>
                <GridList spacing={20} cellHeight={230} className="gridList" cols={window.innerWidth > 500 ? 4 : 1}>
                    {images.filter((tile) => tile.category).map(tile => (
                        <GridListTile key={tile.img}>
                            <img style={{cursor:'pointer'}} className={classes.imgStyle} src={tile.img} alt={tile.title} onMouseOver={(event) => this.onImageHover(event)} onMouseOut={(event) => this.onImageOut(event)} onClick={(event) => this.onImageClick(event)} />
                        </GridListTile>
                    ))}
                </GridList>
                <br/>
            </div>
        );
    }
}

Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);