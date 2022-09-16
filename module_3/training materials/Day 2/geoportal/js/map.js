//  Initialise map 
var map = L.map('map').setView([7.0, -1.09], 7);


//  Add Osm  tile layer to map 
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})
// .addTo(map)


var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});



var marker = L.marker([7,-1.09]).addTo(map);


// Add Geojson Layers 


var regionlayer = L.geoJson(region).addTo(map)

var healthsitelayer = L.geoJson(healthfacility).addTo(map)

var railwaylayer = L.geoJson(railway).addTo(map)






//  Basemaps
var baseLayers = {
    "OpenStreetMap": osm,
    "Google Street map": googleStreets,
    "Google Hybrid": googleHybrid,
    "Google Satelite": googleSat,
    "Google Terrain": googleTerrain,
};


// Layers
var overlays = {
    "Marker": marker,
    // "Roads": roadsLayer
};

//  Add layer control to map 
L.control.layers(baseLayers, overlays,{collapsed:false}).addTo(map);


// Add leaflet browser print control to map

L.control.browserPrint({position: 'topleft'}).addTo(map);


// mouse move Coordinate 
map.on("mousemove",function(e) {
	
   $("#coordinate").html(`Lat:${e.latlng.lat.toFixed(3)} , Lng:${e.latlng.lng.toFixed(3)}`)
})




//  Adding scale to map
L.control.scale().addTo(map);

