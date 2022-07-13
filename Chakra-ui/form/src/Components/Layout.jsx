import { Box, SimpleGrid } from "@chakra-ui/react";

function Layout() {
  const items = new Array(12).fill(0).map((a, i) => i + 1);
  // console.log(items)
  return (
    <div>
      <SimpleGrid columns={4} spacing={6}>
        {items.map((item) => {
          return <Box key={item}>{item}</Box>;
        })}
      </SimpleGrid>
    </div>
  );
}

export default Layout;
