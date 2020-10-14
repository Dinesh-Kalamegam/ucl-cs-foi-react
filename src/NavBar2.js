import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 3
    }

  },
  headerOptions: {
    display: "flex",
    marginLeft:"auto",
    
  }

}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: process.env.PUBLIC_URL + `/`
    },
    {
      menuTitle: "Level 6",
      pageURL: process.env.PUBLIC_URL + `/level6`
    },
    {
      menuTitle: "Level 7",
      pageURL: process.env.PUBLIC_URL + `/level7`
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            UCL CS Module Marks
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
              <div className={classes.headerOptions}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(process.env.PUBLIC_URL + `/`)}
                >
                  HOME
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(process.env.PUBLIC_URL + `/level6`)}
                >
                  Level6
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(process.env.PUBLIC_URL + `/level7`)}
                >
                  Level7
                </Button>

              </div>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);