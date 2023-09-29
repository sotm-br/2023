---
layout: page-with-toc
#title: Local &amp; Transportation
title: Localização
headings: "conference-Local,getting-to,sights"
---

<h2 class='space-bottom1' id='conference-Local'>Local</h2>

O State of the Map 2023 Será Realizado no Centro Politécnico da UFPR, localizado na Avenida Coronel Francisco H. dos Santos, 100 – Jardim das Américas, Curitiba, PR. A principal entrada do câmpus fica na Avenida Coronel Francisco Heráclito dos Santos e as atividades do evento serão realizadas no auditório do prédio da Administração, indicado no mapa:

<div id="map" style="height:420px; width:100%"></div>

<!-- <iframe id="webmap" name="Mapa" allowfullscreen="true" src="https://github.com/sotm-br/2023/blob/main/venue_test/map/index.html"></iframe> -->

<h2 class='space-bottom1' id='getting-to'>Acesso</h2>

Para chegar no Centro Politécnico a partir do centro da cidade de ônibus, há duas opções:
* Linha **[469 - Centro Politécnico](https://goo.gl/maps/W9y2srwJcDATgp8M8)**, que sai da estação tubo Círculo Militar e chega na estação tubo Jardim das Américas, em frente à entrada do câmpus. A linha também para em frente ao câmpus Jardim Botânico da UFPR, que tem acessos ao Centro Politécnico e ao próprio parque Jardim Botânico
* Linha **[303 - Centenário / C. Comprido](https://goo.gl/maps/UevNqTyEXx68wTbY9)**, que sai da Praça Rui Barbosa e vai até o Terminal Capão da Imbuia, conectando com a linha **022 - Inter 2 (sentido horário)**, que chega na estação tubo Jardim das Américas. Além de ter ônibus com maior frequência, essa rota também faz outras conexões e paradas no centro da cidade, incluindo a estação tubo na frente da **Rodoferroviária de Curitiba**

O **Aeroporto Afonso Pena** fica mais distante, no município vizinho de São José dos Pinhais. Para chegar ao centro de Curitiba, a única opção de ônibus é:
* Linha metropolitana **[E32 - Aeroporto Afonso Pena / Terminal Boqueirão](https://goo.gl/maps/1GjDHy5dJEDHEGbY7)**, que sai de um ponto na saída do aeroporto e vai até o Terminal do Boqueirão, onde saem as linhas **503 - Boqueirão** ou **500 - Ligeirão Boqueirão** (ambas fazem o mesmo trajeto), chegando na estação tubo UTFPR. Essas linhas também passam pelo Terminal do Hauer, onde o **023 - Inter 2 (sentido anti-horário)** pode levar diretamente ao Centro Politécnico

As informações dos ônibus são atualizadas pela prefeitura no Google Maps, por isso é uma fonte confiável para planejar rotas. Acesse o site oficial para ver em detalhes os [horários das linhas](https://www.urbs.curitiba.pr.gov.br/horario-de-onibus) e os [pontos de parada](https://www.urbs.curitiba.pr.gov.br/mobile/itibus). A tarifa nos ônibus de Curitiba é de R$ 6,00 e a da linha metropolitana é de R$ 5,50

Além do transporte público, também estão disponíveis em Curitiba aplicativos de transporte (como Uber e 99) e serviços de táxi, com pontos espalhados pela cidade

<h2 class='space-bottom1' id='food'>Alimentação</h2>

Serão servidos coffee breaks ao longo do evento e os participantes devidamente inscritos (com presença confirmada até o dia 17 de setembro) terão acesso ao [Restaurante Universitário](https://pra.ufpr.br/ru/ru-centro-politecnico/), localizado dentro do câmpus. Os valores cobrados por refeição serão:
* Café da manhã (06:45 - 08:00): R$ 3,50
* Almoço (11:00 - 13:30): R$ 6,00
* Jantar (17:30 - 19:30): R$ 6,00

Também existem diversos restaurantes e lanchonetes ao redor do câmpus, incluindo uma praça de alimentação no Shopping Jardim das Américas

<h2 class='space-bottom1' id='accommodation'>Hospedagem</h2>

A universidade não disponibiliza acomodações, então resta aos participantes procurar locais de hospedagem por conta, como em aplicativos e sites de reserva. Outra fonte de busca é a [lista de hotéis](https://turismo.curitiba.pr.gov.br/conteudos/hoteis/22) disponibilizada no site da prefeitura

<h2 class='space-bottom1' id='sights'>Turismo</h2>

Os principais pontos turísticos de Curitiba estão concentrados no centro da cidade, podendo ser acessados a pé. O [mapa turístico](http://www.curitiba-parana.net/mapas/imagens/mapa-turistico.jpg) mostra alguns desses pontos e o [site oficial de turismo](https://turismo.curitiba.pr.gov.br/categoria/atrativos-turisticos/3) traz uma lista categorizada de atrações

Curitiba também conta com o tour da [Linha Turismo](https://www.urbs.curitiba.pr.gov.br/transporte/linha-turismo), um ônibus panorâmico que percorre os cartões postais da cidade

Vale conferir ainda as [feiras livres](https://turismo.curitiba.pr.gov.br/conteudo/feiras/46) que acontecem em diversos locais ao longo da semana, oferecendo artesanato, gastronomia e hortifruti

Outra atração popular é o [Trem da Serra do Mar](https://serraverdeexpress.com.br/o-trem/), uma linha turística que sai da Rodoferroviária de Curitiba e desce a Serra do Mar até a cidade de Morretes.


        <script src="js/qgis2web_expressions.js"></script>
        <script src="js/leaflet.js"></script>
        <script src="js/leaflet.rotatedMarker.js"></script>
        <script src="js/leaflet.pattern.js"></script>
        <script src="js/leaflet-hash.js"></script>
        <script src="js/Autolinker.min.js"></script>
        <script src="js/rbush.min.js"></script>
        <script src="js/labelgun.min.js"></script>
        <script src="js/labels.js"></script>
        <script src="data/r_1.js"></script>
        <script src="data/p_2.js"></script>
        <script>
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
        }

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
        }
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

        L.marker([-25.45055,-49.23235], {icon: L.icon({
      iconUrl: 'https://github.com/sotm-br/2023/blob/main/img/logo/sotm_br-logo.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40]
        })}).bindPopup("<h3>Campus Politécnico</h3><p>Local do Evento <a href='https://www.openstreetmap.org/?mlat=-25.4505&mlon=-49.23246#map=19/-25.45055/-49.23235' target='_blank'>Open location on osm.org</a>.</p>").addTo(map);

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


        </script>
