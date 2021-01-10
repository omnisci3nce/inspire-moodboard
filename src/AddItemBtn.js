import { useState } from 'react'
import ElevatedButton from './ElevatedButton'
import './AddItemBtn.css'
import { PlusSolid } from '@graywolfai/react-heroicons'

const AddBtn = <PlusSolid style={{
  width: '36px',
  height: '36px'
}} />

const AddItemForm = () => <span className="add-item-form">url</span>

const AddItemBtn = ({ onAdd }) => {
  const [formIsOpen, setFormIsOpen] = useState(false)

  const onClick = () => {
    setFormIsOpen(!formIsOpen)
  }

  return (
    <div className="add-item-btn">
      <ElevatedButton onClick={onClick} icon={AddBtn} />
      { formIsOpen && <AddItemForm /> }
      
    </div>
  )
}

export default AddItemBtn