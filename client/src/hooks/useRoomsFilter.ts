import { useNavigate, useSearchParams } from "react-router-dom";

const useRoomsFilter = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const [searchParams] = useSearchParams();

    const rooms = Number(searchParams.get('rooms'))
  
    const handleClick = (roomsNum: number) => {
      params.set("rooms", String(roomsNum));
      navigate(`?${params.toString()}`);
    };
  
    const handleClear = () => {
      params.delete('rooms');
      
      const newQueryString = params.toString();
      navigate(newQueryString ? `?${newQueryString}` : '', { replace: true });
    }

    return {rooms, handleClick, handleClear}
}

export default useRoomsFilter