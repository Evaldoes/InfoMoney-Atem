import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Grid,
  MenuItem,
  Menu,
  IconButton,
  Autocomplete,
  debounce,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {
  BadgeNotification,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './styles';
import { ReactComponent as Diamond } from '../../assets/images/icon-diamante.svg';
import { useCoin } from '../../hooks/useCoin';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { searchCoin, searchCoins } = useCoin();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<any | null>(null);
  const pages = [
    'Cryptocurrencies',
    'Exchanges',
    'NFT',
    'CrypTown',
    'Portfolio',
    'Watchlist',
    'Products',
  ];

  const pagesMobile = [
    'Cryptocurrencies',
    'Exchanges',
    'NFT',
    'CrypTown',
    'Portfolio',
    'Watchlist',
    'Products',
    'Log In',
    'Sign Up',
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDebouncedSearch = (coin: string): any => {
    setSearchValue(coin);
    searchCoin(coin);
  };

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
  ];

  return (
    <AppBar style={{ background: '#fff' }} elevation={0} position="static">
      <Grid container justifyContent="center">
        <Grid item xl={10} xs={10} justifyContent="center">
          <Toolbar
            className="flex"
            disableGutters
            style={{ background: '#fff' }}
          >
            <img src={logo} alt="Logo" />

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: '#000' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pagesMobile.map(page => (
                  <MenuItem key={`${page}page`} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              display="flex"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'none', lg: 'flex', xl: 'flex' },
              }}
            >
              {pages.map((page, idx) => (
                <Button
                  key={`${page}idx`}
                  sx={{
                    my: 2,
                    color: '#000',
                    display: 'block',
                    backgroundColor: '#fff',
                    fontSize: 16,
                    fontWeight: 600,
                    textTransform: 'none',
                  }}
                >
                  <BadgeNotification
                    className="MuiBadge-badge"
                    color="primary"
                    variant="dot"
                    invisible={idx !== 3}
                  >
                    {page}
                  </BadgeNotification>
                </Button>
              ))}
            </Box>

            <Box
              display="flex"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'none', xl: 'flex' },
              }}
            >
              <Button
                sx={{
                  background: '#fff',
                  borderRadius: 2,
                  boxShadow: 'none',
                  marginRight: { xl: 1 },
                }}
                variant="contained"
                startIcon={<Diamond />}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    paddingRight: 1,
                    color: '#000',
                    textTransform: 'none',
                  }}
                >
                  Log In
                </Typography>
              </Button>
              <Button
                sx={{ background: '#3C67F7', borderRadius: 2 }}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    textTransform: 'none',
                  }}
                >
                  Sign UP
                </Typography>
              </Button>

              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  console.log(newValue);
                  navigate(`/${newValue.id}`);
                  // if (typeof newValue === 'string') {
                  //   setValue({
                  //     title: newValue,
                  //   });
                  // } else if (newValue && newValue.inputValue) {
                  //   // Create a new value from the user input
                  //   setValue({
                  //     title: newValue.inputValue,
                  //   });
                  // } else {
                  //   setValue(newValue);
                  // }
                }}
                // filterOptions={(options, params) => {
                //   const filtered = filter(options, params);

                //   const { inputValue } = params;
                //   // Suggest the creation of a new value
                //   const isExisting = options.some((option) => inputValue === option.title);
                //   if (inputValue !== '' && !isExisting) {
                //     filtered.push({
                //       inputValue,
                //       title: `Add "${inputValue}"`,
                //     });
                //   }

                //   return filtered;
                // }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={searchCoins}
                getOptionLabel={option => {
                  // // Value selected with enter, right from the input
                  // if (typeof option === 'string') {
                  //   return option;
                  // }
                  // // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // // Regular option
                  return option.name;
                }}
                renderOption={(props, option) => (
                  <li key={option.id} {...props}>
                    <img
                      style={{ marginRight: 10 }}
                      src={option.thumb}
                      alt=""
                    />
                    {option.name}
                  </li>
                )}
                sx={{ width: 300 }}
                freeSolo
                renderInput={params => (
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: '#A7B1C2' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      {...params}
                      placeholder="Buscar"
                      onChange={e => {
                        debounce(handleDebouncedSearch(e.target.value), 5000);
                        // console.log(e.target.value);
                      }}
                      // onE
                      // value={searchValue}
                      // inputProps={{ 'aria-label': 'search' }}
                      // label="Free solo with text demo"
                    />
                    {/* <StyledInputBase {...params} /> */}
                  </Search>
                )}
              />
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
