import React from 'react'
import { Box, List, Typography } from '@mui/material'


const ViewUsers = ({users, userNames}) => {
  
  if(userNames.length == 0) return (<p>No users exist</p>)

  return (
    <Box className='viewusers_box'>
        <Typography variant='h5'>Users Information:</Typography>
        <List className='users_list'>
            {userNames.map(
              userName => <p key={userName} >
                            <Typography variant='h6'>Name: <strong>{userName}</strong></Typography>
                            Friends of {userName +': '}<strong>{users[userName].friends.join(', ')}</strong>
                          </p>
            )}
        </List>
    </Box>
  )
}

export default ViewUsers