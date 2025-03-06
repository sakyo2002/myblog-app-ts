import React from 'react';
import { MouseEvent } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { SvgIconProps } from "@mui/material";

export default function CustomSearchIcon(props: SvgIconProps & {
  onClick?: (event: MouseEvent<SVGSVGElement>) => void
}) {
  const { onClick, ...rest } = props;

  return (
    <SearchIcon
      {...rest}
      onClick={onClick as SvgIconProps['onClick']}
    />
  );
};