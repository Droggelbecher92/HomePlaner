import {Fab, Grid, Typography} from "@mui/material";
import TodoColumn from "./TodoColumn";
import AddIcon from "@mui/icons-material/Add";

export default function TodoGallery(){
    return(<>
        <Grid container justifyContent={'space-around'}>
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