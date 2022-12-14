import React from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'


const SelectUsersForm = ({userNames, user1, user2, setUser1, setUser2}) => {

  return (
    <Box className='finddegree_box'>

            <FormControl>
                <InputLabel id='forUser1'>Select user 1</InputLabel>
                <Select
                    className='user_select'
                    labelId='forUser1'
                    value={user1}
                    label="Select User 1"
                    onChange={(e) => setUser1(e.target.value)}
                >
                    {userNames.map(userName => {
                        if(userName == user2) return null
                        return <MenuItem key={userName} value={userName}>{userName}</MenuItem>
                    })}
                    
                </Select>
            </FormControl>

            <Select value={'friend'}>
                <MenuItem value={'friend'}>Friend</MenuItem>           
            </Select>

            <FormControl>
                <InputLabel id='forUser2'>Select user 2</InputLabel>
                <Select
                    className='user_select'
                    labelId='forUser2'
                    value={user2}
                    label="Select User 2"
                    onChange={(e) => setUser2(e.target.value)}
                >
                    {userNames.map(userName => {
                        if(userName == user1) return null
                        return <MenuItem key={userName} value={userName}>{userName}</MenuItem>
                    })}
                    
                </Select>
            </FormControl>
        </Box>
  )
}

export default SelectUsersForm