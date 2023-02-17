// import React from "react";
// import { ImageAvatar, ContentArea, PressArea } from "./styles";
// import { avatarArr } from "app/utils/avatar";

// interface ISelectAvatar {
//     onSelect: (avatar: number) => void;
//     selected: number;
// }

// const SelectAvatar = ({ onSelect, selected }: ISelectAvatar) => {
//     return (
//         <ContentArea>
//             {avatarArr.map((element, index) => {
//                 return (
//                     <PressArea key={index} onPress={() => onSelect(element.id)} active={element.id === selected}>
//                         <ImageAvatar source={element.img} />
//                     </PressArea>
//                 );
//             })}
//         </ContentArea>
//     );
// }

// export default SelectAvatar;
