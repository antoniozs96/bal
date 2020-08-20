var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html"> ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Alcaldia_usar_1 = new ol.format.GeoJSON();
var features_Alcaldia_usar_1 = format_Alcaldia_usar_1.readFeatures(json_Alcaldia_usar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcaldia_usar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcaldia_usar_1.addFeatures(features_Alcaldia_usar_1);
var lyr_Alcaldia_usar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alcaldia_usar_1, 
                style: style_Alcaldia_usar_1,
                interactive: true,
    title: 'Alcaldia_usar<br />\
    <img src="styles/legend/Alcaldia_usar_1_0.png" /> 2 - 9 <br />\
    <img src="styles/legend/Alcaldia_usar_1_1.png" /> 9 - 27 <br />\
    <img src="styles/legend/Alcaldia_usar_1_2.png" /> 27 - 31 <br />\
    <img src="styles/legend/Alcaldia_usar_1_3.png" /> 31 - 66 <br />\
    <img src="styles/legend/Alcaldia_usar_1_4.png" /> 66 - 90 <br />\
    <img src="styles/legend/Alcaldia_usar_1_5.png" /> 90 - 179 <br />'
        });
var format_bal_2 = new ol.format.GeoJSON();
var features_bal_2 = format_bal_2.readFeatures(json_bal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bal_2.addFeatures(features_bal_2);
var lyr_bal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bal_2, 
                style: style_bal_2,
                interactive: true,
                title: '<img src="styles/legend/bal_2.png" /> bal'
            });

lyr_GooglecnSatellite_0.setVisible(true);lyr_Alcaldia_usar_1.setVisible(true);lyr_bal_2.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_Alcaldia_usar_1,lyr_bal_2];
lyr_Alcaldia_usar_1.set('fieldAliases', {'mslink': 'mslink', 'text': 'text', 'FID_1': 'FID_1', 'mslink_1': 'mslink_1', 'text_1': 'text_1', 'N°NB': 'N°NB', });
lyr_bal_2.set('fieldAliases', {'id': 'id', 'mslink': 'mslink', 'clave': 'clave', 'REGION': 'REGION', 'AREA': 'AREA', 'ALCALDIA': 'ALCALDIA', 'X_MIN_A': 'X_MIN_A', 'X_MAX_A': 'X_MAX_A', 'Y_MIN_A': 'Y_MIN_A', 'Y_MAX_A': 'Y_MAX_A', 'COLONIA': 'COLONIA', 'X_MIN_C': 'X_MIN_C', 'X_MAX_C': 'X_MAX_C', 'Y_MIN_C': 'Y_MIN_C', 'Y_MAX_C': 'Y_MAX_C', 'X_MIN_MAN': 'X_MIN_MAN', 'X_MAX_MAN': 'X_MAX_MAN', 'Y_MAX_MAN': 'Y_MAX_MAN', 'Y_MIN_MAN': 'Y_MIN_MAN', 'USO_CSTR': 'USO_CSTR', 'REV': 'REV', 'URL': 'URL', 'R_CODTIPOI': 'R_CODTIPOI', 'R_DESC_COD': 'R_DESC_COD', 'R_COD_USO': 'R_COD_USO', 'R_DESCRIPC': 'R_DESCRIPC', 'R_SUPERFIC': 'R_SUPERFIC', 'R_SUPERF_1': 'R_SUPERF_1', 'R_SUPERF_2': 'R_SUPERF_2', 'R_VALOR_CA': 'R_VALOR_CA', 'R_IMPUESTO': 'R_IMPUESTO', 'R_PROPIETA': 'R_PROPIETA', 'R_DIRECCIO': 'R_DIRECCIO', 'R_TEXTO_CO': 'R_TEXTO_CO', 'R_DESCRI_1': 'R_DESCRI_1', 'R_COLONIA': 'R_COLONIA', 'R_COD_MARC': 'R_COD_MARC', 'R_DESC_C_1': 'R_DESC_C_1', 'R_CODTIPO_': 'R_CODTIPO_', 'R_DESC_C_2': 'R_DESC_C_2', });
lyr_Alcaldia_usar_1.set('fieldImages', {'mslink': 'TextEdit', 'text': 'TextEdit', 'FID_1': 'TextEdit', 'mslink_1': 'TextEdit', 'text_1': 'TextEdit', 'N°NB': 'TextEdit', });
lyr_bal_2.set('fieldImages', {'id': '', 'mslink': '', 'clave': '', 'REGION': '', 'AREA': '', 'ALCALDIA': '', 'X_MIN_A': '', 'X_MAX_A': '', 'Y_MIN_A': '', 'Y_MAX_A': '', 'COLONIA': '', 'X_MIN_C': '', 'X_MAX_C': '', 'Y_MIN_C': '', 'Y_MAX_C': '', 'X_MIN_MAN': '', 'X_MAX_MAN': '', 'Y_MAX_MAN': '', 'Y_MIN_MAN': '', 'USO_CSTR': '', 'REV': '', 'URL': '', 'R_CODTIPOI': '', 'R_DESC_COD': '', 'R_COD_USO': '', 'R_DESCRIPC': '', 'R_SUPERFIC': '', 'R_SUPERF_1': '', 'R_SUPERF_2': '', 'R_VALOR_CA': '', 'R_IMPUESTO': '', 'R_PROPIETA': '', 'R_DIRECCIO': '', 'R_TEXTO_CO': '', 'R_DESCRI_1': '', 'R_COLONIA': '', 'R_COD_MARC': '', 'R_DESC_C_1': '', 'R_CODTIPO_': '', 'R_DESC_C_2': '', });
lyr_Alcaldia_usar_1.set('fieldLabels', {'mslink': 'no label', 'text': 'no label', 'FID_1': 'no label', 'mslink_1': 'no label', 'text_1': 'no label', 'N°NB': 'no label', });
lyr_bal_2.set('fieldLabels', {'id': 'no label', 'mslink': 'no label', 'clave': 'no label', 'REGION': 'no label', 'AREA': 'no label', 'ALCALDIA': 'no label', 'X_MIN_A': 'no label', 'X_MAX_A': 'no label', 'Y_MIN_A': 'no label', 'Y_MAX_A': 'no label', 'COLONIA': 'no label', 'X_MIN_C': 'no label', 'X_MAX_C': 'no label', 'Y_MIN_C': 'no label', 'Y_MAX_C': 'no label', 'X_MIN_MAN': 'no label', 'X_MAX_MAN': 'no label', 'Y_MAX_MAN': 'no label', 'Y_MIN_MAN': 'no label', 'USO_CSTR': 'no label', 'REV': 'no label', 'URL': 'no label', 'R_CODTIPOI': 'no label', 'R_DESC_COD': 'no label', 'R_COD_USO': 'no label', 'R_DESCRIPC': 'no label', 'R_SUPERFIC': 'no label', 'R_SUPERF_1': 'no label', 'R_SUPERF_2': 'no label', 'R_VALOR_CA': 'no label', 'R_IMPUESTO': 'no label', 'R_PROPIETA': 'no label', 'R_DIRECCIO': 'no label', 'R_TEXTO_CO': 'no label', 'R_DESCRI_1': 'no label', 'R_COLONIA': 'no label', 'R_COD_MARC': 'no label', 'R_DESC_C_1': 'no label', 'R_CODTIPO_': 'no label', 'R_DESC_C_2': 'no label', });
lyr_bal_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});