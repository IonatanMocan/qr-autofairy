import Select from 'react-select';
import styled from 'styled-components';

const BasicInfoWrapper = styled.fieldset`
  padding: 18px 20px 24px 17px;
  min-width: 718px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  border: none;
  box-sizing: border-box;
  background: #ffffff;

  color: #4b4343;

  .basic-info-left-side {
    input,
    textarea {
      background: #ffffff;
      border: 1px solid #4d8cec;
      box-sizing: border-box;
      border-radius: 10px;
      resize: none;
    }

    textarea {
      width: 100%;
      min-height: 100px;
    }

    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > * {
        min-width: 312px;
        margin-bottom: 24px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 94%;

        border: 2px solid #f0f0f0;
        border-radius: 20px;

        letter-spacing: 0.01em;
      }

      input {
        width: 312px;
        height: 45px;
        padding: 13px;
      }
    }
  }
`;

const makerOptions = [
  {
    label: 'Toyota',
    value: 'toyota',
  },
  {
    label: 'Lada',
    value: 'lada',
  },
];

const modelOptions = [
  {
    label: 'M1',
    value: 'm1',
  },
  {
    label: 'X5',
    value: 'x5',
  },
];

const yearOptions = [2011, 2012, 2013].map((value) => ({
  label: value,
  value,
}));

const BasicInfoForm = ({ values, onSelect, formik, percentage }) => {
  return (
    <BasicInfoWrapper>
      {/* <span style={{ color: 'red' }}>{percentage}%</span> */}
      <div className='basic-info-left-side'>
        <div className='row'>
          <Select
            //   styles={customStyles}
            placeholder='Maker'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.maker}
            name='basicInfo.maker'
          />
          <Select
            placeholder='Model'
            options={modelOptions}
            onChange={onSelect}
            selectedOption={values.model}
            name='basicInfo.model'
          />
        </div>
        <div className='row'>
          <Select
            placeholder='Year'
            options={yearOptions}
            onChange={onSelect}
            selectedOption={values.year}
            name='basicInfo.year'
          />
          <Select
            placeholder='Trim'
            options={yearOptions}
            onChange={onSelect}
            selectedOption={values.trim}
            name='basicInfo.trim'
          />
        </div>
        <div className='row'>
          <label>
            <input
              type='text'
              placeholder='KM'
              onChange={formik.handleChange}
              value={values.km}
              name='basicInfo.km'
            />
          </label>
          <label>
            <input
              type='text'
              name='basicInfo.price'
              placeholder='Price'
              onChange={formik.handleChange}
              value={values.price}
            />
          </label>
        </div>
        <div className='row'>
          <textarea
            name='basicInfo.description'
            onChange={formik.handleChange}
            placeholder='Description'
            value={values.description}
          />
        </div>
      </div>
    </BasicInfoWrapper>
  );
};
export default BasicInfoForm;
