import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";


const ResponsiveAppBar = (props: any) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

    const navigate = useNavigate();
    function handleClickHome() {
        navigate("/home");
    }

    function handleClickAbout() {
        navigate("/history");
    }

    function handleClickRafle() {
        navigate("/rafle");
    }
    function handleClickLogout() {
        props.setAuth(false)
        navigate("/login");
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        🍀
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        onClick={handleClickHome}
                    >
                        <Button sx={{ my: 2, color: 'inherit', display: 'block', fontWeight: 700 }}>
                            GOOD LUCK
                        </Button>
                    </Typography>

                    {/*INICIO menu responsivo*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={handleClickHome}>HOME</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={handleClickRafle}>SORTEIOS</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={handleClickAbout}>HISTÓRICO</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        🍀
                    </Typography>

                    {/*Fim menu responsivo*/}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleClickRafle}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            SORTEIOS
                        </Button>
                        <Button
                            onClick={handleClickAbout}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            HISTÓRICO
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Account</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Dashboard</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={handleClickLogout}>Logout</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
