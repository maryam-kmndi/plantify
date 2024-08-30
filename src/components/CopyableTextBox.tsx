import { useState } from "react";
import { Box, Input, Button, useClipboard } from "@chakra-ui/react";

const CopyableTextBox = () => {
  const [value, setValue] = useState("SUMMER25");
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Box py="2rem">
      <Input
        w="50%"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isReadOnly
        focusBorderColor="#79A141"
        mr={2}
      />
      <Button onClick={onCopy} colorScheme={hasCopied ? "green" : "gray"}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
};

export default CopyableTextBox;
