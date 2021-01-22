import React from "react";
import Style from "./styles";

export interface AvatarProps {
  imageUrl?: string,
  size?: number,
  border?: number
}

const Avatar = ({ imageUrl, size, border }: AvatarProps) => {
  const img = imageUrl ? imageUrl : require('../../assets/imgs/logo.png') ;
  return (
    <Style.Wrapper >
      <Style.Image source={img} size={size} border={border}/>
    </Style.Wrapper>
  )
}

export default Avatar;