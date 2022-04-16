import {Button, Grid, Paper, Typography} from "@mui/material";
import {mainButtons} from "../../data/mainData";

export default function ChooseFunction(){
    return(
        <Grid container spacing={10} justifyContent={'center'} >
            {mainButtons.map(button =>
                <Grid item xs={5} >
                    <Paper variant="elevation" elevation={2} style={{ height:'100%',padding:'1rem 0', margin:'0 -1rem '}}>
                        <Typography variant={'h2'}>
                            {button.function}
                        </Typography>
                    </Paper>
                </Grid>
            )}
        </Grid>
    )
}