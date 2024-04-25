import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/system";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import orderServices from "../../services/orderServices";
import { IoEyeOutline } from "react-icons/io5";
import OrderDetailDialog from "../Dialog/OrderDetailDialog";
import { ContextApi } from "../../store/context";
import moment from "moment";
export default function TableUnstyled() {
  const [page, setPage] = useState(0);
  //*For set rowsPerPage
  const [rowsPerPage, setRowsPerPage] = useState(10);
  //*For set orderdata coming from api
  const [order, setOrder] = useState([]);
  //*For set orderdata with id  coming from api
  const [orderDetail, setOrderDetail] = useState([]);
  //*For opening and closing Dialog
  const [orderDetailDialog, setOrderDetailDialog] = useState(false);
  //*For totalOrders
  const [totalOrders, setTotalOrders] = useState(0);
  //*For set orderdata in Context
  const { state, dispatch } = useContext(ContextApi);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const param = {
          page: page + 1,
          perPage: rowsPerPage,
        };
        const orderedData = await orderServices.getOrders(param);
        setOrder(orderedData?.data?.result);
        setTotalOrders(orderedData?.data?.count);
        dispatch({ type: "ADD_ORDER", payload: orderedData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, rowsPerPage]);

  const viewOrderDetail = async (id) => {
    try {
      const response = await orderServices.getOrderById(id);
      console.log(response);
      setOrderDetail(response?.data);
      setOrderDetailDialog(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <OrderDetailDialog
        open={orderDetailDialog}
        onClose={() => setOrderDetailDialog(false)}
        orderDetailById={orderDetail}
      />
      <Root
        sx={{
          maxWidth: "100%",
          width: "100%",
          overflowX: { xs: "scroll", sm: "hidden" },
        }}
      >
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Order ID</th>
              <th style={{ textAlign: "center" }}>Amount</th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Date And Time</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <TableRow key={item.order_id} striped={index % 2 !== 0}>
                <td
                  style={{ width: 160, textAlign: "center", padding: "15px" }}
                >
                  {item?.order_id}
                </td>
                <td
                  style={{ width: 160, textAlign: "center", padding: "15px" }}
                >
                  {"$" + item?.total_amount}
                </td>
                <td
                  style={{ width: 160, textAlign: "center", padding: "15px" }}
                >
                  {item?.status?.name}
                </td>
                <td
                  style={{ width: 160, textAlign: "center", padding: "15px" }}
                >
                  {moment(item?.createdAt).format("DD-MM-YYYY hh:mm A")}
                </td>
                <td
                  style={{
                    width: 160,
                    textAlign: "center",
                    padding: "15px",
                    cursor: "pointer",
                  }}
                >
                  <IoEyeOutline
                    onClick={() => {
                      viewOrderDetail(item?._id);
                    }}
                  />
                </td>
              </TableRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  { label: "All", value: totalOrders },
                ]}
                colSpan={5}
                count={totalOrders}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </Root>
    </>
  );
}

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? "#333" : "#ddd"};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: rgb(239 240 246);
  }
  `
);

const TableRow = styled("tr")(
  ({ theme, striped }) => `
    background-color: ${
      striped
        ? theme.palette.mode === "dark"
          ? "#333"
          : "rgb(239 240 246)"
        : "transparent"
    };

  `
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;  
  }

  & .${classes.displayedRows} {
    margin: 0;
   

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .base-TablePagination-select{
    width:60px
  }
  n
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
  &  .base-TablePagination-actions button   {
    border:1px solid silver  
  }
  &  .base-TablePagination-actions button:active   {
    background:#df6a2d;
    color:white;
    1px solid silver  
  }
  & .base-TablePagination-actions [disabled]:active{
    background-color: light-dark(rgba(239, 239, 239, 0.3), rgba(19, 1, 1, 0.3));
    color: light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
     

  }
`;
