const { useEffect, useState } = React
function MyApp() {
  return <h1 onClick={() => alert(123)}>Hello, world!</h1>
}

function Container() {
  const [name, SetName] = useState('唐僧')
  const [init, setInit] = useState(true)
  useEffect(() => {
    if (!init) {
      SetName('猪八戒')
    }
  }, [init])
  return (
    <div onClick={() => setInit(false)}>
      <div> hello {name}</div>
      <MyApp />
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Container />)
