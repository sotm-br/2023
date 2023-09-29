var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[-25.453360610482214,-49.23600065126667],[-25.449083527024083,-49.22879623785266]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = 400;
var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OSMStandard_0',
    opacity: 1.0,
    attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);
function pop_r_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['rota'] !== null ? autolinker.link(feature.properties['rota'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
};

function style_r_1_0() {
return {
    pane: 'pane_r_1',
    opacity: 1,
    color: 'rgba(255,1,1,0.3)',
    dashArray: '',
    lineCap: 'round',
    lineJoin: 'round',
    weight: 5.0,
    fillOpacity: 0,
    interactive: true,
}
};

map.createPane('pane_r_1');

map.getPane('pane_r_1').style.zIndex = 401;


map.getPane('pane_r_1').style['mix-blend-mode'] = 'normal';
var layer_r_1 = new L.geoJson(json_r_1, {
attribution: '',
interactive: true,
dataVar: 'json_r_1',
layerName: 'layer_r_1',
pane: 'pane_r_1',
onEachFeature: pop_r_1,
style: style_r_1_0,
});


bounds_group.addLayer(layer_r_1);
map.addLayer(layer_r_1);
function pop_p_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['local'] !== null ? autolinker.link(feature.properties['local'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['andar'] !== null ? autolinker.link(feature.properties['andar'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_p_2_0() {
    return {
        pane: 'pane_p_2',
        radius: 10.0,
        opacity: 1,
        color: 'rgba(255,5,1,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(140,222,57,0.0)',
        interactive: true,
    }
}


map.createPane('pane_p_2');
map.getPane('pane_p_2').style.zIndex = 402;
map.getPane('pane_p_2').style['mix-blend-mode'] = 'normal';
var layer_p_2 = new L.geoJson(json_p_2, {
attribution: '',
interactive: true,
dataVar: 'json_p_2',
layerName: 'layer_p_2',
pane: 'pane_p_2',
onEachFeature: pop_p_2,
pointToLayer: function (feature, latlng) {
  var context = {
      feature: feature,
      variables: {}
  };
  return L.circleMarker(latlng, style_p_2_0(feature));
},
});
bounds_group.addLayer(layer_p_2);
map.addLayer(layer_p_2);
setBounds();