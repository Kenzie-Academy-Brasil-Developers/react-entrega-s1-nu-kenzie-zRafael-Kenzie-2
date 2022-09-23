import { useState } from 'react';
import Home from './pages/Home';
import IntroPage from './pages/IntroPage';

function App() {
  const [goHome, setGoHome] = useState(false);

  return (
    <div>
      {goHome ? (
        <Home setGoHome={setGoHome} />
      ) : (
        <IntroPage setGoHome={setGoHome} />
      )}
    </div>
  );
}

export default App;
