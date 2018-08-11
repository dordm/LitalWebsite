import React from 'react';
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

function CategoryGallery(props) {

    const { classes } = props;
    console.log(props);
    return (
        <div align="center" style={{background:'#eeeeee'}}>
            <br/>
            <div className="theTitle">
                {props.match.params.category}
            </div>
            <br/>
            <GridList spacing={20} cellHeight={230} className="gridList" cols={window.innerWidth > 500 ? 4 : 1}>
                {images.filter((tile) => tile.title === props.match.params.category).map(tile => (
                    <GridListTile key={tile.img}>
                        <img className={classes.imgStyle} src={tile.img} alt={tile.title}/>
                    </GridListTile>
                ))}
            </GridList>
            <br/>
        </div>
    );
}

CategoryGallery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryGallery);