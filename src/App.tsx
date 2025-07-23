
import './App.css'
import { CurrentUserInfo } from './CurrentUserInfo'
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserLoader } from './UserLoader'

function App() {


  return (
    <>
      <h1>Container Components</h1>
      <p>This is a simple example of a container component that fetches user information and displays it.</p>
      <CurrentUserLoader>
        <CurrentUserInfo />
      </CurrentUserLoader>

      <UserLoader userId='1'>
        <CurrentUserInfo />
      </UserLoader>
    </>
  )
}

export default App
