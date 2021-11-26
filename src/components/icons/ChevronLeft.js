import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgChevronLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
      {...props}>
      <Path d="M15 18l-6-6 6-6" />
    </Svg>
  );
}

export default SvgChevronLeft;
