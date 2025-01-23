import { useDispatch } from 'react-redux'
import { AppDispatch,  } from 'context/store'
import { deleteApartment } from 'context/api'

const useDeleteApartment = (apartmentId: string) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDeleteApartment = () => {
      dispatch(deleteApartment(apartmentId));
    };

    return {deleteApartment: handleDeleteApartment}
}

export default useDeleteApartment