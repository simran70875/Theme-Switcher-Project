import { Box, Flex } from "@chakra-ui/react";
import { SmallCard } from "../../components/smallCard";

export interface IAppProps {}

export default function Dashboard(props: IAppProps) {
  const arr: any[] = [
    { title: "Browsed Books", value: 2504 },
    { title: "Returned Books", value: 2504 },
    { title: "Overdue Books", value: 2504 },
    { title: "Missing Books", value: 2504 },
    { title: "Missing Books", value: 2504 },
  ];

  return (
    <Box w={"100%"} p={10}>
      <Flex w={"100%"} flexWrap={"wrap"}>
        {arr.map((item) => (
          <Box w={"20%"}>
            <SmallCard title={item.title} value={item.value} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
