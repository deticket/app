import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Wallet from '@material-ui/icons/AccountBalanceWallet';
import CreditCard from '@material-ui/icons/CreditCard';
import Logout from '@material-ui/icons/ExitToApp';

import styled from 'styled-components';

const StyledCell = styled.div`
    font-size: 4em;
    text-align: center;
    color: white;
    width: 50vw;
    height: 10em;
    background: #231A59;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3.1em;
`;

const StyledHeader = styled.header`
    justify-content: flex-start; 
    margin: auto;
    display: flex;
    height: 12em;
`;

const HeaderButton = styled(Button)`
    && {
    color: white;
    border-color: transparent;
    width: 40%;
    background-color: transparent;
    }
`;

const WalletIcon = styled(Wallet)`
    && {
    color: white;
    border-color: transparent;
    background-color: transparent;
    height: 100%;
    width: 20%;
    }
`;

const CreditCardIcon = styled(CreditCard)`
    && {
    color: white;
    border-color: transparent;
    background-color: transparent;
    height: 100%;
    width: 20%;
    height: 0,
    }
`;

const LogoutIcon = styled(Logout)`
    && {
    color: white;
    border-color: transparent;
    background-color: transparent;
    height: 100%;
    width: 20%;
    }
`;

const HeaderIcon = styled(MenuIcon)`
    && {
    color: white;
    margin-right: 25%; 
    height: 100%;
    width: 50%;
    }
`;

const StyledDrawer = styled(Drawer)`
    & > div {
    width: 50%;
    background: #231A59;
    }
`;

const StyledDivider = styled(Divider)`
    && {
    background: white;
    height: 0.3em;
    }
`;

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const sideNav = (
    <div>
      <Link href="/wallet">
        <StyledCell>
          <WalletIcon />
            Wallet
        </StyledCell>
      </Link>

      <Link href="/marketplace">
        <StyledCell>
          <CreditCardIcon />
            Market
        </StyledCell>
      </Link>
      <StyledDivider />
      <Link href="/">
        <StyledCell>
          <LogoutIcon />
            Logout
        </StyledCell>
      </Link>
    </div>
  );


  return (
    <div>
      <StyledHeader>
        <HeaderButton onClick={() => setIsOpen(true)}>
          <HeaderIcon />
        </HeaderButton>
      </StyledHeader>
      <StyledDrawer open={isOpen} onClick={() => setIsOpen(false)} onClose={() => setIsOpen(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
        >
          {sideNav}
        </div>
      </StyledDrawer>
    </div>
  );
}

export default SideNav;
