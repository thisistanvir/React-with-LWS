import Emoji from "./components/composition/Emoji"
import Text from "./components/composition/Text"
import Bracket from "./components/composition/bracket"

function App() {

  return (
    <div>
      <Emoji>
        {({addEmoji}) => <Bracket>
        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        </Bracket>}
      </Emoji>
    </div>
  )

}

export default App
