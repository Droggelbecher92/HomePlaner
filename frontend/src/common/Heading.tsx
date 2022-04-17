import {Typography} from "@mui/material";

export default function Heading(props:{name:string} ){
    return(
        <Typography variant={'h1'} m={3}>{props.name}</Typography>
    )
}