import logo from './logo.svg';
import './App.css';
import { loginRequest } from './authConfig.js';
import { useMsal } from '@azure/msal-react';
import { PageLayout } from './PageLayout.js';

function App() {
  const { instance, accounts } = useMsal();
  function handleLogin() {
    instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    }).then((response) => {
      console.log(response);
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <PageLayout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => handleLogin()}>
            Acquire Token Silently
          </button>
        </header>
      </div >
    </PageLayout>
  );
}

export default App;
