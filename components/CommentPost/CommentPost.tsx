import React, {useState} from 'react'

import styles from './CommentPost.module.scss'
import {IconButton, Menu, MenuItem, Paper, Typography} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreHorizOutlined'


interface CommentPostProps {
    user: {
        fullname: string
    }
    text: string
    post: {
        title: string
    }
}

export const CommentPost: React.FC<CommentPostProps> = ({user, text, post}) => {
    const [anchorElement, setAnchorElement] = useState(null)

    const handleClick = e => {
        setAnchorElement(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorElement(null)
    }

    return (
        <Paper elevation={0} className='p-20' classes={{root: styles.paper}}>
            <Typography variant='h6' className={styles.title}>
                <a href="#">{post.title}</a>
                <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
            </Typography>

            <Typography className='mt-10 mb-15'>{text}</Typography>

            <Menu id='simple-menu'
                  elevation={3}
                  anchorEl={anchorElement}
                  onClose={handleClose}
                  open={Boolean(anchorElement)}
                  keepMounted>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </Paper>
    )
}