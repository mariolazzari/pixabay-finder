import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
// mui icons
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleClose = e => {};

  render() {
    const { classes, images } = this.props;
    const open = this.state;

    let imageListContent;

    if (images) {
      imageListContent = (
        <GridList cellHeight={160} cols={3}>
          {images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt="not found" />
              <GridListTileBar
                title={img.tags}
                subtitle={
                  <span>
                    by: <strong>{img.user} </strong>
                  </span>
                }
                actionIcon={
                  <IconButton>
                    <ZoomInIcon className={classes.icon} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
      // spinner
    }

    // dialog actions
    const actions = <Button label={"Close"} onClick={this.handleClose} />;

    return <Fragment>{imageListContent}</Fragment>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default withStyles(styles)(ImageResults);
