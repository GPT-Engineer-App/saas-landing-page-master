import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to SaaSify
          </Heading>
          <Text fontSize="lg" mb={6}>
            The ultimate solution for managing your business efficiently.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="xl" textAlign="center">
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTYxMDA1ODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 1" boxSize="100px" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Feature One
              </Heading>
              <Text>Manage your tasks efficiently with our intuitive interface.</Text>
            </Box>
            <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTYxMDA1ODh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 2" boxSize="100px" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Feature Two
              </Heading>
              <Text>Collaborate with your team in real-time.</Text>
            </Box>
            <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1682897207853-f179d0f03827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTYxMDA1OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 3" boxSize="100px" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Feature Three
              </Heading>
              <Text>Analyze your performance with detailed reports.</Text>
            </Box>
          </HStack>
        </VStack>

        {/* Call to Action Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Ready to take your business to the next level?
          </Heading>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Sign Up Now
          </Button>
        </Box>

        {/* Footer Section */}
        <Box textAlign="center" py={4}>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
          <Text mt={4}>© 2023 SaaSify. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
