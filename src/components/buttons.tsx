import {Button, Flex} from "@chakra-ui/react";

import {Link} from '@chakra-ui/next-js'

export function Buttons() {
    return (
        <Flex direction={"row"} gap={"2"} padding={"2"}>
            <Link href='/mint' color='blue.400' _hover={{color: 'blue.500'}}>
                <Button colorScheme='blue'>Mint</Button>
            </Link>

            <Link href='/redeem' color='blue.400' _hover={{color: 'blue.500'}}>
                <Button colorScheme='blue'>Redeem</Button>
            </Link>

            <Link href='/receive' color='blue.400' _hover={{color: 'blue.500'}}>
                <Button colorScheme='blue'>Receive</Button>
            </Link>
        </Flex>
    )
}