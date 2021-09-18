import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './AddEdit.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';


AddEditPage.propTypes = {};

function AddEditPage(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId } = useParams()
    //console.log({ photoId })
    const isAddMode = !photoId
    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId)
        return foundPhoto
    })

    const initialValues = isAddMode ? {
        title: '',
        categoryId: null,
        photo: '',
    } : editedPhoto

    console.log('Edited', editedPhoto)

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form Submit: ', values)

            setTimeout(() => {
                if (isAddMode) {
                    const action = addPhoto(values)
                    //console.log({ action })
                    dispatch(action)
                }
                else {
                    const action = updatePhoto(values)
                    dispatch(action)
                }
                history.push('/photos')
                resolve(true)
            }, 2000)
        })
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your mazing photo" />

            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;