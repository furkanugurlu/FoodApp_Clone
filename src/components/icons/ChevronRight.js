import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgChevronRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-right_svg__feather chevron-right_svg__feather-chevron-right"
      {...props}>
      <Path d="M9 18l6-6-6-6" />
    </Svg>
  );
}

export default SvgChevronRight;
