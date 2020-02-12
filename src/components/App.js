import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    // Use arrow function to bind context of 'this'
    onSearchSubmit = async( term ) => {
        const response = await axios.get('https:/api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 2e61aefa69d4254b5f282d2ab73526484468e8a3335e97ccf665ea82f135a4de'
            }
        });

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                Found { this.state.images.length } images.
            </div>
        );
    }
}

export default App;