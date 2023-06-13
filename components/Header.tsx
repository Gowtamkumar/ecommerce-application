"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Input,
  Drawer,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  BellIcon,
  PowerIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { BsFillPersonFill, BsFillGridFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";

const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "About us",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Press",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Legal",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Products",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Icons",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "UI Kits",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Open Source",
    description: "List of all our open-source projects, it's all free.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 ">
          <div className={` p-5`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Blocks
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          Account
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openCat, setOpenCat] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <>
      <div className="flex w-full max-w-7xl px-8 mx-auto md:px-3 my-3 align-item justify-between text-gray-600">
        <div className="basis-1/4">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Logo
          </Typography>
        </div>
        <div className="relative flex gap-2 basis-1/2">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[88px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1">
            Search
          </Button>
        </div>
        <div className="basis-1/4  text-right">
          <IconButton variant="text" color="blue-gray" className="me-2">
            <AiOutlineShoppingCart
              onClick={() => openDrawerRight()}
              className="h-10 w-10 bg-blue-gray-100 rounded-full p-2"
            />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            {/* <BsFillPersonFill className="h-10 w-10 bg-blue-gray-100 rounded-full p-2" /> */}
            <Menu>
              <MenuHandler >
                <Avatar
                  // width={100}
                  // height={100}
                  alt="candice wu"
                  className="bg-blue-gray-100 cursor-pointer rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex items-center gap-2">
                  <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                  <Typography variant="small" className="font-normal">
                    My Profile
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
                  <Typography variant="small" className="font-normal">
                    Edit Profile
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
                  <Typography variant="small" className="font-normal">
                    Inbox
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
                  <Typography variant="small" className="font-normal">
                    Help
                  </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 ">
                  <PowerIcon strokeWidth={2} className="h-4 w-4" />
                  <Typography variant="small" className="font-normal">
                    Sign Out
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </IconButton>
        </div>
      </div>

      <Navbar className="sticky inset-0 z-10  max-w-full rounded-none">
        <div className="flex w-full max-w-7xl px-8 mx-auto md:px-3 align-item justify-between text-gray-600">
          {/* category */}
          <Menu>
            <MenuHandler>
              <Button
                size="sm"
                variant="text"
                className="bg-blue-gray-100 flex items-center gap-3 text-base font-normal capitalize tracking-normal w-52"
              >
                <BsFillGridFill className="h-3.5 w-3.5 transition-transform " />
                <span>Categories</span>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform float-right  ${
                    openCat ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>

            <MenuList className="w-60">
              <MenuItem className="flex align-item">
                <CubeTransparentIcon className="h-[18px] w-[18px] me-2" />
                <span>Menu Item 66</span>
              </MenuItem>
              <MenuItem className="flex align-item">
                <CubeTransparentIcon className="h-[18px] w-[18px] me-2" />
                <span>Menu Item 66</span>
              </MenuItem>

              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="flex align-item">
                    <CubeTransparentIcon className="h-[18px] w-[18px]" />
                    <span>Nested menu</span>
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className="h-3.5 w-3.5 transition-transform justify-self-end"
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <div className="w-60 h-100 mt-0">
                    <MenuItem>Nested Item 1</MenuItem>
                    <MenuItem>Nested Item 2</MenuItem>
                    <MenuItem>Nested Item 3</MenuItem>
                    <MenuItem>Nested Item 3</MenuItem>
                    <MenuItem>Nested Item 3</MenuItem>
                    <MenuItem>Nested Item 3</MenuItem>
                  </div>
                </MenuList>
              </Menu>

              <MenuItem className="flex align-item">
                <CubeTransparentIcon className="h-[18px] w-[18px] me-2" />
                <span>Menu Item 66</span>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* category */}

          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="hidden gap-2 lg:flex">
            <Button variant="text" size="sm" color="blue-gray">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Sign Up
            </Button>
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Sign In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign Up
            </Button>
          </div>
        </Collapse>
      </Navbar>

      <Drawer
        placement="right"
        open={openRight}
        onClose={() => closeDrawerRight()}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Drawer on Right
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer>
    </>
  );
}
