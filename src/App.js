import { useState } from 'react'
import './App.css'
import AddItemBtn from './AddItemBtn'
import BgButton from './BgButton'
import Moodboard from './Moodboard'
import { ZoomInSolid, ZoomOutSolid } from '@graywolfai/react-heroicons'



const MagnifyUpBtn = <ZoomInSolid style={{
  width: '32px',
  height: '32px'
}} />

const MagnifyDownBtn = <ZoomOutSolid style={{
  width: '32px',
  height: '32px'
}} />

const initialImages = [
  'https://images.template.net/wp-content/uploads/2016/12/17104154/Fantasy-Landscape-Painting-Illustration.jpg',
  'https://pbs.twimg.com/media/Dvy1z2RUYAAyJmL?format=jpg&name=4096x4096',
  'https://i.pinimg.com/564x/3d/ee/d2/3deed25def7a1a1db1521c5577d60fa5.jpg'
]

function App() {
  const [images, setImages] = useState(initialImages)

  return (
    <div className="app">
      <div className="sidebar">
        <AddItemBtn />
        <BgButton icon={MagnifyUpBtn} text="" />
        <BgButton icon={MagnifyDownBtn} text="" />
      </div>
      <main class="main-area" style={{width: '100%', height: '100%' }}>
        <Moodboard images={images} />
      </main>
    </div>
  );
}

export default App;
