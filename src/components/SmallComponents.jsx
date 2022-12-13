import { Box, Text } from "@chakra-ui/react";

export const ForcastBox = ({ children }) => {
    return (
        <Box className="zoom" textAlign={'center'} color={'#000000'} overflow={'hidden'} borderRadius={'30px'} shadow={'0px 0px 30px 6px #808080'} h={'200px'}>
            {children}
        </Box>
    );
};

export const Newbox = ({ children }) => {
    return (
        <Box className="zoom" overflow={'hidden'} color={'black'} shadow={'0px 0px 30px 6px #E2E2E2'} borderRadius={'30px'} h={'300px'}>
            {children}
        </Box>
    );
};

export const NewText = ({ children }) => {
    return (
        <Text color={'white'} fontWeight={500} mt={'15px'} fontSize={'18px'}>
            {children}
        </Text>
    );
};