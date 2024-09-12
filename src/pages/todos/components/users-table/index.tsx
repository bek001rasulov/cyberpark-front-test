import {ActionIcon, Badge, Flex, Table} from "@mantine/core";
import {TableInner, TableWrapper} from "./style";
import {BiEditAlt} from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md";

export default function TodosTable({data, setId, open, deleteTodo}: any) {
    return (
        <TableWrapper type="always" scrollbarSize={11}>
            <TableInner>
                <Table stickyHeader highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>No</Table.Th>
                            <Table.Th>Todo</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            data?.map((item: any) => (
                                <Table.Tr key={item?.id}>
                                    <Table.Td>{item?.id}</Table.Td>
                                    <Table.Td>{item?.todo}</Table.Td>
                                    <Table.Td>
                                        {
                                            item?.completed
                                                ?
                                                <Badge variant="light" color="blue" radius="md" display={'flex'}>Completed</Badge>
                                                :
                                                <Badge variant="light" color="orange" radius="md" display={'flex'}>Uncompleted</Badge>
                                        }
                                    </Table.Td>
                                    <Table.Td>
                                        <Flex gap={18}>
                                            <ActionIcon variant="light" aria-label="Edit" onClick={() => {
                                                setId(item?.id);
                                                open();
                                            }}>
                                                <BiEditAlt />
                                            </ActionIcon>
                                            <ActionIcon variant="light" color={'red'} aria-label="Delete" onClick={() => deleteTodo(item?.id)}>
                                                <MdDeleteOutline />
                                            </ActionIcon>
                                        </Flex>
                                    </Table.Td>
                                </Table.Tr>
                            ))
                        }
                    </Table.Tbody>
                </Table>
            </TableInner>
        </TableWrapper>
    );
}
