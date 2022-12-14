import {useState} from 'react'
import { Box, Button } from '@mui/material'
import SelectUsersForm from './SelectUsersForm'

const FindDegree = ({users, userNames}) => {
  const [user1, setUser1] = useState('')
  const [user2, setUser2] = useState('')
  const [degreeResult, setDegreeResult] =  useState([])
  const [errorMessage, setErrorMessage] = useState('')

  if(userNames.length == 0) return
  
  const findAndSetDegree = (sourceUser, visited=[]) => {
    if(!user1 || !user2)
    {
        setErrorMessage('Select users')
        return
    }
    else
        setErrorMessage('')

    const degreeArr = findDegree(sourceUser, visited) || []
    const lines = []

    for(let eachDegree of degreeArr)
    {
        lines.push(sourceUser+' > '+eachDegree.join(' > '))
    }

    setDegreeResult(lines.length ? lines : ['No connection'])
  }

  const findDegree = (sourceUser, visited=[]) => {
    
    let pathsList = []
 
    for(let friend of users[sourceUser].friends)
    {        
        if(friend == user2)
        {
            pathsList.push([user2])
            continue
        }
        else if(visited.indexOf(friend) >= 0)
        {
            continue
        }
        
        let areFriends = findDegree(friend, [...visited, friend])
        if(areFriends)
        {
            let newPath = [friend]
            if(Array.isArray(areFriends[0]))
            {
                for(let eachArray of areFriends)
                {
                    newPath = [friend].concat(eachArray)
                    pathsList.push(newPath)
                }
            }
            else
            {
                newPath = newPath.concat(areFriends)
                pathsList.push(newPath)
            }
            
        }
        
    }
    if(pathsList.length == 0)
        return null
    return pathsList
    
  }

  return (
    <>
        <SelectUsersForm userNames={userNames} user1={user1} user2={user2} setUser1={setUser1} setUser2={setUser2} />
        <Box className='finddegree_box'>
            <Button variant='contained' color='success' onClick={() => findAndSetDegree(user1,[user1])}>
                Find Degree
            </Button>
        </Box>
        {degreeResult &&
            <Box className='finddegree_result'>
                {degreeResult.map(item => <p key={item}>{item}</p>)}
                {errorMessage && <p className='error'>{errorMessage}</p>}
            </Box>
        }
    </>
  )
}

export default FindDegree