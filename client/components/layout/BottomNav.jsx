import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Link from 'next/link';
import Router from 'next/router'



export default function BottomNav({ initialRoute, userID }) {
  const [value, setValue] = React.useState(initialRoute);

  function handleChange(event, newValue) {
    setValue(newValue);
    console.log("v ", userID);
    Router.push(`/${newValue}?user=${userID}`);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} style={{ backgroundColor: "white", position: "sticky", width: "100%", bottom: "0" }}>
      <BottomNavigationAction label="Browse" value="marketplace" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Wallet" value="wallet" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Settings" value="settings" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}