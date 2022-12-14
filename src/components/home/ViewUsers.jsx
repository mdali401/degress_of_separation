import React from 'react'
import { Box, List, Typography } from '@mui/material'


const ViewUsers = ({users, userNames}) => {
  
  if(userNames.length == 0) return (<p>No users exist</p>)

  return (
    <Box className='viewusers_box'>
        <Typography id='userinfo_title' variant='h5'>Users Information:</Typography>
        <List className='users_list'>
            {userNames.map(
              userName => <div key={userName} >
                            <Typography variant='h6'>Name: <strong id='username'>{userName}</strong></Typography>
                            Friends of {userName +': '}<strong>{users[userName].friends.join(', ')}</strong>
                          </div>
            )}
        </List>
    </Box>
  )
}

export default ViewUsers