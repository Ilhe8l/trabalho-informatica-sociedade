import Blob from './Blob'
import './Blobs.css'

function Blobs({ items }) {
  return (
    <div className="blobs" aria-hidden="true">
      {items.map((item, index) => (
        <Blob
          key={index}
          className="bg-blob"
          points={item.points ?? 7}
          irregular={0.4}
          animated={false}
          style={{
            width: item.size,
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            fill: item.color,
            rotate: `${item.rotate ?? 0}deg`,
          }}
        />
      ))}
    </div>
  )
}

export default Blobs
