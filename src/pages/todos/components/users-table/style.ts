import styled from "@emotion/styled";
import {ScrollArea} from "@mantine/core";

export const TableWrapper = styled(ScrollArea)`
  width: 100%;
  overflow: auto;
  border: 1px solid var(--border-action-normal);
  border-radius: 12px;
`;

export const TableInner = styled.div`
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
    
`;
