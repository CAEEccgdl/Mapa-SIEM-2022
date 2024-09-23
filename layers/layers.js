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
var format_ExteriordelaZMG_2 = new ol.format.GeoJSON();
var features_ExteriordelaZMG_2 = format_ExteriordelaZMG_2.readFeatures(json_ExteriordelaZMG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExteriordelaZMG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExteriordelaZMG_2.addFeatures(features_ExteriordelaZMG_2);
var lyr_ExteriordelaZMG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExteriordelaZMG_2, 
                style: style_ExteriordelaZMG_2,
                popuplayertitle: "Exterior de la ZMG",
                interactive: true,
    title: 'Exterior de la ZMG<br />\
    <img src="styles/legend/ExteriordelaZMG_2_0.png" /> $-<br />\
    <img src="styles/legend/ExteriordelaZMG_2_1.png" /> 100<br />\
    <img src="styles/legend/ExteriordelaZMG_2_2.png" /> 2560<br />\
    <img src="styles/legend/ExteriordelaZMG_2_3.png" /> 300<br />\
    <img src="styles/legend/ExteriordelaZMG_2_4.png" /> 32640<br />\
    <img src="styles/legend/ExteriordelaZMG_2_5.png" /> 640<br />\
    <img src="styles/legend/ExteriordelaZMG_2_6.png" /> <br />'
        });
var format_Tlaquepaque_3 = new ol.format.GeoJSON();
var features_Tlaquepaque_3 = format_Tlaquepaque_3.readFeatures(json_Tlaquepaque_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tlaquepaque_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tlaquepaque_3.addFeatures(features_Tlaquepaque_3);
var lyr_Tlaquepaque_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tlaquepaque_3, 
                style: style_Tlaquepaque_3,
                popuplayertitle: "Tlaquepaque",
                interactive: true,
    title: 'Tlaquepaque<br />\
    <img src="styles/legend/Tlaquepaque_3_0.png" /> 0<br />\
    <img src="styles/legend/Tlaquepaque_3_1.png" /> 100<br />\
    <img src="styles/legend/Tlaquepaque_3_2.png" /> 300<br />\
    <img src="styles/legend/Tlaquepaque_3_3.png" /> 640<br />\
    <img src="styles/legend/Tlaquepaque_3_4.png" /> <br />'
        });
var format_Tonal_4 = new ol.format.GeoJSON();
var features_Tonal_4 = format_Tonal_4.readFeatures(json_Tonal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tonal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tonal_4.addFeatures(features_Tonal_4);
var lyr_Tonal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tonal_4, 
                style: style_Tonal_4,
                popuplayertitle: "Tonalá",
                interactive: true,
    title: 'Tonalá<br />\
    <img src="styles/legend/Tonal_4_0.png" /> $-<br />\
    <img src="styles/legend/Tonal_4_1.png" /> 100<br />\
    <img src="styles/legend/Tonal_4_2.png" /> 300<br />\
    <img src="styles/legend/Tonal_4_3.png" /> 640<br />\
    <img src="styles/legend/Tonal_4_4.png" /> <br />'
        });
var format_Zapopan_5 = new ol.format.GeoJSON();
var features_Zapopan_5 = format_Zapopan_5.readFeatures(json_Zapopan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zapopan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zapopan_5.addFeatures(features_Zapopan_5);
var lyr_Zapopan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zapopan_5, 
                style: style_Zapopan_5,
                popuplayertitle: "Zapopan",
                interactive: true,
    title: 'Zapopan<br />\
    <img src="styles/legend/Zapopan_5_0.png" /> $-<br />\
    <img src="styles/legend/Zapopan_5_1.png" /> 100<br />\
    <img src="styles/legend/Zapopan_5_2.png" /> 2560<br />\
    <img src="styles/legend/Zapopan_5_3.png" /> 300<br />\
    <img src="styles/legend/Zapopan_5_4.png" /> 450<br />\
    <img src="styles/legend/Zapopan_5_5.png" /> 640<br />\
    <img src="styles/legend/Zapopan_5_6.png" /> <br />'
        });
