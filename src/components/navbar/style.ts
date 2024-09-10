import styled from "@emotion/styled";

export const NavbarWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 32px;
    background-color: #ffff;
    box-shadow: 0 0 3px 0 lightgrey;

    .navbar-brand {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 6px;
        color: #14151A;
    }
`

export const NavMenu = styled.nav`
    display: flex;
    gap: 12px;

    a {
        font-weight: 600;
        color: #14151A;
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }

        &.active {
            color: #4778F5;
        }
    }
`
