import { useState } from 'react'
import ElevatedButton from './ElevatedButton'
import './AddItemBtn.css'
import { PlusSolid } from '@graywolfai/react-heroicons'

const AddBtn = <PlusSolid style={{
  width: '36px',
  height: '36px'
}} />

const AddItemForm = () => {
  const [urlInput, setUrlInput] = useState('')

  const handleChange = e => {
    setUrlInput(e.target.value)
  }

  return (
    <span className='add-item-form'>
      <span>
        <input type='text' value={urlInput} onChange={handleChange} />
      </span>
      <span>
        <button>Add</button>
      </span>
      <span style={{color: 'blue'}}>
        { urlInput }
      </span>
    </span>
  )
}

const AddItemBtn = ({ onAdd }) => {
  const [formIsOpen, setFormIsOpen] = useState(false)

  const onClick = () => {
    setFormIsOpen(!formIsOpen)
  }

  return (
    <div className='add-item-btn'>
      <ElevatedButton onClick={onClick} icon={AddBtn} />
      { formIsOpen && <AddItemForm /> }
      
    </div>
  )
}

export default AddItemBtn