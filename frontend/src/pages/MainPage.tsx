import {Grid} from "@mui/material";
import Heading from "../common/Heading";
import ChooseFunction from "../components/main/ChooseFunction";

export default function MainPage(){
    return(
        <Grid container direction={'column'}>
            <Grid item xs={8}>
                <Heading name={'SugarHome'}/>
            </Grid>
            <Grid item xs={12}>
                <ChooseFunction/>
            </Grid>
        </Grid>
    )
}