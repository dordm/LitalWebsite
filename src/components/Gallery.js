import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import '../css/Gallery.css';
import images from '../js/images'



const styles = theme => ({
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    imgStyle:{
        backgroundSize:'cover'
    },
});

class Gallery extends Component {
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
                    {images.map(tile => (
                        <GridListTile key={tile.img}>
                            <img className={classes.imgStyle} src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />
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