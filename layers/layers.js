var wms_layers = [];

var format_COMMUNES_0 = new ol.format.GeoJSON();
var features_COMMUNES_0 = format_COMMUNES_0.readFeatures(json_COMMUNES_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNES_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNES_0.addFeatures(features_COMMUNES_0);
var lyr_COMMUNES_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNES_0, 
                style: style_COMMUNES_0,
                interactive: true,
                title: '<img src="styles/legend/COMMUNES_0.png" /> COMMUNES'
            });
var format_SMMA_1 = new ol.format.GeoJSON();
var features_SMMA_1 = format_SMMA_1.readFeatures(json_SMMA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMMA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMMA_1.addFeatures(features_SMMA_1);
var lyr_SMMA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMMA_1, 
                style: style_SMMA_1,
                interactive: true,
                title: '<img src="styles/legend/SMMA_1.png" /> SMMA'
            });
var format_HYDROGRAPHIE_2 = new ol.format.GeoJSON();
var features_HYDROGRAPHIE_2 = format_HYDROGRAPHIE_2.readFeatures(json_HYDROGRAPHIE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HYDROGRAPHIE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDROGRAPHIE_2.addFeatures(features_HYDROGRAPHIE_2);
var lyr_HYDROGRAPHIE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDROGRAPHIE_2, 
                style: style_HYDROGRAPHIE_2,
                interactive: true,
                title: '<img src="styles/legend/HYDROGRAPHIE_2.png" /> HYDROGRAPHIE'
            });
var format_PLANS_D_EAU_3 = new ol.format.GeoJSON();
var features_PLANS_D_EAU_3 = format_PLANS_D_EAU_3.readFeatures(json_PLANS_D_EAU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANS_D_EAU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANS_D_EAU_3.addFeatures(features_PLANS_D_EAU_3);
var lyr_PLANS_D_EAU_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLANS_D_EAU_3, 
                style: style_PLANS_D_EAU_3,
                interactive: true,
                title: '<img src="styles/legend/PLANS_D_EAU_3.png" /> PLANS_D_EAU'
            });
var format_PROJETS_PONCTUELS_4 = new ol.format.GeoJSON();
var features_PROJETS_PONCTUELS_4 = format_PROJETS_PONCTUELS_4.readFeatures(json_PROJETS_PONCTUELS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROJETS_PONCTUELS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJETS_PONCTUELS_4.addFeatures(features_PROJETS_PONCTUELS_4);cluster_PROJETS_PONCTUELS_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PROJETS_PONCTUELS_4
});
var lyr_PROJETS_PONCTUELS_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PROJETS_PONCTUELS_4, 
                style: style_PROJETS_PONCTUELS_4,
                interactive: true,
                title: '<img src="styles/legend/PROJETS_PONCTUELS_4.png" /> PROJETS_PONCTUELS'
            });

lyr_COMMUNES_0.setVisible(true);lyr_SMMA_1.setVisible(true);lyr_HYDROGRAPHIE_2.setVisible(true);lyr_PLANS_D_EAU_3.setVisible(true);lyr_PROJETS_PONCTUELS_4.setVisible(true);
var layersList = [lyr_COMMUNES_0,lyr_SMMA_1,lyr_HYDROGRAPHIE_2,lyr_PLANS_D_EAU_3,lyr_PROJETS_PONCTUELS_4];
lyr_COMMUNES_0.set('fieldAliases', {'NOM': 'NOM', });
lyr_SMMA_1.set('fieldAliases', {'ID': 'ID', 'SUPERFICIE': 'SUPERFICIE', });
lyr_HYDROGRAPHIE_2.set('fieldAliases', {'NOM': 'NOM', 'LINEAIRE': 'LINEAIRE', });
lyr_PLANS_D_EAU_3.set('fieldAliases', {'TopoOH': 'TopoOH', });
lyr_PROJETS_PONCTUELS_4.set('fieldAliases', {'EPCI': 'EPCI', 'AVANCEMENT': 'AVANCEMENT', 'NOM': 'NOM', });
lyr_COMMUNES_0.set('fieldImages', {'NOM': '', });
lyr_SMMA_1.set('fieldImages', {'ID': 'TextEdit', 'SUPERFICIE': '', });
lyr_HYDROGRAPHIE_2.set('fieldImages', {'NOM': 'TextEdit', 'LINEAIRE': 'TextEdit', });
lyr_PLANS_D_EAU_3.set('fieldImages', {'TopoOH': 'TextEdit', });
lyr_PROJETS_PONCTUELS_4.set('fieldImages', {'EPCI': 'TextEdit', 'AVANCEMENT': 'TextEdit', 'NOM': 'TextEdit', });
lyr_COMMUNES_0.set('fieldLabels', {'NOM': 'header label', });
lyr_SMMA_1.set('fieldLabels', {'ID': 'no label', 'SUPERFICIE': 'no label', });
lyr_HYDROGRAPHIE_2.set('fieldLabels', {'NOM': 'header label', 'LINEAIRE': 'inline label', });
lyr_PLANS_D_EAU_3.set('fieldLabels', {'TopoOH': 'no label', });
lyr_PROJETS_PONCTUELS_4.set('fieldLabels', {'EPCI': 'inline label', 'AVANCEMENT': 'inline label', 'NOM': 'header label', });
lyr_PROJETS_PONCTUELS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});