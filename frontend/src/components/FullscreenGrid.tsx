import {Grid} from "@mui/material";
import {Outlet} from "@mui/icons-material";

export default function FullscreenGrid(){
    return(
        <Grid container xs={12} direction={"column"}>
            <Outlet/>
        </Grid>
    )
}