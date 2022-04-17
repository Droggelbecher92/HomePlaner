import {Card, CardContent, Typography} from "@mui/material";
import {TodoItem} from "../../interfaces/todo";

export default function ToDoCard(props:{infos:TodoItem}){
    return(
        <Card sx={{margin:'0.1rem', width:'90%',marginLeft:'5%'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.infos.task}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.infos.assigned}
                </Typography>
                <Typography variant="body2">
                    {props.infos.description}
                </Typography>
            </CardContent>
        </Card>
    )
}