import { VStack } from "@chakra-ui/react";
import ContactUsPreview from "../components/Home/ContactUsPreview";
import Hero from "../components/Home/Hero";
import ShopPreview from "../components/Home/ShopPreview";
import AboutMe from "../components/Home/AboutMe";

const HomePage = () => {
  return (
    <VStack gap="4rem">
      <Hero />
      <ShopPreview />
      <ContactUsPreview />
      <AboutMe />
    </VStack>
  );
};

export default HomePage;
