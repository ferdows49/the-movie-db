"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ListItemText from "@mui/material/ListItemText";
import TmdbIcon from "../../assets/icons/icon.svg";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [movieAnchorEl, setMovieAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [tvAnchorEl, setTVAnchorEl] = React.useState<null | HTMLElement>(null);
  const [peopleAnchorEl, setPeopleAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [xsMovieOpen, setXsMovieOpen] = React.useState<boolean>(false);
  const [xsTvOpen, setXsTvOpen] = React.useState<boolean>(false);
  const [xsPeopleOpen, setXsPeopleOpen] = React.useState<boolean>(false);

  const movieOpen = Boolean(movieAnchorEl);
  const tvOpen = Boolean(tvAnchorEl);
  const peopleOpen = Boolean(peopleAnchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
    type: string
  ) => {
    if (type === "movie") {
      setMovieAnchorEl(event.currentTarget);
    } else if (type === "tv") {
      setTVAnchorEl(event.currentTarget);
    } else {
      setPeopleAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setMovieAnchorEl(null);
    setTVAnchorEl(null);
    setPeopleAnchorEl(null);
  };

  const handleXsClick = (type: string) => {
    if (type === "movie") {
      setXsMovieOpen(!xsMovieOpen);
    } else if (type === "tv") {
      setXsTvOpen(!xsTvOpen);
    } else {
      setXsPeopleOpen(!xsPeopleOpen);
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#032541" }}>
      {/* <Container maxWidth="xl" className="sm:px-6 md:px-10"> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                "& .MuiPaper-root": {
                  bgcolor: "#1A3851",
                },
              }}
            >
              <Box sx={{ bgcolor: "#1A3851", color: "#FFFFFF" }}>
                <List
                  sx={{
                    width: "100%",
                    minWidth: 280,
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={() => handleXsClick("movie")}>
                    <ListItemText primary="Movies" />
                    {xsMovieOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={xsMovieOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/movies/popular">Popular</Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/movies/now-playing">Now Playing</Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/movies/upcoming">Upcoming</Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/movies/top-rated">Top Rated</Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>

                <List
                  sx={{
                    width: "100%",
                    minWidth: 280,
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={() => handleXsClick("tv")}>
                    <ListItemText primary="TV Shows" />
                    {xsTvOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={xsTvOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/tv-shows/popular">Popular</Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/tv-shows/airing-today">Airing Today</Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/tv-shows/on-the-air">On TV</Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/tv-shows/top-rated">Top Rated</Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>

                <List
                  sx={{
                    width: "100%",
                    minWidth: 280,
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={() => handleXsClick("people")}>
                    <ListItemText primary="People" />
                    {xsPeopleOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={xsPeopleOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link href="/person">Popular People</Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Box>
            </Menu>
          </Box>

          <Box
            sx={{
              // display: { xs: "none", md: "flex" },
              paddingRight: "20px",
              cursor: "pointer",
            }}
          >
            <Link href="/">
              <Image src={TmdbIcon} alt="" width={154} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box>
              <Button
                id="basic-button"
                aria-controls={movieOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={movieOpen ? "true" : undefined}
                onClick={(e) => handleClick(e, "movie")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Movies
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={movieAnchorEl}
                open={movieOpen}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/movies/popular">Popular</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/movies/now-playing">Now Playing</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/movies/upcoming">Upcoming</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/movies/top-rated">Top Rated</Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box>
              <Button
                id="basic-button"
                aria-controls={tvOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={tvOpen ? "true" : undefined}
                onClick={(e) => handleClick(e, "tv")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                TV Shows
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={tvAnchorEl}
                open={tvOpen}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/tv-shows/popular">Popular</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/tv-shows/airing-today">Airing Today</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/tv-shows/on-the-air">On TV</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/tv-shows/top-rated">Top Rated</Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box>
              <Button
                id="basic-button"
                aria-controls={peopleOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={peopleOpen ? "true" : undefined}
                onClick={(e) => handleClick(e, "people")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                People
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={peopleAnchorEl}
                open={peopleOpen}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/person">Popular People</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
                lg: "flex",
              },
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onKeyPress={(event: any) => {
                  if (event.key === "Enter") {
                    const searchValue = event.target.value.trim();
                    if (searchValue) {
                      router.push(`/search/${event?.target?.value}`);
                    }
                  }
                }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0, marginLeft: "20px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>H</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
