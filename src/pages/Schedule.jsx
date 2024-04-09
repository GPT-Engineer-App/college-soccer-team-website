import React from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Box as="section" py={8} px={8}>
      <Heading as="h2" size="xl" mb={4}>
        Season Schedule
      </Heading>
      <Table variant="simple">
        <TableCaption>NCWU Men's Soccer Schedule</TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Opponent</Th>
            <Th>Location</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Aug 28</Td>
            <Td>ABC University</Td>
            <Td>Home</Td>
            <Td>7:00 PM</Td>
          </Tr>
          {}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Schedule;
