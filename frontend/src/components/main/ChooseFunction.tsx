import {Grid, Paper, Typography} from "@mui/material";
import {mainButtons} from "../../data/mainData";
import {useNavigate} from "react-router-dom";

export default function ChooseFunction(){

    const nav = useNavigate()

    return(
        <Grid container spacing={10} justifyContent={'center'} >
            {mainButtons.map(button =>
                <Grid item xs={5} >
                    <Paper variant="elevation" elevation={2} style={{ height:'100%',padding:'1rem 0', margin:'0 -1rem '}} onClick={()=>nav(button.link)}>
                        <Typography variant={'h2'}>
                            {button.function}
                        </Typography>
                    </Paper>
                </Grid>
            )}
        </Grid>
    )
}