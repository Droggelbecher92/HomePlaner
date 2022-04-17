import {Card, CardActions, CardContent, Collapse, IconButton, IconButtonProps, styled, Typography} from "@mui/material";
import {TodoItem} from "../../interfaces/todo";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}


export default function ToDoCard(props:{infos:TodoItem}){

    const [expanded, setExpanded] = useState(false)

    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.short,
        }),
    }));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card sx={{margin:'0.1rem', width:'90%',marginLeft:'5%'}} variant={'outlined'}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.infos.task}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <ArrowBackIosIcon sx={{margin:'0 2rem 0 0'}}/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <ArrowForwardIosIcon sx={{margin:'0  0 0 2rem'}}/>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Beschreibung:</Typography>
                    <Typography paragraph>
                        {props.infos.description}
                    </Typography>
                    <Typography paragraph>Wer erledigt das:</Typography>
                    <Typography paragraph>
                        {props.infos.assigned}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}