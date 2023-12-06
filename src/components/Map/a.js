<GooglePlacesAutocomplete
placeholder='Para onde vamos?'
onPress={(data, details = null) => {
  // 'details' is provided when fetchDetails = true
  console.log(data, details);
}}
query={{
  key: 'AIzaSyBDciLG_zO5KZaNoaUKy-MwQ-j9BmAl0og',
  language: 'pt-br',
}} 
fetchDetails={true}
styles={{listView:{height:100}}}
/>