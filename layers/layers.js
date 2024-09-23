var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Colonias_1 = new ol.format.GeoJSON();
var features_Colonias_1 = format_Colonias_1.readFeatures(json_Colonias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias_1.addFeatures(features_Colonias_1);
var lyr_Colonias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colonias_1, 
                style: style_Colonias_1,
                popuplayertitle: "Colonias",
                interactive: true,
                title: '<img src="styles/legend/Colonias_1.png" /> Colonias'
            });
var format_Vencidos_2 = new ol.format.GeoJSON();
var features_Vencidos_2 = format_Vencidos_2.readFeatures(json_Vencidos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vencidos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vencidos_2.addFeatures(features_Vencidos_2);
var lyr_Vencidos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vencidos_2, 
                style: style_Vencidos_2,
                popuplayertitle: "Vencidos",
                interactive: true,
    title: 'Vencidos<br />\
    <img src="styles/legend/Vencidos_2_0.png" /> 0<br />\
    <img src="styles/legend/Vencidos_2_1.png" /> 100<br />\
    <img src="styles/legend/Vencidos_2_2.png" /> 10240<br />\
    <img src="styles/legend/Vencidos_2_3.png" /> 102850<br />\
    <img src="styles/legend/Vencidos_2_4.png" /> 10880<br />\
    <img src="styles/legend/Vencidos_2_5.png" /> 11600<br />\
    <img src="styles/legend/Vencidos_2_6.png" /> 1280<br />\
    <img src="styles/legend/Vencidos_2_7.png" /> 17280<br />\
    <img src="styles/legend/Vencidos_2_8.png" /> 180<br />\
    <img src="styles/legend/Vencidos_2_9.png" /> 200<br />\
    <img src="styles/legend/Vencidos_2_10.png" /> 2400<br />\
    <img src="styles/legend/Vencidos_2_11.png" /> 2560<br />\
    <img src="styles/legend/Vencidos_2_12.png" /> 28800<br />\
    <img src="styles/legend/Vencidos_2_13.png" /> 300<br />\
    <img src="styles/legend/Vencidos_2_14.png" /> 3000<br />\
    <img src="styles/legend/Vencidos_2_15.png" /> 32640<br />\
    <img src="styles/legend/Vencidos_2_16.png" /> 34560<br />\
    <img src="styles/legend/Vencidos_2_17.png" /> 37760<br />\
    <img src="styles/legend/Vencidos_2_18.png" /> 3840<br />\
    <img src="styles/legend/Vencidos_2_19.png" /> 39680<br />\
    <img src="styles/legend/Vencidos_2_20.png" /> 4480<br />\
    <img src="styles/legend/Vencidos_2_21.png" /> 450<br />\
    <img src="styles/legend/Vencidos_2_22.png" /> 5600<br />\
    <img src="styles/legend/Vencidos_2_23.png" /> 5700<br />\
    <img src="styles/legend/Vencidos_2_24.png" /> 5760<br />\
    <img src="styles/legend/Vencidos_2_25.png" /> 60400<br />\
    <img src="styles/legend/Vencidos_2_26.png" /> 640<br />\
    <img src="styles/legend/Vencidos_2_27.png" /> 6400<br />\
    <img src="styles/legend/Vencidos_2_28.png" /> 67800<br />\
    <img src="styles/legend/Vencidos_2_29.png" /> 7040<br />\
    <img src="styles/legend/Vencidos_2_30.png" /> 7680<br />\
    <img src="styles/legend/Vencidos_2_31.png" /> 80640<br />\
    <img src="styles/legend/Vencidos_2_32.png" /> 99200<br />\
    <img src="styles/legend/Vencidos_2_33.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Colonias_1.setVisible(true);lyr_Vencidos_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Colonias_1,lyr_Vencidos_2];
lyr_Colonias_1.set('fieldAliases', {'CP_COLONIA': 'CP_COLONIA', 'MUNICIPIO': 'MUNICIPIO', 'COLONIA': 'COLONIA', });
lyr_Vencidos_2.set('fieldAliases', {'id': 'id', 'Serie': 'Serie', 'Factura': 'Factura', 'Fecha Vige': 'Fecha Vige', 'Socio': 'Socio', 'Nombre': 'Nombre', 'RFC': 'RFC', 'Concepto': 'Concepto', 'Total': 'Total', 'Estatus': 'Estatus', 'Telefono1F': 'Telefono1F', 'Telefono2F': 'Telefono2F', 'Fax1Fiscal': 'Fax1Fiscal', 'Telefono1': 'Telefono1', 'Telefono2': 'Telefono2', 'Fax1': 'Fax1', 'CP': 'CP', 'Colonia': 'Colonia', 'Direcci�': 'Direcci�', 'Tipo': 'Tipo', 'Delegaci��': 'Delegaci��', 'Ciudad': 'Ciudad', 'Entre Call': 'Entre Call', 'Entre Ca_1': 'Entre Ca_1', 'Domi. Crea': 'Domi. Crea', 'Latitud': 'Latitud', 'Longitus': 'Longitus', 'Tarjeta de': 'Tarjeta de', 'Consejero': 'Consejero', 'Jefe de Se': 'Jefe de Se', 'SCIAN': 'SCIAN', 'SCIAN Desc': 'SCIAN Desc', 'Correo': 'Correo', 'CorreoF': 'CorreoF', 'Notas': 'Notas', });
lyr_Colonias_1.set('fieldImages', {'CP_COLONIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COLONIA': 'TextEdit', });
lyr_Vencidos_2.set('fieldImages', {'id': 'TextEdit', 'Serie': 'TextEdit', 'Factura': 'TextEdit', 'Fecha Vige': 'TextEdit', 'Socio': 'TextEdit', 'Nombre': 'TextEdit', 'RFC': 'TextEdit', 'Concepto': 'TextEdit', 'Total': 'TextEdit', 'Estatus': 'TextEdit', 'Telefono1F': 'TextEdit', 'Telefono2F': 'TextEdit', 'Fax1Fiscal': 'TextEdit', 'Telefono1': 'TextEdit', 'Telefono2': 'TextEdit', 'Fax1': 'TextEdit', 'CP': 'TextEdit', 'Colonia': 'TextEdit', 'Direcci�': 'TextEdit', 'Tipo': 'TextEdit', 'Delegaci��': 'TextEdit', 'Ciudad': 'TextEdit', 'Entre Call': 'TextEdit', 'Entre Ca_1': 'TextEdit', 'Domi. Crea': 'TextEdit', 'Latitud': 'TextEdit', 'Longitus': 'TextEdit', 'Tarjeta de': 'TextEdit', 'Consejero': 'TextEdit', 'Jefe de Se': 'TextEdit', 'SCIAN': 'TextEdit', 'SCIAN Desc': 'TextEdit', 'Correo': 'TextEdit', 'CorreoF': 'TextEdit', 'Notas': 'TextEdit', });
lyr_Colonias_1.set('fieldLabels', {'CP_COLONIA': 'no label', 'MUNICIPIO': 'no label', 'COLONIA': 'inline label - always visible', });
lyr_Vencidos_2.set('fieldLabels', {'id': 'no label', 'Serie': 'no label', 'Factura': 'inline label - always visible', 'Fecha Vige': 'no label', 'Socio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'RFC': 'inline label - always visible', 'Concepto': 'no label', 'Total': 'inline label - always visible', 'Estatus': 'no label', 'Telefono1F': 'inline label - always visible', 'Telefono2F': 'inline label - always visible', 'Fax1Fiscal': 'no label', 'Telefono1': 'inline label - always visible', 'Telefono2': 'inline label - always visible', 'Fax1': 'no label', 'CP': 'no label', 'Colonia': 'inline label - always visible', 'Direcci�': 'inline label - always visible', 'Tipo': 'no label', 'Delegaci��': 'no label', 'Ciudad': 'inline label - always visible', 'Entre Call': 'inline label - always visible', 'Entre Ca_1': 'inline label - always visible', 'Domi. Crea': 'inline label - always visible', 'Latitud': 'no label', 'Longitus': 'no label', 'Tarjeta de': 'no label', 'Consejero': 'no label', 'Jefe de Se': 'no label', 'SCIAN': 'no label', 'SCIAN Desc': 'no label', 'Correo': 'inline label - always visible', 'CorreoF': 'no label', 'Notas': 'no label', });
lyr_Vencidos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});