import { Box, Button, Card, CardActionArea, CardContent, Divider, Grid, Tooltip, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useEffect, useRef, useState } from "react"

const useStyle = makeStyles((theme) => ({
    title: {
        color: " #222D57",
        fontFamily: "Inter",
        fontSize: "16px !important",
        fontWeight: 600,
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box',
    },
    subtitle: {
        color: " #222D57",
        fontFamily: "Inter",
        fontSize: "14px !important",
        fontWeight: 400,
    },
    span: {
        color: "#54BAAF",
        fontFamily: " Inter",
        fontSize: " 14px",
        fontWeight: 400,
    },
    text_msg: {
        color: " #222D57",
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 400,
        opacity: 0.9,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    readbtn: {
        float: "right",
        fontSize: "10px !important",
        opacity: 0.9,
        border: "none important",
        outline: 'none !important',
        '&:hover': {
            border: "none important",
        }
    }
}))

const paraStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

const ProductCards = (props) => {
    const classes = useStyle()
    const { data } = props
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false)

    const ref = useRef(null)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (ref.current) {
            setShowButton(ref.current.scrollHeight !== ref.current.clientHeight)
        }
    }, [data])



    return (
        <Card >
            <CardContent>
                <Typography className={classes.title} variant="h5" component="div">
                    Title : {data?.title}
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography className={classes.subtitle} variant="h5" component="div">
                    Message:
                </Typography>
                <Typography ref={ref} style={isExpanded ? null : paraStyle} className={classes.text_msg} variant="body2" color="text.secondary">
                    {data?.body}
                </Typography>
                {showButton && <Button size="small" className={classes.readbtn} onClick={toggleExpanded} >{isExpanded ? "read less" : "read more..."}</Button>}
                <Box mt={2} display='flex' gap={1} justifyContent='flex-start' alignItems='center'>
                    <Typography className={classes.subtitle} variant="h5" component="div">
                        Price :
                    </Typography>
                    <Typography className={classes.text_msg} variant="body2" color="text.secondary">
                        {data?.reactions}
                    </Typography>
                </Box>
            </CardContent>
        </Card>

    )
}

export default ProductCards