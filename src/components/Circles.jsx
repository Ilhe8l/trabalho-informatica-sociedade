import './Circles.css'

function Circles({ items }) {
  return (
    <div className="circles" aria-hidden="true">
      {items.map((item, index) => (
        <span
          key={index}
          className="circle"
          style={{
            width: item.size,
            height: item.size,
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            background: item.color,
          }}
        />
      ))}
    </div>
  )
}

export default Circles
