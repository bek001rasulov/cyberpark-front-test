import { Table } from "@mantine/core";
import { TableInner, TableWrapper } from "./style";

export default function UsersTable({ data }: any) {
    return (
        <TableWrapper type="always" scrollbarSize={11}>
            <TableInner>
                <Table stickyHeader highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>No</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Age</Table.Th>
                            <Table.Th>Username</Table.Th>
                            <Table.Th>Password</Table.Th>
                            <Table.Th>Email</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            data?.map((item: any) => (
                                <Table.Tr key={item.id}>
                                    <Table.Td>{item?.id}</Table.Td>
                                    <Table.Td>{item?.firstName} {item?.lastName} {item?.maidenName}</Table.Td>
                                    <Table.Td>{item?.age}</Table.Td>
                                    <Table.Td>{item?.username}</Table.Td>
                                    <Table.Td>{item?.password}</Table.Td>
                                    <Table.Td>{item?.email}</Table.Td>
                                </Table.Tr>
                            ))
                        }
                    </Table.Tbody>
                </Table>
            </TableInner>
        </TableWrapper>
    );
}
