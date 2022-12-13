import { Box, Flex, Grid, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../helpers/extraFunctions";
import { getItem } from "../helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../redux/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Map } from "./Map";
import { FaSyncAlt } from "react-icons/fa";
import { Newbox, NewText } from "./SmallComponents";
import { Forcast } from "./Forcast";


export const Deatils = () => {

    const { isLoading, weatherData: data, forcastData, isError } = useSelector((state) => state, shallowEqual);
    const [isRotate, setIsRotate] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        let weather = getItem("weather");
        !weather && dispatch(getWeatherByLocation(toast));
    }, []);

    const handleSyncData = () => {
        setIsRotate(true);
        dispatch(syncData(data.name, toast))
    }

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box maxW={'1400px'} m={'25px auto 5px'} p={'5px'} minH={'550px'}>
                <Grid mt={'75px'} gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '29% 44% 25%']} gap={'50px'}>
                    <Newbox>
                        <Box color={'#000000'} p={'15spx'} textAlign={'left'}>
                            <h1> <font size ="6">  {data.name} </font> </h1>
                            <div> &emsp;&emsp; <font size ="6">{Math.round(data.main.temp - 273)}</font><sup>o</sup>C &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <font size ="6">{data.weather[0].main} </font></div> 
                        </Box>
                        <Box color={'#000000'} p={'50px'}  pl={'10%'} textAlign={'left'}>
                        <h1>Real feel {celsius(data.main.feels_like)}<sup>o</sup>C</h1>
                        <h1>Humidity {data.main.humidity}%</h1>
                        <h1>Wind {(data.wind.speed * 3.6).toFixed(2)} Km/h</h1>
                       </Box>
                    </Newbox>
                    <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '100% 27% 27%']} gap={'25px'} >
                    <Newbox> 
                    <Grid mt={'40px'} templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(4s, 1fr)', 'repeat(8, 1fr)']} gap={'25px'}>
                    {forcastData.map((e, i) => <Forcast key={i} data={e} />)}
                    </Grid>
                    </Newbox>
                    </Grid>

                    <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '75% 2% 2%']} gap={'50px'}>
                        <Newbox>
                           <Box color={'#000000'} p={'50px'}  pl={'10%'} textAlign={'left'}> 
                          <h1>Wind status</h1>
                          </Box>
                          <Box color={'#000000'} p={'100px'}  pl={'10%'} textAlign={'left'}>
                          <h1> {(data.wind.speed * 3.6).toFixed(2)} Km/h </h1>
                          </Box>
                         </Newbox>
                     </Grid>
                        
                  
                    
                </Grid>
                <Grid mt={'100px'} gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '70% 44% 25%']}  gap={'65px'}>
                <Newbox>
                        <Map city={data.name} />
                    </Newbox>
                    <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '45% 5% 2%']} gap={'50px'}>
                        <Newbox>
                           <Box color={'#000000'} p={'50px'}  pl={'10%'} textAlign={'left'}> 
                          <h1>Humidity</h1>
                          </Box>
                          <Box color={'#000000'} p={'100px'}  pl={'10%'} textAlign={'left'}>
                          <h1> {(data.main.humidity )} % </h1>
                          </Box>
                         </Newbox>
                     </Grid>
                </Grid>
               
            </Box >
        </>
    );
};






