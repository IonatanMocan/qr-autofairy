import Select from 'react-select';
import styled from 'styled-components';

const DetailedInfoFormWrapper = styled.fieldset`
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
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
];

const yearOptions = [2011, 2012, 2013].map((value) => ({
  label: value,
  value,
}));

const DetailedInfoForm = ({ values, onSelect, formik, percentage }) => {
  return (
    <DetailedInfoFormWrapper>
      {/* <span style={{ color: 'red' }}>{percentage}%</span> */}
      <div className='basic-info-left-side'>
        <div className='row'>
          <Select
            //   styles={customStyles}
            placeholder='Transmission'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.maker}
            name='detailed.transmission'
          />
          <Select
            placeholder='Fuel Type'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.model}
            name='detailed.fueltype'
          />
        </div>
        <div className='row'>
          <Select
            placeholder='Engine'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.year}
            name='detailed.engine'
          />
          <Select
            placeholder='Drivetrain'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.trim}
            name='detailed.drivetrain'
          />
        </div>
        <div className='row'>
          <Select
            placeholder='Exterior Color'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.year}
            name='detailed.exteriorColor'
          />
          <Select
            placeholder='Interior Color'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.trim}
            name='detailed.interiorColor'
          />
        </div>
        <div className='row'>
          <Select
            placeholder='Passengers'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.year}
            name='detailed.passengers'
          />
          <Select
            placeholder='Doors'
            options={makerOptions}
            onChange={onSelect}
            selectedOption={values.trim}
            name='detailed.doors'
          />
        </div>
      </div>
    </DetailedInfoFormWrapper>
  );
};
export default DetailedInfoForm;
