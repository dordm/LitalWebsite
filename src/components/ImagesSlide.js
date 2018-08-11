import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import '../css/ImageSlide.css';
import images from '../js/images'

const styles = theme => ({

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
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

class ImagesSlide extends Component {
    componentDidMount(){
        var direction = true;

        this.interval = window.setInterval(() => {
            var grid = document.getElementsByTagName('ul')[0];
            var maxScrollLeft = grid.scrollWidth - grid.clientWidth;
            var offsetLeft = 2;
            if(Math.ceil(grid.scrollLeft) >= maxScrollLeft)
                direction = false;
            if(grid.scrollLeft <= 0)
                direction = true;
            if(direction)
                grid.scrollLeft += offsetLeft;
            else
                grid.scrollLeft -= offsetLeft;
        }, 10)
    }

    componentWillUnmount(){
        window.clearInterval(this.interval);
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="root">
                <GridList cellHeight={230} className={classes.gridList} cols={window.innerWidth > 500 ? 3 : 1}>
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
            </div>
        );
    }
}

ImagesSlide.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImagesSlide);