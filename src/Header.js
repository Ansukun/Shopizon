import React from "react";
import "./Header.css"
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import WcIcon from '@material-ui/icons/Wc';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import WeekendIcon from '@material-ui/icons/Weekend';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { auth } from "./firebase";
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

    return (
        <div className = "header">
          <Link to = "/">
          <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
           alt = "amazon"/>
          </Link>
            <div className = "Menu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        \<MenuIcon style = {{
          color:"white",
        }}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         <Link to = "/Mobile" style = {{
          color:"black"
        }}>
        <MenuItem onClick={handleClose}><PhoneAndroidIcon/></MenuItem>
        </Link>
        <Link to = "/Fashion" style = {{
          color:"black"
        }}>
        <MenuItem onClick={handleClose}><WcIcon/></MenuItem>
        </Link>
        <Link to = "/Groceries" style = {{
          color:"black"
        }}>
        <MenuItem onClick={handleClose}><RestaurantIcon/></MenuItem>
        </Link>
        <Link to = "/Sports"style = {{
          color:"black" 
        }}>
        <MenuItem onClick={handleClose}><SportsEsportsIcon/></MenuItem>
        </Link>
        <MenuItem onClick={handleClose}><WeekendIcon/></MenuItem>
        <Link to = "/Electronics"style = {{
          color:"black" 
        }}>

        <MenuItem onClick={handleClose}><LiveTvIcon/></MenuItem>
        </Link>
      </Menu>
            </div>
          <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
        <div  className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
            <span onClick={handleAuthenticaton}  className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
      
        </Link>
          
        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
       

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to = "/checkout">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
        </Link>
          
     
      </div>
    </div>
  );
}

export default Header;
