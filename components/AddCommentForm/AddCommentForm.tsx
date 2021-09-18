import React, {useState} from 'react'

import {Button, Input} from '@material-ui/core'

import styles from './AddCommentForm.module.scss'


interface AddCommentFormProps {

}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({}) => {
    const [clicked, setClicked] = useState(false)
    const [text, setText] = useState('')

    const handleInputChange = e => {
        setText(e.target.value)
    }

    const handleInputClicked = () => {
        setClicked(true)
    }

    const handleAddComment = () => {
        setClicked(false)
        setText('')
    }

    return (
        <div className={styles.form}>
            <Input onChange={handleInputChange}
                   onFocus={handleInputClicked}
                   value={text}
                   minRows={clicked ? 5 : 1}
                   classes={{root: styles.fieldRoot}}
                   placeholder='Написать комментарий...'
                   fullWidth
                   multiline />

            {clicked && (
                <Button onClick={handleAddComment}
                        className={styles.addButton}
                        variant='outlined'
                        color='primary'>
                    Опубликовать
                </Button>
            )}
        </div>
    )
}