import { useState ,useEffect} from 'react'
import GoogleMapReact from 'google-map-react';

import Head from "next/head";
import SideNavBar from './../component/SideNavbar'
function userAdd() {
  const [latLng, setLatLng] = useState();
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [location,setLocation]=useState("Maps Location")

  const MapMarker = ({ position, maps, map }) => {
    
    useEffect(() => {
        const marker = new maps.Marker({
            position,
            map,
            title: "Hello World!",
        });
      
    }, [position?.lat,position?.lng])
    return (
        <></>
    )
  
  }



  const handleApiLoaded = (map, maps) => {
      setMap(map);
      setMaps(maps);
      map.setOptions({
       
          fullscreenControl: false,
          mapTypeControl: true,
          mapTypeControlOptions: {
            
          
              style: maps.MapTypeControlStyle.DEFAULT,
              position: maps.ControlPosition.TOP_CENTER,
              mapTypeIds: ["roadmap", "satellite"],
          },
          zoomControl: false,
      });
  };


  const defaultProps = {
    center: {
      lat: 41.013281483623146,
      lng: 28.978454052998472
    },
    zoom: 6
  };

  return (
    
    <>
    <Head>
      <title>Test Case - User Add</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/pro.ico" />
    </Head>
    <div className="md:flex min-h-screen relative">
      <SideNavBar />
      <div className="md:flex w-full ">
    
          <div className='w-full h-full p-20'>
          <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAhkyqtF5czuz-KzzOv3Z8skkl2b_9koDk" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onClick={(e) => {setLatLng(e)}}
                onGoogleApiLoaded={({ map, maps }) => {
                    handleApiLoaded(map, maps);
                }}
                
            >
                {!!latLng ?
                    <>
                        <MapMarker map={map} maps={maps} position={latLng}></MapMarker>
                    </> : <></>

                }
            </GoogleMapReact>

          </div>
          </div>
    </div>
  </>
  )
}

export default userAdd