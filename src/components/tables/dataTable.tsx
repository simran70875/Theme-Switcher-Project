import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import * as React from "react";

export interface IDataTableProps {
  data: { [key: string]: any }[];
  columns: { key?: string; header?: string }[]; // Changed 'title' to 'key'
  height?: any;
}
export default function DataTable(props: IDataTableProps) {
  const handleSortingChange = (key: string | undefined) => {
    console.log(key);
  };

  return (
    <Box p={5} overflow="auto" height={"100%"}>
      <Table overflow={"scroll"}>
        <Thead>
          <Tr>
            {props.columns.map((item) => {
              return (
                <Th onClick={() => handleSortingChange(item.key)}>
                  {item.header}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((item, rowIndex) => (
            <Tr key={rowIndex}>
              {props.columns.map((column, colIndex) => (
                <Td fontSize={12} key={colIndex}>
                  {item[column.key as string]}
                </Td> // Accessing correct key
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
