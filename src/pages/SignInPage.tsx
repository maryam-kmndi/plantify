import { Grid, GridItem } from "@chakra-ui/react";
import ColorSide from "../components/Sign/ColorSide";
import FormSide from "../components/Sign/FormSide";

const SignInPage = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "45% 55%" }}>
      <GridItem>
        <ColorSide
          h="hello Friend!"
          t="Enter your personal details and start a journey with us"
          b="sign up"
          to="/sign-up"
        />
      </GridItem>
      <GridItem>
        <FormSide h="sign in to account" b="sign in" />
      </GridItem>
    </Grid>
  );
};

export default SignInPage;
