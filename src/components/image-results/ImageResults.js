import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
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

  // show dialog
  handleOpen = img => this.setState({ open: true, currentImg: img });

  // close dialog
  handleClose = () => this.setState({ open: false });

  render() {
    const { classes, images } = this.props;
    const { open, currentImg } = this.state;

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
                  <IconButton
                    onClick={() => this.handleOpen(img.largeImageURL)}
                  >
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

    return (
      <Fragment>
        {imageListContent}
        <Dialog open={open}>
          <DialogTitle>Image</DialogTitle>
          <Fragment>
            <img src={currentImg} alt="not found" style={{ width: "100%" }} />
          </Fragment>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default withStyles(styles)(ImageResults);
