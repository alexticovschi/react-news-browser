import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  list: {
    width: 250,
    textAlign: 'center'
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 2,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 2,
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    }
  },
});


class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    value: 0,
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleTabsChange = (event, value) => {
    this.setState({ value });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const sideList = (
      <div className={classes.list}>
        <MenuList>
            <MenuItem component={Link} to="/">Home</MenuItem>
            <Divider/>
            <MenuItem component={Link} to="/news-sources">News Sources</MenuItem>
            <Divider/>
            <MenuItem component={Link} to="/entertainment">Entertainment</MenuItem>
            <Divider/>
            <MenuItem component={Link} to="/general">General</MenuItem>
            <Divider/>
            <MenuItem component={Link} to="/sports">Sports</MenuItem>
            <Divider/>
            <MenuItem component={Link} to="/technology">Technology</MenuItem>
            <Divider/>
        </MenuList>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >

                <MenuIcon onClick={this.toggleDrawer('left', true)}/>
            </IconButton>
            
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
            >
                {sideList}
            </div>
            </Drawer>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              NewsBrowser
            </Typography>
            <Tabs
              value={value}
              onChange={this.handleTabsChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab className="tab-link" component={Link} to="/" classes={{ root: classes.tabRoot }} label="Home" />
              <Tab className="tab-link" component={Link} to="/news-sources" classes={{ root: classes.tabRoot }} label="News Sources" />
              {/* <Tab classes={{ root: classes.tabRoot }} label="Entertainment" />
              <Tab classes={{ root: classes.tabRoot }} label="General" />
              <Tab classes={{ root: classes.tabRoot }} label="Sports" />
              <Tab classes={{ root: classes.tabRoot }} label="Technology" /> */}
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
