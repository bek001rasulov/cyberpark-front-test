import styled from '@emotion/styled';

export const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    .mantine-Pagination-control {
        border: none;
        background-color: #f7f7f8;
        color: #0f132499;
    }

    .mantine-Pagination-control[data-active] {
        color: #14151a;
        background-color: rgba(10, 15, 41, 0.04);
    }

    .mantine-Pagination-dots {
        color: #0f132499;
    }
`;
