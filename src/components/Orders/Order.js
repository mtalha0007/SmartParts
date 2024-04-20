import React ,{ useEffect ,useState } from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import orderServices from "../../services/orderServices"
import { IoEyeOutline } from "react-icons/io5";
import OrderDetailDialog from '../Dialog/OrderDetailDialog';
export default function TableUnstyled() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderDetailDialog, setOrderDetailDialog] = useState(false);
  const getOrderData = async () => {
      try {
          const orderedData = await orderServices.getOrders();
          setOrder(orderedData?.data?.result);
          
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  useEffect(() => {
      getOrderData();
  }, []);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - order.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const viewOrderDetail = async (id)=>{
    try {
        const response = await orderServices.getOrderById(id);
        console.log(response)
        setOrderDetail(response?.data);
        setOrderDetailDialog(true)
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <>
 
    <OrderDetailDialog
        open={orderDetailDialog}
        onClose={() => setOrderDetailDialog(false)}
        orderDetail={orderDetail}
        
      />
    <Root sx={{ maxWidth: '100%', width: "100%",overflowX:"scroll" }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>Order ID</th>
            <th style={{textAlign:"center"}}>Amount</th>
            <th style={{textAlign:"center"}}>Status</th>
            <th style={{textAlign:"center"}}>Date And Time</th>
            <th style={{textAlign:"center"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {order.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={row.order_id} striped={index % 2 !== 0} >
              <td style={{ width: 160 ,textAlign:"center" ,padding:'15px' }} >
                {row.order_id}
              </td>
              <td style={{ width: 160  ,textAlign:"center",padding:'15px' }} >
                {"$" + row.total_amount}
              </td>
              <td style={{ width: 160  ,textAlign:"center",padding:'15px' }} >
                {row.status.name}
              </td>
              <td style={{ width: 160 ,textAlign:"center",padding:'15px'  }} >
                {row.createdAt}
              </td>
              <td style={{ width: 160 ,textAlign:"center",padding:'15px'  ,cursor:"pointer" }} >
             <IoEyeOutline onClick={()=>{viewOrderDetail(row._id)}}/>
              </td>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={5} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={order.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
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

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? '#111' : '#f2f2f2'};
  }
  `,
);

const TableRow = styled('tr')(
  ({ theme, striped }) => `
    background-color: ${striped ? (theme.palette.mode === 'dark' ? '#333' : '#f9f9f9') : 'transparent'};
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? '#666' : '#f2f2f2'};
    }
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

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;
