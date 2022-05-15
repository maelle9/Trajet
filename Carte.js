
const name = [
        'marseille',  'nice',
        'valence',    'grenoble',
        'lyon',       'clermont-ferrand',
        'dijon',      'orléan',
        'paris',      'rouen',
        'amiens',     'lille',
        'strasbourg', 'rennes',
        'nantes',     'brest',
        'bordeaux',   'poitier',
        'toulouse',   'limoges',
        'marseille'
    ]
;
const lat = [
        43.2805098, 43.7009358,
        44.9235184, 45.1875602,
        45.7580491, 45.7774551,
        47.3215806, 47.9027336,
        48.85877, 49.4404591,
        49.8941708, 50.6365654,
        48.584614, 48.1113387,
        47.2186371, 48.4085349,
        44.8638181, 44.6545981,
        43.6044622, 43.4312127,
        43.2805098
    ]
;
const long = [
        5.240563,  7.2683912,
        4.8463448,  5.7357819,
        4.7650899,  3.0819427,
        5.0414701,  1.9086066,
        2.2069522,  1.0939658,
        2.2956951,  3.0635282,
        7.7507127, -1.6800198,
        -1.5541362, -4.5696253,
        -0.6560523, -0.0467273,
        1.4442469,  1.7695804,
        5.240563
    ];


//node --experimental-modules script.js
const data = [{
    type:'scattermapbox',
    lat: lat,
    lon: long,
    mode:'lines+markers',
    marker: {
        size:14
    },
    line:{
        width: 2,
        color: 'blue'
    },
    text: name,
}]

const layout = {
    autosize: true,
    hovermode:'closest',
    mapbox: {
        bearing:0,
        center: {
            lat:48.85877,
            lon:2.2069522
        },
        pitch:0,
        zoom:4
    },
    margin: {
        r: 20,
        t: 40,
        b: 20,
        l: 20,
        pad: 0
    },
}

Plotly.setPlotConfig({
    mapboxAccessToken: "pk.eyJ1IjoibXNvbmlhbSIsImEiOiJjbDMxbGxia3gwMHJhM2NvZmU2Z2V2enJzIn0.4AFIxeJ_0O93n6hGcW19Sg"
})

Plotly.newPlot('myDiv', data, layout)
