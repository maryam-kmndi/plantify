import { Grid, GridItem } from "@chakra-ui/react";
import ColorSide from "../components/Sign/ColorSide";
import FormSide from "../components/Sign/SignInFormSide";
import SignUpFormSide from "../components/Sign/SignUpFormSide";

const SignUpPage = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "55% 45%" }}>
      <GridItem>
        <SignUpFormSide />
      </GridItem>
      <GridItem>
        <ColorSide up />
      </GridItem>
    </Grid>
  );
};

export default SignUpPage;
