import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Hospitals extends React.Component {
  state = {
    hospitals: [],
    searchQuery: '',
    searchedLocation: null
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = () => {
    const { google } = this.props;
    const { searchQuery } = this.state;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const location = results[0].geometry.location;
        this.fetchNearbyHospitals(location);
        this.setState({ searchedLocation: location });
      } else {
        console.log('Geocode was not successful for the following reason: ', status);
      }
    });
  };

  fetchNearbyHospitals = (location) => {
    const { google } = this.props;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      location: location,
      radius: '5000',
      type: ['hospital']
    };
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ hospitals: results });
      }
    });
  };

  render() {
    const { hospitals, searchQuery, searchedLocation } = this.state;
    const { google } = this.props;

    // Container styles for centering
    const containerStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      background: 'url("/path/to/your/background/image.jpg") center center / cover no-repeat', // Background image CSS
      minHeight: '100vh', // Ensure the container takes the full height of the viewport
      padding: '20px'
    };

    const searchBarContainerStyles = {
      width: '100%',
      marginBottom: '20px'
    };

    const searchInputStyles = {
      marginRight: '10px',
      width: '60%',
      padding: '10px',
      fontSize: '16px'
    };

    const mapStyles = {
      width: '100%',
      height: 'calc(100vh - 150px)' // Adjusted height to cover the remaining space after the search bar
    };

    return (
      <div style={containerStyles}>
        <div style={searchBarContainerStyles}>
          <input
            type="text"
            placeholder="Enter location or address"
            value={searchQuery}
            onChange={this.handleSearchChange}
            style={searchInputStyles}
          />
          <button onClick={this.handleSearchSubmit}>Search</button>
        </div>
        <Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={searchedLocation ? searchedLocation : { lat: 37.7749, lng: -122.4194 }}
        >
          {searchedLocation && (
            <Marker
              name="Searched Location"
              position={{ lat: searchedLocation.lat(), lng: searchedLocation.lng() }}
            />
          )}
          {hospitals.map((hospital, index) => (
            <Marker
              key={index}
              name={hospital.name}
              position={{ lat: hospital.geometry.location.lat(), lng: hospital.geometry.location.lng() }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: ['places'] // Include the Places library
})(Hospitals);