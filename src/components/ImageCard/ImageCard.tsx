import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {DomainPhotoType} from "../../redux/appReducer";
import {CardContent, Typography} from "@material-ui/core";
import s from "./ImageCard.module.css";

type MediaCardPropsTYpe = {
    picture: DomainPhotoType
    description: string
    remotePhoto: (id: string, picture: DomainPhotoType) => void
}

export function ImageCard(props: MediaCardPropsTYpe) {
    return (
        <Card className={s.root} style={{background: "#e4ea73"}}>
            <CardActionArea>
                <CardMedia className={s.media} image={props.picture.url}/>
                <CardContent className={s.itemsText} style={{background: "#e4ea73"}}>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {props.picture.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={s.button}>
                <Button variant="outlined" size="small" color="default"
                        onClick={() => props.remotePhoto(props.picture.id, props.picture)}>
                    {props.description}
                </Button>
            </CardActions>
        </Card>
    );
}
