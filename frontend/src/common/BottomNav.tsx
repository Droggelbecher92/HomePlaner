import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PersonIcon from '@mui/icons-material/Person';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function BottomNav(){

    const nav = useNavigate()

    return(
        <BottomNavigation style={{marginTop:'5px'}} >
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
                onClick={()=> nav('/')}
            />
            <BottomNavigationAction
                label="New"
                value="new"
                icon={<FiberNewIcon />}
            />
            <BottomNavigationAction
                label="User"
                value="user"
                icon={<PersonIcon />}
            />
            <BottomNavigationAction
                label="Logout"
                value="logout"
                icon={<LogoutSharpIcon />}
            />
        </BottomNavigation>
    )
}