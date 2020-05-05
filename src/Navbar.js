import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";
import styles from "./styles/NavbarStyles";

const content = {
  english: {
    search: "Search"
  },
  french: {
    search: "Chercher"
  },
  spanish: {
    search: "Buscar"
  }
};

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode, toggleDarkMode } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>🔻</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              APP TITLE
            </Typography>
            <Switch onChange={toggleDarkMode} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
