import React, {useState} from 'react';

import Layout from './hoc/Layout'
import BurgerBuilder from './containers/BurgerBuilder'

function App() {
  const [show, setShow] = useState(true)

  setTimeout(() => {
      setShow(true) 
      // false for test to show componentWillUnmount
      // in withWerrorHandler
  }, 3000)

  return (
    <div>
      <Layout>
        {show ? <BurgerBuilder /> : null}
      </Layout>
    </div>
  );
}

export default App;
