import { Button } from "@chakra-ui/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>Hello</Button>
    <Button onClick={() => setCount(count + 1)}>
      Count is {count}
    </Button>
    </>
  )
}

export default App
