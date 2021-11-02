import { Avatar, Typography, makeStyles, Button } from "@material-ui/core"
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import cssClasses from './Comments.module.css';
import User1 from '../../assets/img/user1.png';
import User2 from '../../assets/img/user2.png';
import User3 from '../../assets/img/user3.png';
import Star from '../../assets/icons/star.png';

const commentsData = [
    {
        img: User1,
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
    },
    {
        img: User2,
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        text: '“I like it because I like to travel far and still can connect with high speed.”.',
    },
    {
        img: User3,
        name: 'Kim Young Jou',
        location: 'Seoul, South Korea',
        text: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
    },
];

const useStyles = makeStyles({
    avatar: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    name: {
        fontSize: 18,
        height: 18,
    },
    location: {
        fontSize: 14,
        height: 14,
        lineHeight: '30px',
    },
    text: {
        textAlign: 'start',
        fontSize: 16,
        lineHeight: '30px'
    },
    btnContainer: {
        marginLeft: 865,
        marginRight: 160
    },
    btn: {
        width: 60,
        height: 60,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '2px solid #F53838',
        transition: 'all .3s',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#F53838'
        },
        '&:first-child': {
            marginRight: 20
        }
    },
});


export default function Comments() {
    const classes = useStyles();

    return (
        <div className={cssClasses.commentsContainer}>

            <div className={cssClasses.commentsList}>
                {
                    commentsData.map(comment => {
                        return <div className={cssClasses.comments}>
                            <div className={cssClasses.userDetails}>
                                <span className={cssClasses.userDetailsInfo}>
                                    <Avatar className={classes.avatar}> <img src={comment.img} alt="user" /> </Avatar>
                                    <span>
                                        <Typography className={classes.name} variant="h6">{comment.name}</Typography>
                                        <Typography className={classes.location} variant="body2" color="textSecondary">{comment.location}</Typography>
                                    </span>
                                </span>

                                <span>
                                    <Typography>4.5</Typography>
                                    <img src={Star} alt="star" />
                                </span>
                            </div>

                            <Typography className={classes.text} color="primary" variant="body1">
                                {comment.text}
                            </Typography>
                        </div>
                    })
                }



            </div>

            <div className={cssClasses.commentsControls}>
                <span className={cssClasses.commentsTracker}>
                    <span className={cssClasses.active} />
                    <span />
                    <span />
                    <span />
                </span>

                <span className={cssClasses.btnContainer}>
                    <Button className={`${classes.btn} ${classes.btnMargin}`} color="secondary" variant="outlined"><ArrowBack /></Button>
                    <Button className={classes.btn} color="secondary" variant="outlined"><ArrowForward /></Button>
                </span>
            </div>


        </div>
    )
}
