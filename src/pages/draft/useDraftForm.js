import {useFormik} from "formik";
import {object, string} from "yup";

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
                name: 'Ion',
                email: 'imocan@gmail.com'
            }
        },
        validationSchema: object({
            basicInfo: object({
                maker: object()
                    .required('Required'),
                year: object()
                    .required('Required'),
                model: object()
                    .required('Required'),
                trim: object()
                    .required("Required"),
                km: string()
                    .required("Required"),
                price: string()
                    .required("Required"),
                description: string()
                    .required("Required"),
            }),
            contact: object({
                name: string().required('Required'),
                email: string().required('Required')
            })
        }),
        onSubmit: values => {
            debugger
            alert(JSON.stringify(values, null, 2));
        },
    });

    const onSelectReactSelect = (option, action) => {
        formik.setFieldValue(action.name, option, true)
    }

    return {formik, onSelectReactSelect}
}