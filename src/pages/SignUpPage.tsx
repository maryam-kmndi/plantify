import { Grid, GridItem } from "@chakra-ui/react";
import ColorSide from "../components/Sign/ColorSide";
import FormSide from "../components/Sign/FormSide";

const SignUpPage = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "55% 45%" }}>
      <GridItem>
        <FormSide h="create account" b="sign up" NameI/>
      </GridItem>
      <GridItem>
        <ColorSide
          h="welcome back!"
          t="To keep connected ith us please login with your personal info"
          b="sign in"
          to="/sign-in"
        />
      </GridItem>
    </Grid>
  );
};

export default SignUpPage;