var format_Guadalajara_6 = new ol.format.GeoJSON();
var features_Guadalajara_6 = format_Guadalajara_6.readFeatures(json_Guadalajara_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guadalajara_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guadalajara_6.addFeatures(features_Guadalajara_6);
var lyr_Guadalajara_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guadalajara_6, 
                style: style_Guadalajara_6,
                popuplayertitle: "Guadalajara",
                interactive: true,
    title: 'Guadalajara<br />\
    <img src="styles/legend/Guadalajara_6_0.png" /> $-<br />\
    <img src="styles/legend/Guadalajara_6_1.png" /> 100<br />\
    <img src="styles/legend/Guadalajara_6_2.png" /> 102850<br />\
    <img src="styles/legend/Guadalajara_6_3.png" /> 200<br />\
    <img src="styles/legend/Guadalajara_6_4.png" /> 2560<br />\
    <img src="styles/legend/Guadalajara_6_5.png" /> 300<br />\
    <img src="styles/legend/Guadalajara_6_6.png" /> 3840<br />\
    <img src="styles/legend/Guadalajara_6_7.png" /> 640<br />\
    <img src="styles/legend/Guadalajara_6_8.png" /> 7680<br />\
    <img src="styles/legend/Guadalajara_6_9.png" /> <br />'
        });
