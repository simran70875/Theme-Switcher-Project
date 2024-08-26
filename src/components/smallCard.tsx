import { Box, Text } from "@chakra-ui/react";
import { Card, CardTitle, CardBody } from "./style/Cards.styled";

export interface IAppProps {
  title?: String;
  value?: String;
}

export function SmallCard(props: IAppProps) {
  return (
    <Box>
      <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardBody>
          <Text fontSize={20} fontWeight={"700"}>
            {props.value}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
