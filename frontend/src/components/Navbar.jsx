import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from 'react-scroll';
import ProgressBar from '../components/ProgressBar';  

const drawerWidth = 240;
const navItems = ["Home", "Project", "Skill", "Journey","Activity", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Yash Patel
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: selectedItem === item && item !== "Contact" ? "orange" : "inherit",
              }}
              onClick={() => handleItemClick(item)}
            >
              <ScrollLink
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleItemClick(item)}
              >
                <ListItemText primary={item} />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const lastItemIndex = navItems.length - 1;

  return (
    <Box sx={{ display: "flex" }}>
      <ProgressBar />
      <AppBar
        component="nav"
        sx={{
          display: "flex", justifyContent: "center",
          height: "80px",
          color: "white",
          background: "rgba(0,0,0,0.08)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              marginLeft: "25px",
              display: "flex",
            }}
          >
            <div
              style={{
                borderRadius: "30px",
                border: "2px solid white",
                width: "35px",
                height: "35px",
                marginRight: "18px",
              }}
            ></div>
            <span style={{ fontFamily: `"Exo 2", sans-serif` }}>Yash Patel</span>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <ScrollLink
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleItemClick(item)}
              >
                <Button
                  style={{ fontFamily: `"Exo 2", sans-serif`, letterSpacing: 3, fontWeight: 500 }}
                  sx={{
                    marginRight: "40px",
                    border: index === lastItemIndex ? "1.5px solid rgb(88, 250, 0)" : "none",
                    color:"white",
                     
                    "&:hover": {
                      backgroundColor: index === lastItemIndex ? "rgb(88, 250, 0)" : "none",
                      color: index === lastItemIndex ? "black" : "#C0C0C0",
                    },
                  }}
                >
                  {item}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        sx={{ marginTop: 11 }}></Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
