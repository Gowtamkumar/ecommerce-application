"use client";
import React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TemporaryDrawer from "./front-end/CartDrawer";
import { Badge, Drawer, Link } from "@mui/material";
import { homeRoute } from "@/routes";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [state, setState] = React.useState(false);

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

  interface menuItemMap {
    title: string;
    path: string;
    icon: string;
    // children: [
    //   {
    //     title: string;
    //     path: string;
    //     icon: string;
    //   }
    // ];
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                display: { xs: "block", md: "none" },
              }}
            >
              {homeRoute.map((page: any, idx: any) => (
                <MenuItem key={idx} itemRef={page.path}>
                  <Typography textAlign="center">
                    <Link href={page.path}> ss{page.title}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            className="justify-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {homeRoute.map((page: any, idx: any) => (
              <MenuItem
                key={idx}
                itemRef={page.path}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography textAlign="center">
                  <Link href={page.path} className="text-white md:text-white">
                    {page.title}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Box>
          {/* cart option */}
          <Box sx={{ flexGrow: 0, rowGap: 10 }}>
            <Tooltip title="Open settings">
              <IconButton
                aria-label="cart"
                onClick={() => setState(!state)}
                sx={{ p: 0 }}
              >
                <Badge badgeContent={4} color="success">
                  {/* <MailIcon color="action" /> */}
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Drawer
              anchor="right"
              sx={{ width: 500 }}
              open={state}
              onClose={() => setState(!state)}
            >
              <Typography textAlign="center">
                asdfasdfasdf adsfasdfasdf 
              </Typography>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              onClose={() => handleCloseUserMenu()}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu()}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <nav className="relative bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    //   <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
    //     <Link href="#" className="flex items-center">
    //       <Image
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         alt="Flowbite Logo"
    //         height={50}
    //         width={50}
    //       />
    //     </Link>

    //     <button
    //       data-collapse-toggle="navbar-dropdown"
    //       type="button"
    //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-dropdown"
    //       aria-expanded="false"
    //       onClick={() => setMobileMenu(!mobileMenu)}
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clipRule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div
    //       className={`${mobileMenu ? "" : "hidden"}  w-full md:block md:w-auto`}
    //       id="navbar-dropdown"
    //     >
    //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         {homeRoute.map((item, idx) => {
    //           if (item.children) {
    //             return (
    //               <li key={idx}>
    //                 <button
    //                   id="dropdownNavbarLink"
    //                   data-dropdown-toggle="dropdownNavbar"
    //                   onClick={() => setMenuOpen(!isMenuOpen)}
    //                   className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    //                 >
    //                   {item.title}
    //                   <svg
    //                     className="w-5 h-5 ml-1"
    //                     aria-hidden="true"
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                       clipRule="evenodd"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //                 {isMenuOpen && (
    //                   <div
    //                     id="dropdownNavbar"
    //                     className="z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    //                   >
    //                     <ul
    //                       className="py-2 text-sm text-gray-700 dark:text-gray-400"
    //                       aria-labelledby="dropdownLargeButton"
    //                     >
    //                       {item.children.map((item, idx) => {
    //                         return (
    //                           <li key={idx}>
    //                             <Link
    //                               href={`${item.path}`}
    //                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                             >
    //                               {item.title}
    //                             </Link>
    //                           </li>
    //                         );
    //                       })}
    //                     </ul>
    //                   </div>
    //                 )}
    //               </li>
    //             );
    //           } else {
    //             return (
    //               <li key={idx}>
    //                 <Link
    //                   href={`

    //                   ${item.path}`}
    //                   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
    //                   aria-current="page"
    //                 >
    //                   {item.title}
    //                 </Link>
    //               </li>
    //             );
    //           }
    //         })}

    //         <li>
    //           <Link
    //             href="/login"
    //             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Login
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/signup"
    //             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Signup
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="fixed right-0 bottom-0 m-4">
    //     <Darkmode />
    //   </div>
    // </nav>
  );
}
