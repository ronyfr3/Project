import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FlexStyle from "rakib-flex-style";

const Loading = () => (
    <FlexStyle middle style={{marginTop:"15px"}}>
      <Loader type="ThreeDots" color="#808080" height={65} width={65} />
    </FlexStyle>
);

export default Loading;