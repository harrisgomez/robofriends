import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

import 'tachyons';

function App() {
    return (
        <div className="App">
            <CardList robots={robots} />
        </div>
    );
}

export default App;