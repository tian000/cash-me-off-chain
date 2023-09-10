import {IconButton, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from '@chakra-ui/react'
import {v4 as uuidv4} from "uuid"
import {BiSolidCopy} from "react-icons/bi";

export function NotesTable() {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>eCash</Th>
                        <Th isNumeric>Denomination</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{uuidv4()} &nbsp;
                            <IconButton
                                aria-label='Copy'
                                size='sm'
                                icon={<BiSolidCopy/>}
                            /></Td>
                        <Td isNumeric>0.1 ETH</Td>

                    </Tr>
                    <Tr>
                        <Td>{uuidv4()} &nbsp;
                            <IconButton
                                aria-label='Copy'
                                size='sm'
                                icon={<BiSolidCopy/>}
                            /></Td> <Td isNumeric>0.2 ETH</Td>
                    </Tr>
                    <Tr>
                        <Td>{uuidv4()} &nbsp;
                            <IconButton
                                aria-label='Copy'
                                size='sm'
                                icon={<BiSolidCopy/>}
                            /></Td> <Td isNumeric>0.7 ETH</Td>
                    </Tr>
                    <Tr>
                        <Td fontWeight={"bold"} textAlign="right">Total</Td>
                        <Td fontWeight={"bold"} isNumeric>1.00 ETH</Td>
                    </Tr>
                </Tbody>

            </Table>
        </TableContainer>
    )
}