import React, { HTMLAttributes} from 'react';
import {Group, Pagination} from '@mantine/core';
import {Wrapper} from './style';

type IPagination = {
    totalCount: number;
    activePage: number;
    setPage: (page: number) => void;
} & HTMLAttributes<HTMLDivElement>

export const PaginationCustom = ({
                                     totalCount,
                                     activePage,
                                     setPage,
                                     ...props
                                 }: IPagination) => {
    return (
        <Wrapper {...props}>
            <Pagination.Root
                value={activePage}
                onChange={setPage}
                autoContrast
                color="rgba(10, 15, 41, 0.04)"
                radius="md"
                total={totalCount}
            >
                <Group>
                    <Pagination.Previous/>
                    <Pagination.Items/>
                    <Pagination.Next/>
                </Group>
            </Pagination.Root>
        </Wrapper>
    );
};
