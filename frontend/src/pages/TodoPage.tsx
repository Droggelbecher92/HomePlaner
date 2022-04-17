import {Grid} from "@mui/material";
import Heading from "../common/Heading";
import {Outlet} from "react-router-dom";
import BottomNav from "../common/BottomNav";

export default function TodoPage(){
    return(
            <Grid container direction={'column'} style={{width: '100vw'}} xs={14}>
                <Grid item xs={8}>
                    <Heading name={'ToDo'}/>
                </Grid>
                <Grid item xs={10}>
                    <Outlet/>
                </Grid>
                <Grid item xs={12}>
                    <BottomNav/>
                </Grid>
            </Grid>

    )
}