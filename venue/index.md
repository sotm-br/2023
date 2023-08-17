---
layout: page-with-toc
#title: Local &amp; Transportation
title: Localização
headings: "conference-Local,getting-to,sights"
---

<h2 class='space-bottom1' id='conference-Local'>Local</h2>

O State of the Map 2023 Será Realizado no Centro Politécnico da UFPR, localizado na Avenida Coronel Francisco H. dos Santos, 100 – Jardim das Américas, Curitiba, PR


<div id="map" style="height:420px; width:100%"></div>



<h2 class='space-bottom1' id='sights'>Atrações de Curitiba</h2>

Curitiba possui lugares belíssimos para visitação! A cidade conta com o ônibus Linha Turismo que visita boa parte dos pontos turísticos da cidade! Mais infos no [site oficial do Turismo em Curitiba](https://turismo.curitiba.pr.gov.br/)


<script>
  document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([-25.45055,-49.23235], 13);
    L.control.scale().addTo(map);
    L.tileLayer('{{ site.map_tiles.url}}', {
      attribution: '{{ site.map_tiles.attribution }}',
      maxZoom: {{ site.map_tiles.maxZoom}}
    }).addTo(map);
    map.scrollWheelZoom.disable();
    L.marker([-25.45055,-49.23235], {icon: L.icon({
      iconUrl: "{{ "/img/logo/sotm_br-logo.svg" | prepend: site.baseurl }}",
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    })}).bindPopup("<h3>Campus Politécnico</h3><p>Local do Evento <a href='https://www.openstreetmap.org/?mlat=-25.4505&mlon=-49.23246#map=19/-25.45055/-49.23235' target='_blank'>Open location on osm.org</a>.</p>").addTo(map);
  }, false);
</script>
