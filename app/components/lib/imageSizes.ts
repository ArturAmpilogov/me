export const imageSizes = ({
  mobile,
  tablet,
  desktop,
}: {
  mobile: string;
  tablet: string;
  desktop: string;
}) => `(min-width: 940px) ${desktop}, (min-width: 480px) ${tablet}, ${mobile}`;
