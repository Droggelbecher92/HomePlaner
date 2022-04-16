import {Grid} from "@mui/material";
import LoginRegisterForm from "../components/LoginRegisterForm";
import Heading from "../common/Heading";

export default function LoginPage(){
    return(
        <Grid container direction={'column'}>
            <Grid item xs={8}>
                <Heading/>
            </Grid>
            <Grid item >
                <LoginRegisterForm/>
            </Grid>

        </Grid>
    )
}