import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/AccountBalanceWallet';
import SettingsIcon from '@material-ui/icons/Settings';

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
    <BottomNavigation value={value} onChange={handleChange} style={{ backgroundColor: "white", position: "fixed", width: "100%", bottom: "0" }}>
      <BottomNavigationAction label="Browse" value="marketplace" icon={<SearchIcon />} />
      <BottomNavigationAction label="Wallet" value="wallet" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}