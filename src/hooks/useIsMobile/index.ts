import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => useMediaQuery({ maxWidth: 1024 });

export default useIsMobile;
