import bullsEye from "../assets/bulls-eye.png";
import thumbsUp from "../assets/thumbsUp.png";
import meh from "../assets/meh.png";
import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
    rating: number;
}
const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: "20px"},
        4: { src: thumbsUp, alt: 'recommended', boxSize: "25px"},
        5: { src: bullsEye, alt: 'exceptional', boxSize: "33px"},
    }


    return (
        <Image {...emojiMap[rating]} marginTop={1} >

        </Image>
    );
};

export default Emoji;