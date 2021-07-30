import { useFormik } from 'formik';
import { object, string } from 'yup';

export const useDraftForm = () => {
  const formik = useFormik({
    initialValues: {
      basicInfo: {
        maker: null,
        year: null,
        model: null,
        trim: null,
        km: '',
        price: '',
        description: '',
      },
      contact: {
        name: '',
        email: '', // imocan@gmail.com
      },
      detailedInfo: {
        transmission: '',
        fueltype: '',
        engine: '',
        drivetrain: '',
        exteriorColor: '',
        interiorColor: '',
        passengers: null,
        doors: null,
      },
    },
    validationSchema: object({
      basicInfo: object({
        maker: object().required('Required'),
        year: object().required('Required'),
        model: object().required('Required'),
        trim: object().required('Required'),
        km: string().required('Required'),
        price: string().required('Required'),
        description: string().required('Required'),
      }),
      contact: object({
        name: string().required('Required'),
        email: string().required('Required'),
      }),
      detailedInfo: object({
        transmission: string().required('Required'),
        fueltype: string().required('Required'),
        engine: string().required('Required'),
        drivetrain: string().required('Required'),
        exteriorColor: string().required('Required'),
        interiorColor: string().required('Required'),
        passengers: string().required('Required'),
        doors: string().required('Required'),
      }),
    }),
    onSubmit: (values) => {
      //   debugger;
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onSelectReactSelect = (option, action) => {
    formik.setFieldValue(action.name, option, true);
  };

  return { formik, onSelectReactSelect };
};