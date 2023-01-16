import useIsDesktop from 'hooks/useIsDesktop';
import useIsMobile from 'hooks/useIsMobile';

interface Props {
  children: any;
}

export const Desktop = ({ children }: Props) => {
  const isDesktop = useIsDesktop();

  if (!isDesktop || !children) return null;
  return children;
};

export const Mobile = ({ children }: Props) => {
  const isMobile = useIsMobile();

  if (!isMobile || !children) return null;
  return children;
};
