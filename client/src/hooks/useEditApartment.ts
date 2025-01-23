import {useEffect} from 'react'
import { AppDispatch, RootState } from 'context/store'
import { useSelector, useDispatch } from 'react-redux'
import { getApartmentById } from 'context/api'

const useEditApartment = (apartmentId: string) => {
    const dispatch = useDispatch<AppDispatch>()
    const {selectedApartment, selectedApartmentLoading} = useSelector((state: RootState) => state.apartments)
  
    useEffect(() => {
      dispatch(getApartmentById(apartmentId))
    }, [dispatch])
  
    return {apartment: selectedApartment, apartmentLoading: selectedApartmentLoading }
}

export default useEditApartment