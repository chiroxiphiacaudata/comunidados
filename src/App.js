import logo from './logo.svg';
import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, LayerGroup, Popup, Tooltip, LayersControl, Circle, FeatureGroup} from "react-leaflet";
import LayerControl, { GroupedLayer } from "./control/LayerControl";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import Stories from './narracoes.tsx';
import About from './about.tsx';
import { iconesgoto, iconlixo, iconricre, iconintell, iconspirit, iconmisto, iconabacaxi, iconabobora, iconacerola, iconaipim, iconbanana, iconcana, iconcoco, iconfejiao, icongoiaba, iconmango, iconmilho, iconortalicas, iconquiabo } from "./icons";
import { recreativojs, mistojs, inteljs, espjs } from "./data/cesloc";
import { abacaxijs, aboborajs, acerolajs, aipimjs, bananajs, canajs, cocojs, fejiaojs, goiabajs, mangojs, milhojs, ortalicasjs, quiabojs } from "./data/produtosloc";
import { lixojs, esgotojs } from "./data/monitloc";

const App = () => {

  const center = [-22.59726470576553, -43.42205116187218];
  const outerbounds = [
    [-22.558227658242686, -43.36704153113926],
    [-22.689161883426515, -43.48196881554615],
  ];


  return (

    <><div className="welcome">
      <svg width="800" height="600" stroke="white" strokeWidth="1" fill="#5c5769" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="intermediate" d="M 50 50 C 50 250 200 500 400 500 C 600 500 750 250 750 50 " />
        </defs>
        <text>
          <textPath startOffset="50%" dominantBaseline="middle" textAnchor="middle" xlinkHref="#intermediate">Narrações sobre Tinguá</textPath>
        </text>
      </svg>
    </div><>

    
    <MapContainer
      doubleClickZoom={false}
      center={center}
      zoom={15}
      scrollWheelZoom={true}
      minZoom={14}
      maxZoom={18}
      maxBounds={outerbounds}
      maxBoundsViscosity={1.0}
      style={{ height: "100vh" }}>

      <TileLayer
        url="https://www.alessandromusetta.com/geo/tiles/tingua/tiles/{z}/{x}/{y}.png" />


      {/* Start call layers _______________________________________________________________________________________________________________*/} 
        <LayersControl.Overlay>
          {recreativojs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconricre}>
              </Marker>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {espjs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconspirit} >
                 <Popup>
                    <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {inteljs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconintell} >
                  <Popup>
                  <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {mistojs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconmisto} >
                  <Popup>
                  <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {lixojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconlixo} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {esgotojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconesgoto} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {abacaxijs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconabacaxi} />
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {aboborajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconabobora} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {acerolajs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconacerola} />
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {aipimjs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconaipim} />
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {bananajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconbanana} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {canajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconcana} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {cocojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconcoco} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {fejiaojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconfejiao} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {goiabajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={icongoiaba} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {mangojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconmango} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {milhojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconmilho} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {ortalicasjs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconortalicas} />
              );
            })}
        </LayersControl.Overlay>
        <LayersControl.Overlay>
        {quiabojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconquiabo} />
              );
            })}
        </LayersControl.Overlay>
      {/* End call layers _______________________________________________________________________________________________________________*/} 

      <LayerControl position="topright" >

      {/* Add Layers CES */} 
      <GroupedLayer checked name="Recreação e ecoturismo" group="Serviços culturais e ambientais reconhecidos pela comunidade">
        <LayerGroup>
          {recreativojs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconricre}>
                  <Popup>
                  <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayerGroup>
      </GroupedLayer>

      <GroupedLayer checked name="Inspiração, valores religiosos e espirituais" group="Serviços culturais e ambientais reconhecidos pela comunidade">
        <LayerGroup>
          {espjs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconspirit} >
                 <Popup>
                    <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayerGroup>
      </GroupedLayer>

      <GroupedLayer checked name="Valores estéticos ou senso de lugar" group="Serviços culturais e ambientais reconhecidos pela comunidade">
        <LayerGroup>
          {inteljs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconintell} >
                  <Popup>
                  <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayerGroup>
      </GroupedLayer>

      <GroupedLayer checked name="Serviços culturais mistos" group="Serviços culturais e ambientais reconhecidos pela comunidade">
        <LayerGroup>
          {mistojs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconmisto} >
                  <Popup>
                  <p>{feature.properties.name}</p> 
                  </Popup>
              </Marker>
            );
          })}
        </LayerGroup>
      </GroupedLayer>


      {/* Add Layers env monitoring */}
      <GroupedLayer name="Falta de saneamento básico" group="Monitoramento ambiental comunitário">
          <LayerGroup>
            {esgotojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconesgoto} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>


        <GroupedLayer name="Amontoamentos de lixo jogados nas ruas" group="Monitoramento ambiental comunitário">
          <LayerGroup>
            {lixojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconlixo} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>


      {/* Add Layers products */}
      <GroupedLayer checked name="Abacaxi" group="Agricultura orgânica">
        <LayerGroup>
          {abacaxijs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconabacaxi} />
            );
          })}
        </LayerGroup>
      </GroupedLayer>

        <GroupedLayer checked name="Abóbora" group="Agricultura orgânica">
          <LayerGroup>
            {aboborajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconabobora} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Acerola" group="Agricultura orgânica">
          <LayerGroup>
            {acerolajs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconacerola} />
            );
          })}
          </LayerGroup>
        </GroupedLayer>


        <GroupedLayer checked name="Aipim" group="Agricultura orgânica">
          <LayerGroup>
            {aipimjs.features.map((feature, index) => {
            return (
              <Marker
                key={index}
                position={L.latLng(feature.geometry.coordinates.reverse())}
                icon={iconaipim} />
            );
          })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Banana" group="Agricultura orgânica">
          <LayerGroup>
            {bananajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconbanana} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Cana-de-açúcar" group="Agricultura orgânica">
          <LayerGroup>
            {canajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconcana} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Coco" group="Agricultura orgânica">
          <LayerGroup>
            {cocojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconcoco} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Feijão" group="Agricultura orgânica">
          <LayerGroup>
            {fejiaojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconfejiao} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Goiaba" group="Agricultura orgânica">
          <LayerGroup>
            {goiabajs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={icongoiaba} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Manga" group="Agricultura orgânica">
          <LayerGroup>
            {mangojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconmango} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Milho" group="Agricultura orgânica">
          <LayerGroup>
            {milhojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconmilho} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Hortaliças" group="Agricultura orgânica">
          <LayerGroup>
            {ortalicasjs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconortalicas} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

        <GroupedLayer checked name="Quiabo" group="Agricultura orgânica">
          <LayerGroup>
            {quiabojs.features.map((feature, index) => {
              return (
                <Marker
                  key={index}
                  position={L.latLng(feature.geometry.coordinates.reverse())}
                  icon={iconquiabo} />
              );
            })}
          </LayerGroup>
        </GroupedLayer>

      </LayerControl>

    </MapContainer>

    <div className="buttons">
      <About /><Stories />
    </div>

    <div className="title-container">
      <div className="title">COMUNIDADOS</div>
      {/* <div className="subtitle"><br></br><br></br>Narrações sobre Tinguá</div> */}
    </div></></>
  );

}

export default App;
