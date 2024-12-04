import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import { Routes, Route, Link } from "react-router-dom";
import IA_profile from './IA_profile';
import KPIs from './KPIs'
import Personal_profile from './Personal_profile'
import Project_profile from './Project_profile'
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import LineAxisRoundedIcon from '@mui/icons-material/LineAxisRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded"




const DSidebar = () => {
  return (
    <div style={{display: "flex", height: "100vh", fontFamily: 'Figtree, sans-serif'}}>

        <Sidebar className="bg-green-500">

            <Menu className=''>

            <MenuItem className='mb-10 mt-5' icon={<MenuRoundedIcon />}>
            <h2 className=' text-yellow-400'>VIVAMETRICS</h2>
            </MenuItem>

            <MenuItem 
            icon = {<GridViewRoundedIcon/>}
            component={<Link to="dashboard"  className="link" />}
            >Dashboard</MenuItem>

            <MenuItem 
            icon = {<AssignmentRoundedIcon/>}
            component={<Link to="project_profile"  className="link" />}
            >Project Profile</MenuItem>


            <MenuItem 
            icon = {<WorkRoundedIcon/>}
            component={<Link to="ia_profile" className="link" />}
            >IA Profile</MenuItem>

            <MenuItem icon = {<FlagRoundedIcon/>}
            component={<Link to="kpis" className='link '/>}
            >KPIs</MenuItem>

            <SubMenu label="Analytics" icon = {<AnalyticsRoundedIcon/>}>
              <MenuItem icon = {<BarChartRoundedIcon/>}>BarGraph</MenuItem>
              <MenuItem icon = {<LineAxisRoundedIcon/>}>LineGraph</MenuItem>
              <MenuItem icon = {<PieChartRoundedIcon/>}>PieChart</MenuItem>
              <MenuItem icon = {<LocationOnRoundedIcon/>}>AreaCharts</MenuItem>
            </SubMenu>

            <SubMenu label="Settings" icon = {<SettingsApplicationsRoundedIcon/>}>
              <MenuItem icon = {<NotificationsRoundedIcon/>}
              component={<Link to="donor/sidebar/profile" className="link"/>}
              >Notifications</MenuItem>
              <MenuItem icon = {<AccountCircleRoundedIcon/>}>Personal Profile</MenuItem>
            </SubMenu>

            <MenuItem icon = {<LogoutRoundedIcon/>}>Logout</MenuItem>

            </Menu>
        </Sidebar>

        {/* <section>
        <Routes>
         
        </Routes>
      </section> */}

        <h1 className='text-yellow-400  text-4xl m-12 m-m-auto '>WELCOME TO VIVAMETRICS</h1>
    </div>
  )
}

export default DSidebar

