import React, {useCallback} from 'react'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ActionButton = ({billId, closedMonth}) => {
  const deleteHandler = useCallback(() => {
    console.log(`delete id:${billId}`);
    
  }, [billId])
  return (
    <IconButton color='inherit' onClick={deleteHandler} disabled={closedMonth}>
        <DeleteIcon />
    </IconButton>
  )
}

export default ActionButton