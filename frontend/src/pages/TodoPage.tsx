import {Grid} from "@mui/material";
import Heading from "../common/Heading";
import {Outlet} from "react-router-dom";

export default function TodoPage(){
    return(
        <Grid container direction={'column'}>
            <Grid item xs={8}>
                <Heading name={'ToDo'}/>
            </Grid>
            <Grid item xs={10}>
                <Outlet/>
            </Grid>
        </Grid>
    )
}