import styled from "styled-components"
export const SelectWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1260px;
    margin: 0 auto;
    padding: 10px;
    flex-wrap: wrap;
    .select {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 720px;
    }
    .select__wrapper {
        width: 312px;
    }
    .select__item {
        max-width: 100%;
        margin: 34px 0;
    }
    .css-yk16xz-control{
        border-color: #4D8CEC !important;
        border-radius: 10px !important;
    }
    .css-1uccc91-singleValue {
        color: #4B4343 !important;
    }
    .select__label {
        border-color: #4D8CEC;
        border-radius: 10px;
        outline-color:#4D8CEC;
        border-style: solid;
        border-width: 1px;
        padding: 10px 5px;
        margin: 0 0 34px 0;
        width: 300px;
    }
    .select__descripteon {
        width: 100%;
    }
    .select-surce {
        width: 450px;
        height: auto;
    }
    .select-surce img {
        width: 100%;
    }
`