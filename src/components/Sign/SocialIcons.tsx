import { Circle, HStack } from "@chakra-ui/react";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const socials = [
  { id: 1, icon: <FaGooglePlusSquare size="1.6rem" /> },
  { id: 2, icon: <FaFacebookSquare size="1.6rem" /> },
  { id: 3, icon: <IoLogoLinkedin size="1.6rem" /> },
];

const SocialIcons = () => {
  return (
    <HStack py="2rem">
      {socials.map((i) => (
        <Circle
          key={i.id}
          size={{ md: "40px", base: "2.2rem" }}
          borderWidth="1px"
          borderColor="textColor"
        >
          {i.icon}
        </Circle>
      ))}
    </HStack>
  );
};

export default SocialIcons;
