import { Button, Center, Flex, Icon, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { HiLocationMarker } from "react-icons/hi";

export const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChnage = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <Flex p={'10px'} minH={'70px'} bg={'black'} justifyContent={'center'} flexDirection={['column', 'row']} gap={['10px', '0px']}>
            <Center px={'15px'}>
            <a href="http://localhost:3001">HTML Tutorial</a>
                <Input
                    onKeyPress={({ key }) => { key === "Enter" ? handleChnage() : undefined }}
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'grey'}
                    _focus={{ 'border': 'none' }}
                    placeholder="Поиск"
                />
                <Button
                    onClick={handleChnage}
                    borderRadius={'50px 50px 50px 50px'}
                    color={'black'}
                    bg={'#696969'}
                    _hover={{ 'bg': 'grey' }}
                >
                    
                </Button>
            </Center>
            <Center px={'10px'}>
                <Button
                    bg={'#808080'}
                    _hover={{ 'bg': '5e82f4' }}
                    color={'black'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
                    onClick={handleLocationData}
                >
                   
                </Button>
            </Center>
        </Flex >
    );
};