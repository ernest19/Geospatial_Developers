## Web Mapping with QGIS2Web

A wonderful way to put your GIS data online and make it available to other users is through web mapping. Making a map for a website involves quite different steps than making one for a GIS. It can be difficult to produce a web map with the same level of quality as one produced in a GIS because most GIS users aren't web programmers. Fortunately, there are resources available that make it simple to convert your QGIS work into web maps. This section will teach you how to use the QGIS2Web plugin to generate a web map from your QGIS project using the OpenLayers or Leaflet libraries.

### Task
We will create a leaflet web map of the world’s airports.


### Data
We will use the Airports dataset folder.
dataset → airports

### Install Required Plugins

We will be using the following plugins during the training. Go to From the Plugins menu, choose Manage and Install Plugins. Under the All tab, search for the plugin name and click on the Install Plugin button to install it.
- QuickMapServices
- qis2web

<p align="center" >
   <img src="../../images/install_plugin.gif" >
</p>



## Steps 

1. Open QGIS. Using the Browser panel, navigate to the folder containing the downloaded file.  drag the ne_10m_airports.shp into the canvas.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_1.png" >
</p>

2. Now a new layer will be loaded in the canvas, we will now create a map in QGIS that looks and behaves just like we would like in the web map. The plugin qgis2web will use replicate the QGIS settings and automatically create the web map without us knowing about web mapping libraries. When a user clicks on an airport marker, we want an info-window to display useful information about the airport. This information is already present in the attribute table of the ne_10m_airports layers. Right-click on the ne_10m_airports layer and select Properties.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_2.png" >
</p>


3. In the Layer Properties dialog box, switch to Attributes Form. You will notice all the fields name of the layer.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_3.png" >
</p>

4. All fields aren’t relevant to the user, so fields except name, iata_code, type, and Wikipedia are turned off by clicking on the field and change the Widget Type to Hidden.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_4.png" >
</p>

5. In the wikipedia field check the Multiline and HTML so that the link present in this field will be rendered as a hyperlink for the user. After setting the respective Widget Type for each field, click OK.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_5.png" >
</p>


6. Click on the Identify Features button in the toolbar.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_6.png" >
</p>

7. Click on a point, this will fetch the details of the airport in that location, only the type, name, iata_code and wikipedia fields are displayed as other fields are hidden. Also, wikipedia field is highlighted as hyperlink.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_7.png" >
</p>


8. The values in the field type can be a bit more informative. Let’s create a new field called class and add the word Airport after each entry in type field. (i.e) an entry as major will become a Major Airport.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_8.png" >
</p>

9. Now let’s style the layer, click on Open the Layer styling Panel icon and change the Type to Categorized, in Value select class and click Classify.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_9.png" >
</p>

10. Let’s add a base layer for Geo-referencing, Stamen Watercolor would be a nice background map for this project, to add the layer select Web ‣ QuickMapServices ‣ Stamen ‣ Stamen Watercolor. To know more about this plugin visit Using Plugins (QGIS3) tutorials.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_10.png" >
</p>

11. Our map is now ready. This is a good time to save our work. Click on the Save Project icon in toolbar and Enter Airports as the name of the project.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_11.png" >
</p>

12. Now we are ready to export our project to a web map. Install the qgis2web plugin by going to Plugins ‣ Manage and Install Plugin (See Using Plugins (QGIS3) for more details on installing plugins in QGIS). Once the plugin is installed, go to Web ‣ qgis2web ‣ Create a web map.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_12.png" >
</p>

13. Now Export to web map dialog box will appear. This is the primary console for customizing the web layout of your web map. The left-hand panel contains all the configuration options. You can change any setting and preview the updates on the right side by clicking the Update preview. The plugin can export the map using many different web mapping libraries. For this section, we will use the Leaflet library. Make sure you have selected the Leaflet option at the bottom.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_13.png" >
</p>

14. Now lets change the Popup fields of ne_10m_airport layer, change all the fields to inline label, this will give a better view while inspecting the feature in map.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_14.png" >
</p>

15. Now switch to the Appearance tab. Check the following boxes - Add address search, Geolocate user, Highlight on hover. In Add layer list: choose Collapsed. For Layer search choose ne_10m_airport: iata_code field. This option adds a search box where the user to search for an airport with its code. Once made all the changes, click Update preview.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_15.png" >
</p>

16. Now, let’s check the features added to the map, click on the Find (binocular) icon and type DXB and press enter, this will center the map to Dubai international airport.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_16.png" >
</p>

17. Click on the airport icon to explore the information about the airport.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_17.png" >
</p>

18. Click the Search (Magnifying glass) icon, and search for new york and press enter.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_18.png" >
</p>

19. Now the map will be centered to new your city, you can try for any place/address to get the location, this location is retrieved using by geocoding the address. We will also add a measure too to get the linear distance between any given points in the web map. In Measure tool choose Metric. Click Update preview.
<p align="center">
   <img src="../../images/qgis2web/qgis2web_19.png" >
</p>


20. Now lets measure the linear distance in SI units, between EWR and JFK airports. Click on the Measure (ruler) icon and select Create a new measurement. Then, click over the airports once the point is chosen, the latitude and longitude of the point are captured and used to compute the distance, now the distance is displayed in meters.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_20.png" >
</p>

21. Finally Switch to the Export tab and check the Minify GeoJSON files box. This reduces the size of the resulting file. Click on the … next to Exporter
<p align="center">
   <img src="../../images/qgis2web/qgis2web_21.png" >
</p>


22. Choose the desired location (folder) of export and click Select Folder, then click Export button.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_22.png" >
</p>


23. Now all properties, styling, and customized options are exported in a self-contained folder. Upon successful completion, a link will appear in the Progress popup dialog box, click on the link to open the file location.

<p align="center">
   <img src="../../images/qgis2web/qgis2web_23.png" >
</p>


24. This folder will contain all the required file to create a web map. To view the web map click on index.html file.
<p align="center">
   <img Width=800 src="../../images/qgis2web/qgis2web_24.png" >
</p>






## Credit 
[SpatialThoughts](https://spatialthoughts.com/)
