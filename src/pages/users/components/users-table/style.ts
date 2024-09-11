import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  border: 1px solid var(--border-action-normal);
  border-radius: 12px;
`;

export const TableInner = styled.div`
    overflow: auto;

    table {
        background-color: var(--background-surface-default);

        thead {
            background-color: var(--background-surface-neutral);
            height: 40px;
        }

        thead tr th {
            color: var(--text-base-secondary);
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.1px;
            white-space: nowrap;
        }

        tbody tr {
            transition: all 0.3s ease;
            height: 54px;
        }
        tbody tr td{
            white-space: nowrap;
        }
    }

    &::-webkit-scrollbar {
        direction: rtl;
        width: 0.5em;
        height: 0.5em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--border-action-normal);
        border-radius: 1rem;
    }
`;