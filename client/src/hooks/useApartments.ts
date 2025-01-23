import  { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from 'context/store'
import { getApartments } from 'context/api'
import { useSearchParams } from 'react-router-dom';

const useApartments = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {apartments, apartmentsLoading, apartmentsErrorMessage} = useSelector((state: RootState) => state.apartments)

    const [searchParams] =  useSearchParams();;
    const rooms = Number(searchParams.get('rooms')) as 1 | 2 | 3;

    const min = Number(searchParams.get('min'));
    const max = Number(searchParams.get('max'));
  
    useEffect(() => {
      dispatch(getApartments({rooms: rooms || null, price: {min: min || null, max: max || null} }))
    }, [dispatch, rooms, min, max])
  
    return {apartments, apartmentsLoading, apartmentsErrorMessage};
}

export default useApartments