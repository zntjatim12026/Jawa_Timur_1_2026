ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([1301259.858954, 9121544.653547, 1358085.674512, 9192181.571260]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ZonaAwal_Lamongan_3 = new ol.format.GeoJSON();
var features_ZonaAwal_Lamongan_3 = format_ZonaAwal_Lamongan_3.readFeatures(json_ZonaAwal_Lamongan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_ZonaAwal_Lamongan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaAwal_Lamongan_3.addFeatures(features_ZonaAwal_Lamongan_3);
var lyr_ZonaAwal_Lamongan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaAwal_Lamongan_3, 
                style: style_ZonaAwal_Lamongan_3,
                popuplayertitle: 'Zona Awal_Lamongan',
                interactive: true,
    title: 'Zona Awal_Lamongan<br />\
    <img src="styles/legend/ZonaAwal_Lamongan_3_0.png" /> 1<br />\
    <img src="styles/legend/ZonaAwal_Lamongan_3_1.png" /> 2<br />' });
var format_DataSurvey_4 = new ol.format.GeoJSON();
var features_DataSurvey_4 = format_DataSurvey_4.readFeatures(json_DataSurvey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_DataSurvey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataSurvey_4.addFeatures(features_DataSurvey_4);
var lyr_DataSurvey_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataSurvey_4, 
                style: style_DataSurvey_4,
                popuplayertitle: 'Data Survey',
                interactive: true,
    title: 'Data Survey<br />\
    <img src="styles/legend/DataSurvey_4_0.png" /> 1<br />\
    <img src="styles/legend/DataSurvey_4_1.png" /> 2<br />' });
var format_AOIMojokerto_5 = new ol.format.GeoJSON();
var features_AOIMojokerto_5 = format_AOIMojokerto_5.readFeatures(json_AOIMojokerto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_AOIMojokerto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOIMojokerto_5.addFeatures(features_AOIMojokerto_5);
var lyr_AOIMojokerto_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOIMojokerto_5, 
                style: style_AOIMojokerto_5,
                popuplayertitle: 'AOI Mojokerto',
                interactive: false,
                title: '<img src="styles/legend/AOIMojokerto_5.png" /> AOI Mojokerto'
            });
var format_Kecamatan_jawa_Timur_6 = new ol.format.GeoJSON();
var features_Kecamatan_jawa_Timur_6 = format_Kecamatan_jawa_Timur_6.readFeatures(json_Kecamatan_jawa_Timur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Kecamatan_jawa_Timur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_jawa_Timur_6.addFeatures(features_Kecamatan_jawa_Timur_6);
var lyr_Kecamatan_jawa_Timur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_jawa_Timur_6, 
                style: style_Kecamatan_jawa_Timur_6,
                popuplayertitle: 'Kecamatan_jawa_Timur',
                interactive: false,
                title: '<img src="styles/legend/Kecamatan_jawa_Timur_6.png" /> Kecamatan_jawa_Timur'
            });
var format_Jalan_Mojokerto_RBI_Cut_7 = new ol.format.GeoJSON();
var features_Jalan_Mojokerto_RBI_Cut_7 = format_Jalan_Mojokerto_RBI_Cut_7.readFeatures(json_Jalan_Mojokerto_RBI_Cut_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Jalan_Mojokerto_RBI_Cut_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Mojokerto_RBI_Cut_7.addFeatures(features_Jalan_Mojokerto_RBI_Cut_7);
var lyr_Jalan_Mojokerto_RBI_Cut_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Mojokerto_RBI_Cut_7, 
                style: style_Jalan_Mojokerto_RBI_Cut_7,
                popuplayertitle: 'Jalan_Mojokerto_RBI_Cut',
                interactive: false,
    title: 'Jalan_Mojokerto_RBI_Cut<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_3.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_4.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_5.png" /> Jalan Nasional<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_6.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_7.png" /> Jalan Tol<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_8.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/Jalan_Mojokerto_RBI_Cut_7_9.png" /> <br />' });
var format_BatasDesaAPL_8 = new ol.format.GeoJSON();
var features_BatasDesaAPL_8 = format_BatasDesaAPL_8.readFeatures(json_BatasDesaAPL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_BatasDesaAPL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaAPL_8.addFeatures(features_BatasDesaAPL_8);
var lyr_BatasDesaAPL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaAPL_8, 
                style: style_BatasDesaAPL_8,
                popuplayertitle: 'Batas Desa APL',
                interactive: false,
                title: '<img src="styles/legend/BatasDesaAPL_8.png" /> Batas Desa APL'
            });
