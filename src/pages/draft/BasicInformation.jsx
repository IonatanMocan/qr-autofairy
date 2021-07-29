import Select from "react-select";
import styled from "styled-components";
import {countPercentage} from "./utils";


const BasicInfoWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  .row {
    display: flex;
    flex-direction: row; 
    
    & > * {
      min-width: 200px;
    }
  }
`;


const makerOptions = [
    {
        label: "Toyota",
        value: 'toyota'
    },
    {
        label: "Lada",
        value: 'lada'
    },
]

const modelOptions = [
    {
        label: "M1",
        value: "m1",
    },
    {
        label: "X5",
        value: "x5",
    }
]

const yearOptions = [2011, 2012, 2013].map(value => ({label: value, value}))

const BasicInfoForm = ({values, onSelect, formik, percentage}) => {
    return (
        <BasicInfoWrapper>
            <span style={{color: "red"}}>{percentage}%</span>
            <div className="row">
                <Select
                    placeholder="Maker"
                    options={makerOptions}
                    onChange={onSelect}
                    selectedOption={values.maker}
                    name="basicInfo.maker"
                />
                <Select
                    placeholder="Model"
                    options={modelOptions}
                    onChange={onSelect}
                    selectedOption={values.model}
                    name="basicInfo.model"
                />
            </div>
            <div className="row">
                <Select
                    placeholder="Year"
                    options={yearOptions}
                    onChange={onSelect}
                    selectedOption={values.year}
                    name="basicInfo.year"
                />
                <Select
                    placeholder="Trim"
                    options={yearOptions}
                    onChange={onSelect}
                    selectedOption={values.trim}
                    name="basicInfo.trim"
                />
            </div>
            <div className="row">
                <label>
                    <input
                        type="text"
                        placeholder="KM"
                        onChange={formik.handleChange}
                        value={values.km}
                        name="basicInfo.km"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="basicInfo.price"
                        placeholder="Price"
                        onChange={formik.handleChange}
                        value={values.price}
                    />
                </label>
            </div>
            <div className="row">
                <textarea
                    name="basicInfo.description"
                    onChange={formik.handleChange}
                    placeholder="Description"
                    value={values.description}
                />
            </div>
        </BasicInfoWrapper>
    )
}
export default BasicInfoForm;