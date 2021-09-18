import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-field/InputField';
import RandomPhotoField from 'custom-field/RandomPhoto-Field';
import SelectField from 'custom-field/Select-Field';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const { initialValues, isAddMode } = props

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number().required('This field is required').nullable(),
        photo: Yup.string().required('This field is required').nullable()
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
        >

            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps
                console.log({ values, errors, touched })

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category??"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                                {isSubmitting && <Spinner size="sm" />}
                                {isAddMode ? 'Add to album' : 'Update your photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;