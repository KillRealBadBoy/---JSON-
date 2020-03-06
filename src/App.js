import React, { useState } from 'react';
import './App.css';

import FileUploader from './components/FileUploader';
import Header from './components/Header';
import JSONViewer from './components/JSONViewer';

function App() {
    const [JSONObject, setJSONObject] = useState(null);

    return (
        <div>
            <Header />
            <FileUploader setJSONObject={setJSONObject} />
            {JSONObject && <JSONViewer JSONObject={JSONObject} />}
        </div>
    );
}

export default App;
