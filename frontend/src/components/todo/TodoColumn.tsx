import {Grid} from "@mui/material";
import {todoData} from "../../data/tododummyData";
import ToDoCard from "./ToDoCard";

export default function TodoColumn(props:{status:string}){
    return(
        <Grid container direction={"column"} style={{maxHeight:'70vh',overflow: 'scroll'}} wrap={'nowrap'}>
            {
                todoData
                    .filter(todo => todo.status===props.status)
                    .map(todo => <Grid item xs={12} xl={12} alignItems={'center'} justifyContent={'center'}>
                        <ToDoCard infos={todo}/>
                    </Grid>)
            }
        </Grid>
    )
}