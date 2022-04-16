import {Grid} from "@mui/material";
import Heading from "../common/Heading";
import ChooseFunction from "../components/main/ChooseFunction";

export default function MainPage(){
    return(
        <Grid container direction={'column'}>
            <Grid item xs={8}>
                <Heading/>
            </Grid>
            <Grid item xs={10}>
                <ChooseFunction/>
            </Grid>


        </Grid>
    )
}