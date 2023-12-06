import * as React from 'react';
import * as Location from 'expo-location'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const bikeImage = require('../../../assets/bicicleta.png')
const destinoImage = require('../../../assets/destino.png')

export default function Map() {
  const [origem, setOrigem] = React.useState({
    latitude: -22.81214,
    longitude: -47.05893,
  })

  const [destino, setDestino] = React.useState({
    latitude: -22.89002,
    longitude: -47.07702,

  })

  async function getLocationPermission() {
    let { granted } = await Location.requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosicao = await Location.getCurrentPositionAsync();
      const latitude = currentPosicao.coords.latitude;
      const longitude = currentPosicao.coords.longitude;
      setOrigem({ latitude, longitude });

    }
  }

  React.useEffect(() => {
    getLocationPermission();
  }, [])

  React.useEffect(() => {
    Location.watchPositionAsync({
      accuracy: Location.LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      console.log(response);
      const latitude = response.coords.latitude;
      const longitude = response.coords.longitude;
      setOrigem({ latitude, longitude });
    });
  }, []);

  return (
    <View>
      <MapView style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: origem.latitude,
          longitude: origem.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.05
        }}
      >
        <Marker
          draggable={true}
          coordinate={origem}
          image={bikeImage}
          onDragEnd={(direcao) => setOrigem(direcao.nativeEvent.coordinate)}
        />
        <Marker
          draggable={true}
          coordinate={destino}
          image={destinoImage}
          onDragEnd={(direcao) => setDestino(direcao.nativeEvent.coordinate)}
        />
        <MapViewDirections
          origin={origem}
          destination={destino}
          apikey={"AIzaSyBDciLG_zO5KZaNoaUKy-MwQ-j9BmAl0og"}
          strokeColor='#023A20'
          strokeWidth={6}
        />
        {/*<Polyline
        coordinates={[origem, destino]}
        strokeColor='#023A20'
        strokeWidth={6}
    />*/}

      </MapView>
      <View style={styles.searchBox}>
        <GooglePlacesAutocomplete
          placeholder='Para onde vamos?'
          enablePoweredByContainer={false}
          disableScroll={true}
          onPress={(data, details = null) => {
            lat = details.geometry.location.lat;
            long = details.geometry.location.lng;
            console.log(details.geometry.location.lat);
            console.log(details.geometry.location.lng);

            const coordenadasRenomeadas = {
              latitude: lat,
              longitude: long,
            };
            setDestino(coordenadasRenomeadas);
          }}
          query={{
            key: 'AIzaSyBDciLG_zO5KZaNoaUKy-MwQ-j9BmAl0og',
            language: 'pt-br',
          }}
          fetchDetails={true}
          styles={{
            listView: styles.autocompleteListView,
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
          }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',

  },
  searchBox: {
    position: 'absolute',
    bottom: '20%', // 20% acima da parte inferior
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },

});

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]