var format_Tlajomulco_7 = new ol.format.GeoJSON();
var features_Tlajomulco_7 = format_Tlajomulco_7.readFeatures(json_Tlajomulco_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tlajomulco_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tlajomulco_7.addFeatures(features_Tlajomulco_7);
var lyr_Tlajomulco_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tlajomulco_7, 
                style: style_Tlajomulco_7,
                popuplayertitle: "Tlajomulco",
                interactive: true,
    title: 'Tlajomulco<br />\
    <img src="styles/legend/Tlajomulco_7_0.png" /> $-<br />\
    <img src="styles/legend/Tlajomulco_7_1.png" /> 100<br />\
    <img src="styles/legend/Tlajomulco_7_2.png" /> 300<br />\
    <img src="styles/legend/Tlajomulco_7_3.png" /> 640<br />\
    <img src="styles/legend/Tlajomulco_7_4.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Colonias_1.setVisible(true);lyr_ExteriordelaZMG_2.setVisible(true);lyr_Tlaquepaque_3.setVisible(true);lyr_Tonal_4.setVisible(true);lyr_Zapopan_5.setVisible(true);lyr_Guadalajara_6.setVisible(true);lyr_Tlajomulco_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Colonias_1,lyr_ExteriordelaZMG_2,lyr_Tlaquepaque_3,lyr_Tonal_4,lyr_Zapopan_5,lyr_Guadalajara_6,lyr_Tlajomulco_7];
lyr_Colonias_1.set('fieldAliases', {'CP_COLONIA': 'CP_COLONIA', 'MUNICIPIO': 'MUNICIPIO', 'COLONIA': 'COLONIA', });
lyr_ExteriordelaZMG_2.set('fieldAliases', {'socio': 'socio', 'nombre': 'nombre', 'rfc': 'rfc', 'concepto': 'concepto', 'telefono1f': 'telefono1f', 'actualizac': 'actualizac', 'var7': 'var7', 'telefono1': 'telefono1', 'telefono2': 'telefono2', 'fax1': 'fax1', 'cp': 'cp', 'colonia': 'colonia', 'direccin': 'direccin', 'tipo': 'tipo', 'ciudad': 'ciudad', 'latitud': 'latitud', 'longitus': 'longitus', 'scian': 'scian', 'sciandescr': 'sciandescr', 'correo': 'correo', 'correof': 'correof', });
lyr_Tlaquepaque_3.set('fieldAliases', {'id': 'id', 'Factura': 'Factura', 'Fecha Vige': 'Fecha Vige', 'Socio': 'Socio', 'Nombre': 'Nombre', 'RFC': 'RFC', 'Concepto': 'Concepto', 'Factura_1': 'Factura_1', 'Estatus': 'Estatus', 'Telefono1F': 'Telefono1F', 'Telefono2F': 'Telefono2F', 'Fax1Fiscal': 'Fax1Fiscal', 'Telefono1': 'Telefono1', 'Telefono2': 'Telefono2', 'Fax1': 'Fax1', 'CP': 'CP', 'Colonia': 'Colonia', 'Direcci�': 'Direcci�', 'Tipo': 'Tipo', 'Ciudad': 'Ciudad', 'Domi. Crea': 'Domi. Crea', 'Latitud': 'Latitud', 'Longitus': 'Longitus', 'Tarjeta de': 'Tarjeta de', 'Consejero': 'Consejero', 'Jefe de Se': 'Jefe de Se', 'SCIAN': 'SCIAN', 'SCIAN Desc': 'SCIAN Desc', 'Correo': 'Correo', 'CorreoF': 'CorreoF', 'Notas': 'Notas', });
lyr_Tonal_4.set('fieldAliases', {'Socio': 'Socio', 'Nombre': 'Nombre', 'RFC': 'RFC', 'Concepto': 'Concepto', 'Telefono1F': 'Telefono1F', 'ACTUALIZAC': 'ACTUALIZAC', 'field_7': 'field_7', 'Telefono1': 'Telefono1', 'Telefono2': 'Telefono2', 'Fax1': 'Fax1', 'CP': 'CP', 'Colonia': 'Colonia', 'Direcci�': 'Direcci�', 'Tipo': 'Tipo', 'Ciudad': 'Ciudad', 'Latitud': 'Latitud', 'Longitus': 'Longitus', 'SCIAN': 'SCIAN', 'SCIAN Desc': 'SCIAN Desc', 'Correo': 'Correo', 'CorreoF': 'CorreoF', });
lyr_Zapopan_5.set('fieldAliases', {'Socio': 'Socio', 'Nombre': 'Nombre', 'RFC': 'RFC', 'Concepto': 'Concepto', 'Telefono1F': 'Telefono1F', 'ACTUALIZAC': 'ACTUALIZAC', 'field_7': 'field_7', 'Telefono1': 'Telefono1', 'Telefono2': 'Telefono2', 'Fax1': 'Fax1', 'CP': 'CP', 'Colonia': 'Colonia', 'Direcci�': 'Direcci�', 'Tipo': 'Tipo', 'Ciudad': 'Ciudad', 'Latitud': 'Latitud', 'Longitus': 'Longitus', 'SCIAN': 'SCIAN', 'SCIAN Desc': 'SCIAN Desc', 'Correo': 'Correo', 'CorreoF': 'CorreoF', });
lyr_Guadalajara_6.set('fieldAliases', {'Socio': 'Socio', 'Nombre': 'Nombre', 'RFC': 'RFC', 'Concepto': 'Concepto', 'Telefono1F': 'Telefono1F', 'ACTUALIZAC': 'ACTUALIZAC', 'field_7': 'field_7', 'Telefono1': 'Telefono1', 'Telefono2': 'Telefono2', 'Fax1': 'Fax1', 'CP': 'CP', 'Colonia': 'Colonia', 'Direcci�': 'Direcci�', 'Tipo': 'Tipo', 'Ciudad': 'Ciudad', 'Latitud': 'Latitud', 'Longitus': 'Longitus', 'SCIAN': 'SCIAN', 'SCIAN Desc': 'SCIAN Desc', 'Correo': 'Correo', 'CorreoF': 'CorreoF', });
lyr_Tlajomulco_7.set('fieldAliases', {'Socio': 'Socio', 'Nombre': 'Nombre', 'RFC': 'RFC', 'Concepto': 'Concepto', 'Telefono1F': 'Telefono1F', 'ACTUALIZAC': 'ACTUALIZAC', 'field_7': 'field_7', 'Telefono1': 'Telefono1', 'Telefono2': 'Telefono2', 'Fax1': 'Fax1', 'CP': 'CP', 'Colonia': 'Colonia', 'Direcci�': 'Direcci�', 'Tipo': 'Tipo', 'Ciudad': 'Ciudad', 'Latitud': 'Latitud', 'Longitus': 'Longitus', 'SCIAN': 'SCIAN', 'SCIAN Desc': 'SCIAN Desc', 'Correo': 'Correo', 'CorreoF': 'CorreoF', });
lyr_Colonias_1.set('fieldImages', {'CP_COLONIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COLONIA': 'TextEdit', });
lyr_ExteriordelaZMG_2.set('fieldImages', {'socio': 'TextEdit', 'nombre': 'TextEdit', 'rfc': 'TextEdit', 'concepto': 'TextEdit', 'telefono1f': 'TextEdit', 'actualizac': 'TextEdit', 'var7': 'TextEdit', 'telefono1': 'TextEdit', 'telefono2': 'TextEdit', 'fax1': 'TextEdit', 'cp': 'TextEdit', 'colonia': 'TextEdit', 'direccin': 'TextEdit', 'tipo': 'TextEdit', 'ciudad': 'TextEdit', 'latitud': 'TextEdit', 'longitus': 'TextEdit', 'scian': 'TextEdit', 'sciandescr': 'TextEdit', 'correo': 'TextEdit', 'correof': 'TextEdit', });
lyr_Tlaquepaque_3.set('fieldImages', {'id': 'TextEdit', 'Factura': 'TextEdit', 'Fecha Vige': 'TextEdit', 'Socio': 'TextEdit', 'Nombre': 'TextEdit', 'RFC': 'TextEdit', 'Concepto': 'TextEdit', 'Factura_1': 'TextEdit', 'Estatus': 'TextEdit', 'Telefono1F': 'TextEdit', 'Telefono2F': 'TextEdit', 'Fax1Fiscal': 'TextEdit', 'Telefono1': 'TextEdit', 'Telefono2': 'TextEdit', 'Fax1': 'TextEdit', 'CP': 'TextEdit', 'Colonia': 'TextEdit', 'Direcci�': 'TextEdit', 'Tipo': 'TextEdit', 'Ciudad': 'TextEdit', 'Domi. Crea': 'TextEdit', 'Latitud': 'TextEdit', 'Longitus': 'TextEdit', 'Tarjeta de': 'TextEdit', 'Consejero': 'TextEdit', 'Jefe de Se': 'TextEdit', 'SCIAN': 'TextEdit', 'SCIAN Desc': 'TextEdit', 'Correo': 'TextEdit', 'CorreoF': 'TextEdit', 'Notas': 'TextEdit', });
lyr_Tonal_4.set('fieldImages', {'Socio': 'TextEdit', 'Nombre': 'TextEdit', 'RFC': 'TextEdit', 'Concepto': 'TextEdit', 'Telefono1F': 'TextEdit', 'ACTUALIZAC': 'TextEdit', 'field_7': 'TextEdit', 'Telefono1': 'TextEdit', 'Telefono2': 'TextEdit', 'Fax1': 'TextEdit', 'CP': 'TextEdit', 'Colonia': 'TextEdit', 'Direcci�': 'TextEdit', 'Tipo': 'TextEdit', 'Ciudad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitus': 'TextEdit', 'SCIAN': 'TextEdit', 'SCIAN Desc': 'TextEdit', 'Correo': 'TextEdit', 'CorreoF': 'TextEdit', });
lyr_Zapopan_5.set('fieldImages', {'Socio': 'TextEdit', 'Nombre': 'TextEdit', 'RFC': 'TextEdit', 'Concepto': 'TextEdit', 'Telefono1F': 'TextEdit', 'ACTUALIZAC': 'TextEdit', 'field_7': 'TextEdit', 'Telefono1': 'TextEdit', 'Telefono2': 'TextEdit', 'Fax1': 'TextEdit', 'CP': 'TextEdit', 'Colonia': 'TextEdit', 'Direcci�': 'TextEdit', 'Tipo': 'TextEdit', 'Ciudad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitus': 'TextEdit', 'SCIAN': 'TextEdit', 'SCIAN Desc': 'TextEdit', 'Correo': 'TextEdit', 'CorreoF': 'TextEdit', });
lyr_Guadalajara_6.set('fieldImages', {'Socio': 'TextEdit', 'Nombre': 'TextEdit', 'RFC': 'TextEdit', 'Concepto': 'TextEdit', 'Telefono1F': 'TextEdit', 'ACTUALIZAC': 'TextEdit', 'field_7': 'TextEdit', 'Telefono1': 'TextEdit', 'Telefono2': 'TextEdit', 'Fax1': 'TextEdit', 'CP': 'TextEdit', 'Colonia': 'TextEdit', 'Direcci�': 'TextEdit', 'Tipo': 'TextEdit', 'Ciudad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitus': 'TextEdit', 'SCIAN': 'TextEdit', 'SCIAN Desc': 'TextEdit', 'Correo': 'TextEdit', 'CorreoF': 'TextEdit', });
lyr_Tlajomulco_7.set('fieldImages', {'Socio': 'TextEdit', 'Nombre': 'TextEdit', 'RFC': 'TextEdit', 'Concepto': 'TextEdit', 'Telefono1F': 'TextEdit', 'ACTUALIZAC': 'TextEdit', 'field_7': 'TextEdit', 'Telefono1': 'TextEdit', 'Telefono2': 'TextEdit', 'Fax1': 'TextEdit', 'CP': 'TextEdit', 'Colonia': 'TextEdit', 'Direcci�': 'TextEdit', 'Tipo': 'TextEdit', 'Ciudad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitus': 'TextEdit', 'SCIAN': 'TextEdit', 'SCIAN Desc': 'TextEdit', 'Correo': 'TextEdit', 'CorreoF': 'TextEdit', });
lyr_Colonias_1.set('fieldLabels', {'CP_COLONIA': 'no label', 'MUNICIPIO': 'no label', 'COLONIA': 'inline label - always visible', });
lyr_ExteriordelaZMG_2.set('fieldLabels', {'socio': 'inline label - always visible', 'nombre': 'inline label - always visible', 'rfc': 'inline label - always visible', 'concepto': 'inline label - always visible', 'telefono1f': 'inline label - always visible', 'actualizac': 'no label', 'var7': 'inline label - always visible', 'telefono1': 'inline label - always visible', 'telefono2': 'inline label - always visible', 'fax1': 'inline label - always visible', 'cp': 'inline label - always visible', 'colonia': 'inline label - always visible', 'direccin': 'inline label - always visible', 'tipo': 'no label', 'ciudad': 'inline label - always visible', 'latitud': 'no label', 'longitus': 'no label', 'scian': 'no label', 'sciandescr': 'no label', 'correo': 'inline label - always visible', 'correof': 'inline label - always visible', });
lyr_Tlaquepaque_3.set('fieldLabels', {'id': 'no label', 'Factura': 'no label', 'Fecha Vige': 'no label', 'Socio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'RFC': 'inline label - always visible', 'Concepto': 'no label', 'Factura_1': 'no label', 'Estatus': 'no label', 'Telefono1F': 'inline label - always visible', 'Telefono2F': 'inline label - always visible', 'Fax1Fiscal': 'no label', 'Telefono1': 'inline label - always visible', 'Telefono2': 'inline label - always visible', 'Fax1': 'no label', 'CP': 'inline label - always visible', 'Colonia': 'inline label - always visible', 'Direcci�': 'inline label - always visible', 'Tipo': 'no label', 'Ciudad': 'no label', 'Domi. Crea': 'inline label - always visible', 'Latitud': 'no label', 'Longitus': 'no label', 'Tarjeta de': 'no label', 'Consejero': 'no label', 'Jefe de Se': 'no label', 'SCIAN': 'no label', 'SCIAN Desc': 'no label', 'Correo': 'inline label - always visible', 'CorreoF': 'inline label - always visible', 'Notas': 'no label', });
lyr_Tonal_4.set('fieldLabels', {'Socio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'RFC': 'inline label - always visible', 'Concepto': 'no label', 'Telefono1F': 'inline label - always visible', 'ACTUALIZAC': 'no label', 'field_7': 'no label', 'Telefono1': 'inline label - always visible', 'Telefono2': 'inline label - always visible', 'Fax1': 'no label', 'CP': 'no label', 'Colonia': 'inline label - always visible', 'Direcci�': 'inline label - always visible', 'Tipo': 'no label', 'Ciudad': 'no label', 'Latitud': 'no label', 'Longitus': 'no label', 'SCIAN': 'no label', 'SCIAN Desc': 'no label', 'Correo': 'inline label - always visible', 'CorreoF': 'no label', });
lyr_Zapopan_5.set('fieldLabels', {'Socio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'RFC': 'inline label - always visible', 'Concepto': 'no label', 'Telefono1F': 'inline label - always visible', 'ACTUALIZAC': 'no label', 'field_7': 'no label', 'Telefono1': 'inline label - always visible', 'Telefono2': 'inline label - always visible', 'Fax1': 'inline label - always visible', 'CP': 'no label', 'Colonia': 'inline label - always visible', 'Direcci�': 'inline label - always visible', 'Tipo': 'no label', 'Ciudad': 'no label', 'Latitud': 'no label', 'Longitus': 'no label', 'SCIAN': 'no label', 'SCIAN Desc': 'no label', 'Correo': 'inline label - always visible', 'CorreoF': 'inline label - always visible', });
lyr_Guadalajara_6.set('fieldLabels', {'Socio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'RFC': 'inline label - always visible', 'Concepto': 'no label', 'Telefono1F': 'inline label - always visible', 'ACTUALIZAC': 'no label', 'field_7': 'no label', 'Telefono1': 'inline label - always visible', 'Telefono2': 'inline label - always visible', 'Fax1': 'inline label - always visible', 'CP': 'no label', 'Colonia': 'inline label - always visible', 'Direcci�': 'inline label - always visible', 'Tipo': 'no label', 'Ciudad': 'no label', 'Latitud': 'no label', 'Longitus': 'no label', 'SCIAN': 'no label', 'SCIAN Desc': 'no label', 'Correo': 'inline label - always visible', 'CorreoF': 'no label', });
lyr_Tlajomulco_7.set('fieldLabels', {'Socio': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'RFC': 'inline label - always visible', 'Concepto': 'no label', 'Telefono1F': 'inline label - always visible', 'ACTUALIZAC': 'no label', 'field_7': 'no label', 'Telefono1': 'inline label - always visible', 'Telefono2': 'inline label - always visible', 'Fax1': 'inline label - always visible', 'CP': 'no label', 'Colonia': 'inline label - always visible', 'Direcci�': 'inline label - always visible', 'Tipo': 'no label', 'Ciudad': 'no label', 'Latitud': 'no label', 'Longitus': 'no label', 'SCIAN': 'no label', 'SCIAN Desc': 'no label', 'Correo': 'inline label - always visible', 'CorreoF': 'no label', });
lyr_Tlajomulco_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});