import React, {useState} from 'react'

import {Typography, IconButton, MenuItem, Menu} from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined'

import styles from './Comment.module.scss'


interface CommentProps {
    user: {
        fullname: string
        avatarUrl: string
    }
    text: string
    createdAt: string
}

export const Comment: React.FC<CommentProps> = ({user, text, createdAt}) => {
    const [anchorElement, setAnchorElement] = useState(null)

    const handleClick = e => {
        setAnchorElement(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorElement(null)
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatarUrl}
                    alt="avatar"/>
                <b>{user.fullname}</b>
                <span>{createdAt}</span>
            </div>

            <Typography className={styles.text}>
                {text}
            </Typography>

            <span className={styles.replyBtn}>Ответить</span>

            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>

            <Menu elevation={2}
                  anchorEl={anchorElement}
                  onClose={handleClose}
                  open={Boolean(anchorElement)}
                  keepMounted>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}