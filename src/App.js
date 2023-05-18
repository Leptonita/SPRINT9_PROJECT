import Routes from './application/Router';
import Provider from './application/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
