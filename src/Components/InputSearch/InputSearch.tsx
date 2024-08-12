import { TextField, TextFieldProps } from "@mui/material";
import { ReactElement } from "react";

type InputSearchProps = TextFieldProps;

export default function InputSearch({
  ...props
}: InputSearchProps): ReactElement {
  return (
    <div>
      <TextField id="input-search" {...props} />
    </div>
  );
}
