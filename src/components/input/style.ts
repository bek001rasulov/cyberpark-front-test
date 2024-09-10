import styled from "@emotion/styled";
import {PasswordInput, TextInput} from "@mantine/core";

export const MantineInput = styled(TextInput)`
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    width: 100%;
    input,
    input::placeholder,
    label {
        font-family: inherit;
        font-size: inherit;
        width: 100%;
    }
    input {
        border-radius: 12px;
        color: #14151a;
        font-feature-settings: "tnum" on, "lnum" on !important;
        height: 40px;
    }
    input::placeholder {
        font-weight: 400;
    }
    input:disabled {
        background: #f5f5f5 !important;
        border-color: #dbdbdb;
        color: #1a1a1a;
    }
    label {
        margin-bottom: 0.5rem;
        color: inherit;
        font-weight: 500;
        line-height: 20px;
    }
`;

export const MantinePasswordInput = styled(PasswordInput)`
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    width: 100%;
    input,
    input::placeholder,
    label {
        font-family: inherit;
        font-size: inherit;
        width: 100%;
    }
    & label {
        margin-bottom: 0.25rem;
        color: inherit;
        font-weight: 500;
        line-height: 20px;
    }
    & div {

        & div {
            border-radius: 12px;
            //&:focus-within{
            //  border-color: #26bd6c!important;
            //}
            min-height: 40px;
            input {
                &::placeholder {
                    font-family: "Inter", sans-serif;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }
    & .mantine-Input-rightSection {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        background-color: transparent;
    }
`;