var group_DATAPENDUKUNG = new ol.layer.Group({
                                layers: [lyr_Kecamatan_jawa_Timur_6,lyr_Jalan_Mojokerto_RBI_Cut_7,lyr_BatasDesaAPL_8,],
                                fold: 'close',
                                title: 'DATA PENDUKUNG'});
var group_DATAMOJOKERTO = new ol.layer.Group({
                                layers: [lyr_ZonaAwal_Lamongan_3,lyr_DataSurvey_4,lyr_AOIMojokerto_5,],
                                fold: 'close',
                                title: 'DATA MOJOKERTO'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'open',
                                title: 'BASEMAP'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_ZonaAwal_Lamongan_3.setVisible(true);lyr_DataSurvey_4.setVisible(true);lyr_AOIMojokerto_5.setVisible(true);lyr_Kecamatan_jawa_Timur_6.setVisible(true);lyr_Jalan_Mojokerto_RBI_Cut_7.setVisible(true);lyr_BatasDesaAPL_8.setVisible(true);
var layersList = [group_BASEMAP,group_DATAMOJOKERTO,group_DATAPENDUKUNG];
lyr_ZonaAwal_Lamongan_3.set('fieldAliases', {'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SKALA': 'SKALA', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'NOZN': 'NOZN', 'JNSZN': 'JNSZN', 'PENGGUNAAN': 'PENGGUNAAN', 'HISTZONE': 'HISTZONE', 'JMLSMPL': 'JMLSMPL', 'JENISSAMPE': 'JENISSAMPE', 'BEDA_ZONA': 'BEDA_ZONA', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'JMLNILAI': 'JMLNILAI', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'NILBULAT': 'NILBULAT', 'Luas_M2': 'Luas_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Surveyor': 'Surveyor', 'Note': 'Note', });
lyr_DataSurvey_4.set('fieldAliases', {'Nomor Samp': 'Nomor Samp', 'No Marking': 'No Marking', 'Nomor Iden': 'Nomor Iden', 'Nama Surve': 'Nama Surve', 'Tanggal Pe': 'Tanggal Pe', 'Bangunan (': 'Bangunan (', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Y': 'Y', 'X': 'X', 'Status Kep': 'Status Kep', 'Jenis Data': 'Jenis Data', 'Tanggal _1': 'Tanggal _1', 'Harga Pena': 'Harga Pena', 'Luas tanah': 'Luas tanah', 'Lebar Depa': 'Lebar Depa', 'Panjang Ke': 'Panjang Ke', 'Bentuk Tan': 'Bentuk Tan', 'Elevasi da': 'Elevasi da', 'Letak Tana': 'Letak Tana', 'Kelas Jala': 'Kelas Jala', 'Lebar Jala': 'Lebar Jala', 'Aksesibili': 'Aksesibili', 'Drainase': 'Drainase', 'Utilitas': 'Utilitas', 'Fasilitas': 'Fasilitas', 'Zoning/ Pe': 'Zoning/ Pe', 'Luas Bangu': 'Luas Bangu', 'Jenis': 'Jenis', 'Jumlah Lan': 'Jumlah Lan', 'Tahun Pemb': 'Tahun Pemb', 'Tahun Reno': 'Tahun Reno', 'Konstruksi': 'Konstruksi', 'Konstruk_1': 'Konstruk_1', 'Atap': 'Atap', 'Dinding': 'Dinding', 'LangitLang': 'LangitLang', 'Lantai': 'Lantai', 'Pagar': 'Pagar', 'Panjang Pa': 'Panjang Pa', 'Luas Carpo': 'Luas Carpo', 'Pintu/Jend': 'Pintu/Jend', 'Jumlah Fas': 'Jumlah Fas', 'Keadaan Fi': 'Keadaan Fi', 'Biaya Per': 'Biaya Per', 'RCN': 'RCN', 'Tahun Peni': 'Tahun Peni', 'Umur Efekt': 'Umur Efekt', 'Penyusutan': 'Penyusutan', 'Nilai Bang': 'Nilai Bang', 'Harga Peny': 'Harga Peny', 'Nilai Ba_1': 'Nilai Ba_1', 'Harga Tana': 'Harga Tana', 'Penyesuaia': 'Penyesuaia', 'Penyesua_1': 'Penyesua_1', 'Nilai Tana': 'Nilai Tana', 'Nilai Ta_1': 'Nilai Ta_1', 'Akses': 'Akses', 'Penyusut_1': 'Penyusut_1', 'Penyusut_2': 'Penyusut_2', 'Keterangan': 'Keterangan', 'Foto1': 'Foto1', 'Foto2': 'Foto2', 'Keterang_1': 'Keterang_1', 'Pembanding': 'Pembanding', 'Penyusut_3': 'Penyusut_3', 'field_68': 'field_68', 'Penyusut_4': 'Penyusut_4', 'field_70': 'field_70', 'N.Sementar': 'N.Sementar', 'No Urut En': 'No Urut En', 'Responden': 'Responden', 'Konstanta': 'Konstanta', 'Catatan': 'Catatan', 'ID Survei': 'ID Survei', 'Tidak Digu': 'Tidak Digu', 'Zoning Asa': 'Zoning Asa', });
lyr_AOIMojokerto_5.set('fieldAliases', {'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'luas': 'luas', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Kecamatan_jawa_Timur_6.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Operator': 'Operator', });
lyr_Jalan_Mojokerto_RBI_Cut_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasDesaAPL_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas__HA_': 'Luas__HA_', });
lyr_ZonaAwal_Lamongan_3.set('fieldImages', {'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SKALA': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'NOZN': 'TextEdit', 'JNSZN': 'Range', 'PENGGUNAAN': 'TextEdit', 'HISTZONE': 'TextEdit', 'JMLSMPL': 'TextEdit', 'JENISSAMPE': 'TextEdit', 'BEDA_ZONA': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'JMLNILAI': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'NILBULAT': 'TextEdit', 'Luas_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surveyor': 'TextEdit', 'Note': 'TextEdit', });
lyr_DataSurvey_4.set('fieldImages', {'Nomor Samp': 'TextEdit', 'No Marking': 'TextEdit', 'Nomor Iden': 'TextEdit', 'Nama Surve': 'TextEdit', 'Tanggal Pe': 'DateTime', 'Bangunan (': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Status Kep': 'TextEdit', 'Jenis Data': 'TextEdit', 'Tanggal _1': 'DateTime', 'Harga Pena': 'TextEdit', 'Luas tanah': 'TextEdit', 'Lebar Depa': 'TextEdit', 'Panjang Ke': 'TextEdit', 'Bentuk Tan': 'TextEdit', 'Elevasi da': 'TextEdit', 'Letak Tana': 'TextEdit', 'Kelas Jala': 'TextEdit', 'Lebar Jala': 'TextEdit', 'Aksesibili': 'TextEdit', 'Drainase': 'TextEdit', 'Utilitas': 'TextEdit', 'Fasilitas': 'TextEdit', 'Zoning/ Pe': 'TextEdit', 'Luas Bangu': 'TextEdit', 'Jenis': 'TextEdit', 'Jumlah Lan': 'TextEdit', 'Tahun Pemb': 'TextEdit', 'Tahun Reno': 'TextEdit', 'Konstruksi': 'TextEdit', 'Konstruk_1': 'TextEdit', 'Atap': 'TextEdit', 'Dinding': 'TextEdit', 'LangitLang': 'TextEdit', 'Lantai': 'TextEdit', 'Pagar': 'TextEdit', 'Panjang Pa': 'TextEdit', 'Luas Carpo': 'TextEdit', 'Pintu/Jend': 'TextEdit', 'Jumlah Fas': 'TextEdit', 'Keadaan Fi': 'TextEdit', 'Biaya Per': 'TextEdit', 'RCN': 'TextEdit', 'Tahun Peni': 'TextEdit', 'Umur Efekt': 'TextEdit', 'Penyusutan': 'TextEdit', 'Nilai Bang': 'TextEdit', 'Harga Peny': 'TextEdit', 'Nilai Ba_1': 'TextEdit', 'Harga Tana': 'TextEdit', 'Penyesuaia': 'TextEdit', 'Penyesua_1': 'TextEdit', 'Nilai Tana': 'TextEdit', 'Nilai Ta_1': 'TextEdit', 'Akses': 'TextEdit', 'Penyusut_1': 'TextEdit', 'Penyusut_2': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto1': 'TextEdit', 'Foto2': 'TextEdit', 'Keterang_1': 'TextEdit', 'Pembanding': 'TextEdit', 'Penyusut_3': 'TextEdit', 'field_68': 'TextEdit', 'Penyusut_4': 'TextEdit', 'field_70': 'TextEdit', 'N.Sementar': 'TextEdit', 'No Urut En': 'TextEdit', 'Responden': 'TextEdit', 'Konstanta': 'TextEdit', 'Catatan': 'TextEdit', 'ID Survei': 'TextEdit', 'Tidak Digu': 'TextEdit', 'Zoning Asa': 'TextEdit', });
lyr_AOIMojokerto_5.set('fieldImages', {'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'luas': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kecamatan_jawa_Timur_6.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Operator': 'TextEdit', });
lyr_Jalan_Mojokerto_RBI_Cut_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'DateTime', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BatasDesaAPL_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas__HA_': 'TextEdit', });
lyr_ZonaAwal_Lamongan_3.set('fieldLabels', {'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'SKALA': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'NOZN': 'header label - always visible', 'JNSZN': 'header label - always visible', 'PENGGUNAAN': 'header label - always visible', 'HISTZONE': 'hidden field', 'JMLSMPL': 'hidden field', 'JENISSAMPE': 'hidden field', 'BEDA_ZONA': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'JMLNILAI': 'hidden field', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'NILBULAT': 'hidden field', 'Luas_M2': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'Surveyor': 'header label - always visible', 'Note': 'header label - always visible', });
lyr_DataSurvey_4.set('fieldLabels', {'Nomor Samp': 'header label - always visible', 'No Marking': 'hidden field', 'Nomor Iden': 'hidden field', 'Nama Surve': 'header label - always visible', 'Tanggal Pe': 'header label - always visible', 'Bangunan (': 'hidden field', 'Alamat': 'hidden field', 'Kelurahan': 'hidden field', 'Kecamatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Status Kep': 'hidden field', 'Jenis Data': 'hidden field', 'Tanggal _1': 'header label - always visible', 'Harga Pena': 'header label - always visible', 'Luas tanah': 'hidden field', 'Lebar Depa': 'hidden field', 'Panjang Ke': 'hidden field', 'Bentuk Tan': 'hidden field', 'Elevasi da': 'hidden field', 'Letak Tana': 'hidden field', 'Kelas Jala': 'hidden field', 'Lebar Jala': 'hidden field', 'Aksesibili': 'hidden field', 'Drainase': 'hidden field', 'Utilitas': 'hidden field', 'Fasilitas': 'hidden field', 'Zoning/ Pe': 'header label - always visible', 'Luas Bangu': 'hidden field', 'Jenis': 'hidden field', 'Jumlah Lan': 'hidden field', 'Tahun Pemb': 'hidden field', 'Tahun Reno': 'hidden field', 'Konstruksi': 'hidden field', 'Konstruk_1': 'hidden field', 'Atap': 'hidden field', 'Dinding': 'hidden field', 'LangitLang': 'hidden field', 'Lantai': 'hidden field', 'Pagar': 'hidden field', 'Panjang Pa': 'hidden field', 'Luas Carpo': 'hidden field', 'Pintu/Jend': 'hidden field', 'Jumlah Fas': 'hidden field', 'Keadaan Fi': 'hidden field', 'Biaya Per': 'hidden field', 'RCN': 'hidden field', 'Tahun Peni': 'hidden field', 'Umur Efekt': 'hidden field', 'Penyusutan': 'hidden field', 'Nilai Bang': 'hidden field', 'Harga Peny': 'hidden field', 'Nilai Ba_1': 'hidden field', 'Harga Tana': 'hidden field', 'Penyesuaia': 'hidden field', 'Penyesua_1': 'hidden field', 'Nilai Tana': 'hidden field', 'Nilai Ta_1': 'header label - always visible', 'Akses': 'hidden field', 'Penyusut_1': 'hidden field', 'Penyusut_2': 'hidden field', 'Keterangan': 'hidden field', 'Foto1': 'hidden field', 'Foto2': 'hidden field', 'Keterang_1': 'hidden field', 'Pembanding': 'hidden field', 'Penyusut_3': 'hidden field', 'field_68': 'hidden field', 'Penyusut_4': 'hidden field', 'field_70': 'hidden field', 'N.Sementar': 'hidden field', 'No Urut En': 'hidden field', 'Responden': 'hidden field', 'Konstanta': 'hidden field', 'Catatan': 'hidden field', 'ID Survei': 'hidden field', 'Tidak Digu': 'hidden field', 'Zoning Asa': 'hidden field', });
lyr_AOIMojokerto_5.set('fieldLabels', {'WADMKK': 'no label', 'WADMPR': 'no label', 'luas': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Kecamatan_jawa_Timur_6.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Operator': 'no label', });
lyr_Jalan_Mojokerto_RBI_Cut_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BatasDesaAPL_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas__HA_': 'no label', });
lyr_BatasDesaAPL_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});