import React from "react";
import { Box, Heading, Text, Image, Flex, Link, UnorderedList, ListItem, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box fontFamily="Arial, sans-serif">
      {/* Header */}
      <Box as="header" bg="navy" color="white" py={4} px={8}>
        <Heading as="h1" size="xl">
          NCWU Men's Soccer
        </Heading>
        <Flex as="nav" mt={4}>
          <Link href="#home" color="yellow" fontWeight="bold" mr={4}>
            Home
          </Link>
          <Link href="#roster" color="yellow" fontWeight="bold" mr={4}>
            Roster
          </Link>
          <Link href="#schedule" color="yellow" fontWeight="bold" mr={4}>
            Schedule
          </Link>
          <Link href="#contact" color="yellow" fontWeight="bold">
            Contact
          </Link>
        </Flex>
      </Box>

      {/* Home */}
      <Box as="section" id="home" py={8} px={8}>
        <Heading as="h2" size="xl" mb={4}>
          Welcome to NCWU Men's Soccer
        </Heading>
        <Image src="https://images.unsplash.com/photo-1509077613385-f89402467146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc29jY2VyJTIwdGVhbXxlbnwwfHx8fDE3MTI2MzkzNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="NCWU Men's Soccer Team" mb={4} />
        <Text fontSize="xl">The NCWU Men's Soccer team competes in the NCAA Division III. We strive for excellence on the field and in the classroom.</Text>
      </Box>

      {/* Roster */}
      <Box as="section" id="roster" py={8} px={8}>
        <Heading as="h2" size="xl" mb={4}>
          Team Roster
        </Heading>
        <UnorderedList>
          <ListItem>John Smith - Forward</ListItem>
          <ListItem>Mike Johnson - Midfielder</ListItem>
          <ListItem>David Lee - Defender</ListItem>
          {/* Add more players */}
        </UnorderedList>
      </Box>

      {/* Schedule */}
      <Box as="section" id="schedule" py={8} px={8}>
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
            {/* Add more games */}
          </Tbody>
        </Table>
      </Box>

      {/* Contact */}
      <Box as="section" id="contact" py={8} px={8}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text>
          Coach: John Doe
          <br />
          Email: johndoe@ncwu.edu
          <br />
          Phone: (123) 456-7890
        </Text>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="navy" color="white" py={4} px={8} textAlign="center">
        <Text>&copy; 2023 NCWU Men's Soccer. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
