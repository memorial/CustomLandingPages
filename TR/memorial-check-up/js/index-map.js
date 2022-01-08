var mIcon = L.icon({
    iconUrl: 'images/mmarker.png',
    iconSize:     [30, 45],
    iconAnchor:   [22, 54],
    popupAnchor:  [-7, -56]
});

var mymap = L.map('mapid').setView([39.185009, 35.192581], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    center: [39.185009, 35.192581],
    accessToken: 'pk.eyJ1IjoiZjFyYXQiLCJhIjoiY2thMTh1NjB2MWN3NDNmbGliMXFvYXM4NyJ9.0Z4yniB9NEFrdkN_zIkhnA'
}).addTo(mymap);

var ist1 = L.marker([41.0011063,28.8782987],{icon: mIcon}).addTo(mymap);
var ist2 = L.marker([40.9843788,29.1046749],{icon: mIcon}).addTo(mymap);
var ant1 = L.marker([36.9176212,30.6912811],{icon: mIcon}).addTo(mymap);
var kay1 = L.marker([38.7287162,35.4773636],{icon: mIcon}).addTo(mymap);
var bahcelievler = L.marker([40.9930973,28.8523366],{icon: mIcon}).addTo(mymap);
var etiler = L.marker([41.0762177,29.0188816],{icon: mIcon}).addTo(mymap);
var ankara = L.marker([39.9035376,32.8131175],{icon: mIcon}).addTo(mymap);
var topcular = L.marker([36.8854908,30.7312591],{icon: mIcon}).addTo(mymap);
var lara = L.marker([36.8585557,30.7366503],{icon: mIcon}).addTo(mymap);
var dicle = L.marker([37.925497,40.1599455],{icon: mIcon}).addTo(mymap);
var sisli = L.marker([41.0615273,28.9704431],{icon: mIcon}).addTo(mymap);
var wellness = L.marker([41.0656734,29.0159659],{icon: mIcon}).addTo(mymap);
var medstarant = L.marker([36.894186,30.6828058],{icon: mIcon}).addTo(mymap);
var diyarbakir = L.marker([37.9360001,40.18559],{icon: mIcon}).addTo(mymap);


ist1.bindPopup("<p>Memorial Hizmet Hastanesi<br /><a href='tel://(0212) 408 66 66'>0212 408 66 66</a><br /><a href='https://www.hizmethastanesi.com/'>Web sitesi</a>");
ist2.bindPopup("<p>Memorial Ataşehir Hastanesi<br /><a href='tel://0216 570 66 66'>(0216) 570 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/atasehir/'>Web sitesi</a>");
ant1.bindPopup("<p>Memorial Antalya Hastanesi<br /><a href='tel://0242 314 66 66'>(0242) 314 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/antalya/'>Web sitesi</a>");
kay1.bindPopup("<p>Memorial Kayseri Hastanesi<br /><a href='tel://0352 315 66 66'>(0352) 315 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/kayseri/'>Web sitesi</a>");
bahcelievler.bindPopup("<p>Memorial Bahçelievler Hastanesi<br /><a href='tel://('02124084545'>(0212) 408 45 45</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/bahcelievler/'>Web sitesi</a>");
etiler.bindPopup("<p>Memorial Etiler Tıp Merkezi<br /><a href='tel://('02123249999'>(0212) 324 99 99</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/etiler/'>Web sitesi</a>");
ankara.bindPopup("<p>Memorial Ankara Hastanesi<br /><a href='tel://('03122536666'>(0312) 253 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/ankara/'>Web sitesi</a>");
topcular.bindPopup("<p>Medstar Topçular Hastanesi<br /><a href='tel://('02423103232'>(0242) 310 32 32</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/medstar-topcular/'>Web sitesi</a>");
lara.bindPopup("<p>Memorial Lara Tıp Merkezi<br /><a href='tel://('02423146666'>(0242) 314 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/lara/'>Web sitesi</a>");
dicle.bindPopup("<p>Memorial Dicle Hastanesi<br /><a href='tel://('04123156666'>(0412) 315 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/dicle/'>Web sitesi</a>");
sisli.bindPopup("<p>Memorial Şişli Hastanesi<br /><a href='tel://('02123146666'>(0212) 314 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/sisli/'>Web sitesi</a>");
wellness.bindPopup("<p>Memorial Wellness <br /><a href='tel://('02123146600'>(0212) 314 66 00</a><br /><a href='https://www.memorial-wellness.com/'>Web sitesi</a>");
medstarant.bindPopup("<p>Medstar Antalya Hastanesi<br /><a href='tel://('02423109292'>(0242) 310 92 92</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/medstar-antalya/'>Web sitesi</a>");
diyarbakir.bindPopup("<p>Memorial Diyarbakır Hastanesi<br /><a href='tel://('04123146666'>(0412) 314 66 66</a><br /><a href='https://www.memorial.com.tr/hastane-ve-tip-merkezleri/diyarbakir/'>Web sitesi</a>");
