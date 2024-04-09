import React from "react";
import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Roster = () => {
  return (
    <Box as="section" py={8} px={8}>
      <Heading as="h2" size="xl" mb={4}>
        Team Roster
      </Heading>
      <UnorderedList>
        <ListItem>John Smith - Forward</ListItem>
        <ListItem>Mike Johnson - Midfielder</ListItem>
        <ListItem>David Lee - Defender</ListItem>
        {}
      </UnorderedList>
    </Box>
  );
};

export default Roster;
