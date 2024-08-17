import { VStack } from "@chakra-ui/react";
import ContactUsPreview from "../components/Home/ContactUsPreview";
import Hero from "../components/Home/Hero";
import ShopPreview from "../components/Home/ShopPreview";
import Testimonial from "../components/Home/Testimonial";

const HomePage = () => {
  return (
    <VStack gap="4rem">
      <Hero />
      <ShopPreview />
      <ContactUsPreview />
      <Testimonial />
    </VStack>
  );
};

export default HomePage;
