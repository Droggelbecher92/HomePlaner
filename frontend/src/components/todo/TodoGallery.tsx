import {Grid, Typography} from "@mui/material";
import TodoColumn from "./TodoColumn";

export default function TodoGallery(){
    return(<>
        <Grid container justifyContent={'space-around'}marginBottom={2} marginTop={2}>
            <Grid item xs={4} style={{height:'80%'}}>
                <Grid item>
                    <Typography variant={'h3'}>OPEN</Typography>
                </Grid>
                <TodoColumn status={'OPEN'}/>
            </Grid>
            <Grid item xs={4}>
                <Grid item>
                    <Typography variant={'h3'}>WORKING</Typography>
                </Grid>
                <TodoColumn status={'IN_PROGRESS'}/>
            </Grid>
            <Grid item xs={4}>
                <Grid item height={'fit-content'}>
                    <Typography variant={'h3'}>DONE</Typography>
                </Grid>
                <TodoColumn status={'DONE'}/>
            </Grid>
        </Grid>
    </>
    )
}