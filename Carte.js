const data = [{
    type:'scattermapbox',
    lat:['43.2805098', '44.9235184', '45.7580491', '48.85877', '44.8638181', '48.4085349'],
    lon:['5.240563', '4.8463448', '4.7650899', '2.2069522', '-0.6560523', '-4.5696253'],
    mode:'lines+markers',
    marker: {
        size:14
    },
    line:{
        width: 2,
        color: 'blue'
    },
    text:['Marseille', 'valence', 'lyon', 'paris', 'bordeau', 'brest']
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
