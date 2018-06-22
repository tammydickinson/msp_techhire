import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
 
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  list: {
    textAlign: 'center',
    color: 'black'
  },
  'contentShift-left': {
        justifyContent: 'center',
      },
})

class Nav extends React.Component {
  state = {
    open: true,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}

          </IconButton>
        </div>
        <div className={classes.list}>
        <Divider />
        <List>  
              Logo Goes Here
            </List>
            <Divider />
        <List>  
          <Button size="small">
              <Link to="/user" style={{color: 'black', textDecoration: 'none'}}>
              User Home
            </Link>
            </Button>
            </List>
            <Divider />
            <List>
            <Button size="small">
            <Link to="/search" style={{color: 'black', textDecoration: 'none'}}>
            Search Page
          </Link>
          </Button>
          </List>
          <Divider />
          <List>
          <Button size="small">
          <Link to="/summary" style={{color: 'black', textDecoration: 'none'}}>
            Summary Page
          </Link>
          </Button>
          </List>
          <Divider />
          <List>
          <Button size="small">
          <Link to="/editpartner" style={{color: 'black', textDecoration: 'none'}}>
            Partner Page
          </Link>
          </Button>
            </List>
            </div>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
              </Typography>
            </Toolbar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}>
          </main>
          {after}
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Nav);
   

