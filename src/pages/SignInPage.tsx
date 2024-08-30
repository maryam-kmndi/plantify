import { Grid, GridItem } from "@chakra-ui/react";
import ColorSide from "../components/Sign/ColorSide";
import SignInFormSide from "../components/Sign/SignInFormSide";

const SignInPage = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "45% 55%" }}>
      <GridItem>
        <ColorSide />
      </GridItem>
      <GridItem>
        <SignInFormSide />
      </GridItem>
    </Grid>
  );
};

export default SignInPage;
