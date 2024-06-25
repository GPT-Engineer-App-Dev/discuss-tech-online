import { Box, Container, Flex, Heading, VStack, Text, Link, Divider } from "@chakra-ui/react";
import { FaHome, FaLaptopCode, FaDatabase, FaCloud, FaRobot } from "react-icons/fa";

const sections = [
  { name: "Home", icon: FaHome },
  { name: "Web Development", icon: FaLaptopCode },
  { name: "Databases", icon: FaDatabase },
  { name: "Cloud Computing", icon: FaCloud },
  { name: "AI & Machine Learning", icon: FaRobot },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex>
        <Box w="20%" p={4} borderRight="1px solid #e2e8f0">
          <Heading size="md" mb={4}>Tech Forum</Heading>
          <VStack align="start" spacing={4}>
            {sections.map((section) => (
              <Link key={section.name} href={`#${section.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} fontSize="lg" display="flex" alignItems="center">
                <section.icon style={{ marginRight: "8px" }} />
                {section.name}
              </Link>
            ))}
          </VStack>
        </Box>
        <Box w="80%" p={4}>
          {sections.map((section) => (
            <Box key={section.name} id={section.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} mb={8}>
              <Heading size="lg" mb={4}>{section.name}</Heading>
              <Text mb={4}>Discussion area for {section.name}.</Text>
              <Divider />
            </Box>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;