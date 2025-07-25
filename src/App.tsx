
import './App.css'
import { CurrentUserInfo } from './CurrentUserInfo'
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader'

function App() {


  return (
    <>
      <h1>Container Components</h1>
      <p>This is a simple example of a container component that fetches user information and displays it.</p>
      <CurrentUserLoader>
        <CurrentUserInfo />
      </CurrentUserLoader>


      <ResourceLoader 
        resourceUrl={`http://localhost:8080/user/1`}
        resourceName='user'>
         <CurrentUserInfo />
      </ResourceLoader>


      <UserLoader userId='1'>
        <CurrentUserInfo />
      </UserLoader>
    </>
  )
}

export default App
