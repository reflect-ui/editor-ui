import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Silder from "../../../property/input/silder";

function TextFieldnSilder(props : {
  label : string
}) {
  const { label } = props;
  return (
    <Wrapper>
      <label>{label}</label>
      <div className="postion x">
        <TextField placeholder="0°" width={60} />
      </div>
      <div className="silder">
        <Silder width={60} />
      </div>
    </Wrapper>
  );
}

export default TextFieldnSilder;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 12px;
    color: #fff;
    margin-right: 30px;
  }

  .postion, .silder {
    margin: 0px 4px;
  }
`;
