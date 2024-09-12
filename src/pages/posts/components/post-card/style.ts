import styled from "@emotion/styled";

export const PostCardWrapper = styled.div`
    height: 100%;
    .comment {
        padding: var(--mantine-spacing-lg) var(--mantine-spacing-xl);
    }

    .body {
        padding-left: rem(54px);
        padding-top: var(--mantine-spacing-sm);
        font-size: var(--mantine-font-size-sm);
    }

    .content {
        & > p:last-child {
            margin-bottom: 0;
        }
    }
`
