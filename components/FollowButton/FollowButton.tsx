import React, {useState} from 'react'

import {Button} from '@material-ui/core'
import {AddOutlined as AddIcon, CheckOutlined as CheckIcon} from '@material-ui/icons'


export const FollowButton: React.FC = () => {
    const [followed, setFollowed] = useState(false)

    const handleButtonClick = () => {
        setFollowed(!followed)
    }

    return (
        <Button onClick={handleButtonClick}
                variant="contained"
                style={{minWidth: 30, width: 35, height: 30}}>
            {!followed ? <AddIcon/> : <CheckIcon style={{fontSize: 20, color: '#2ea83a'}}/>}
        </Button>
    )
}