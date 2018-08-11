import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../css/ImageSlide.css';
import images from '../js/images'

const styles = theme => ({

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },


    imgStyle:{
        backgroundSize:'cover'
    },
});

class ImagesSlide extends Component {

    constructor(props){
        super(props);
        this.state={
            imagesHover: false
        }
    }

    componentDidMount(){
        var direction = true;

        this.interval = window.setInterval(() => {
            var grid = document.getElementsByTagName('ul')[0];
            var maxScrollLeft = grid.scrollWidth - grid.clientWidth;
            var offsetLeft;
            if(this.state.imagesHover)
                offsetLeft = 0;
            else
                offsetLeft = 2;
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

    onImageHover(img){
        img.target.src = images.find((image) =>
            image.title === img.target.alt && image.category
        ).hoverImage;;
        this.setState({
            imagesHover:true
        })
    }

    onImageOut(img){
        img.target.src = images.find((image) =>
             image.title === img.target.alt && image.category
        ).img;
        this.setState({
            imagesHover:false
        })
    }

    onImageClick(img){
        window.location.href = '/gallery/' + img.target.alt;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="root">
                <GridList cellHeight={230} className={classes.gridList} cols={window.innerWidth > 500 ? 3 : 1}>
                    {images.filter((tile) => tile.category).map(tile => (
                        <GridListTile key={tile.img}>
                            <img className={classes.imgStyle} style={{cursor:'pointer'}} src={tile.img} alt={tile.title} onMouseOver={(event) => this.onImageHover(event)} onMouseOut={(event) => this.onImageOut(event)} onClick={(event) => this.onImageClick(event)}/>
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