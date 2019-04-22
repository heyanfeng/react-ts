import React from 'react';
import Hello from './components/hello';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello  name="ts" />
            </div>
        )
    }
}

export default App;