import { Box, Heading, Input, Stack, HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
function Form() {
  return (
    <Box>
      <Heading>Form</Heading>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Input type="email" placeholder="emial" />
        </Box>
        <Box>
          <Input type="password" placeholder="password" />
        </Box>

        <Box>
          <Button colorScheme="blue">Button</Button>
          <Box>
            <HStack>
              <Button colorScheme="facebook" leftIcon={""}>
                Facebook
              </Button>
              <Button colorScheme="twitter" leftIcon={""}>
                Twitter
              </Button>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
export default Form;
