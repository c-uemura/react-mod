import { useMediaQuery } from "react-responsive";

const useIsDesktop = () => useMediaQuery({ minWidth: 1025 });

export default useIsDesktop;
