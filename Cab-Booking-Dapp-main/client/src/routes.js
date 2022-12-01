// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import DriverProfile from "views/DriverProfile/DriverProfile.js";
import ProductList from "views/allDrivers/drivers.js"
import Maps from "views/Maps/Maps.js";
import { DriveEta } from "@material-ui/icons";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import RideShareSteps from "views/RideShareSteps/RideShareSteps";

// core components/views for RTL layout

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/steps",
    name: "Get a Ride",
    icon: FormatListNumberedIcon,
    component: RideShareSteps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin" 
  },
  {
    path: "/driver",
    name: "Driver Profile",
    icon: DriveEta,
    component: DriverProfile,
    layout: "/admin"
  },
  
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  
  {
    path: "/alldrivers",
    name: "All Drivers List",
    icon: LocationOn,
    component: ProductList,
    layout: "/admin"
  },
  


];

export default dashboardRoutes;
