import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";

export interface IAppProps {}

export function AllBooks(props: IAppProps) {
  const [cols, setCols] = useState<ColDef[]>([
    {
      headerName: "ISBN",
      field: "isbn",
      sortable: true,
      filter: true,
      floatingFilter: true,
      editable: true,
      checkboxSelection: true,
    },
    {
      headerName: "Cover Image",
      field: "coverImage",
      sortable: true,
    },
    {
      headerName: "Book Name",
      field: "bookName",
      sortable: true,
    },
    {
      headerName: "Book Desc",
      field: "bookDesc",
      sortable: true,
    },
    { headerName: "Category", field: "category", sortable: true },
    { headerName: "Price", field: "price", sortable: true },
    { headerName: "Qty", field: "qty", sortable: true },
    { headerName: "Borrowed", field: "borrowed", sortable: true },
    { headerName: "Action", field: "action", sortable: true },
  ]);

  const [rowData, setRowData] = useState([
    {
      isbn: "1234567890",
      coverImage: "image_url",
      bookName: "Book A",
      bookDesc: "Description of Book A",
      category: "Fiction",
      price: 19.99,
      qty: 10,
      borrowed: false,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "1234567890",
      coverImage: "image_url",
      bookName: "Book A",
      bookDesc: "Description of Book A",
      category: "Fiction",
      price: 19.99,
      qty: 10,
      borrowed: false,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },

    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    {
      isbn: "0987654321",
      coverImage: "image_url",
      bookName: "Book B",
      bookDesc: "Description of Book B",
      category: "Non-fiction",
      price: 24.99,
      qty: 5,
      borrowed: true,
      action: "View",
    },
    // Additional book data...
  ]);

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 50, 100];

  return (
    <div className="ag-theme-quartz" style={{ height: "90vh" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={cols}
        rowSelection="multiple"
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
      />
    </div>
  );
}
