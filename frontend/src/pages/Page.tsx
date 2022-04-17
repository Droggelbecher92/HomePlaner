import {Grid} from "@mui/material";
import Heading from "../common/Heading";
import {Outlet} from "react-router-dom";

export default function Page(){
    return(
        <Grid container direction={'column'} xs={12}>
            <Grid item xs={8}>
                <Heading name={'SugarHome'}/>
            </Grid>
            <Grid item xs={12}>
                <Outlet/>
            </Grid>
        </Grid>
    )
}