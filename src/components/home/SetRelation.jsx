import {useState} from 'react'
import { Box, Button } from '@mui/material'
import SelectUsersForm from './SelectUsersForm'


const SetRelation = ({users, setUsers, userNames}) => {
    const [user1, setUser1] = useState('')
    const [user2, setUser2] = useState('')

    if(userNames.length == 0) return

    const setRelation = () => {
        if(users[user1].friends.indexOf(user2) >= 0)
            return
        setUsers(users => ({
                            ...users,
                            [user1]: {friends: [...users[user1]?.friends, user2]},
                            [user2]: {friends: [...users[user2]?.friends, user1]}
                        }))
        console.log(users)
    }
  
  
    return (
      <>
        <SelectUsersForm 
            userNames={userNames} 
            user1={user1} user2={user2} 
            setUser1={setUser1} 
            setUser2={setUser2} 
        />
        
        <Box className='setrelation_box'>
            <Button variant='contained' color='success' className='relation_button' onClick={setRelation} >
                Set relation
            </Button>
        </Box> 
      </>
    )
}

export default SetRelation