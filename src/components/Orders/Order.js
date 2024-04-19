import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from "react";
import orderServices from "../../services/orderServices";
import { Box } from '@mui/material';

function Order() {
    const [order, setOrder] = useState([]);

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

    return (
        <Box className="card">
            <DataTable 
           rowClassName={(rowData, index) => index % 2 === 0 ? 'p-datatable-row-even' : 'p-datatable-row-odd'}
                value={order}             
                paginator 
                rows={5}   
                rowsPerPageOptions={[5, 10, 25, 50]} 
                tableStyle={{ minWidth: '50rem' }} 
                paginatorClassName="paginator"
            >
                <Column field="order_id" header="Order Id" style={{ width: '25%' }}  body={(rowData) => rowData.order_id}></Column>  
                <Column field="amount" header="Amount" style={{ width: '25%' }} body={(rowData) => "$"+ rowData.total_amount}></Column>
                <Column field="status" header="Status" style={{ width: '25%' }} body={(rowData) => rowData.status.name}></Column>
                <Column field="dateAndTime" header="Date And Time" style={{ width: '25%' }}body={(rowData) => rowData.createdAt}></Column>
            </DataTable>
        </Box>
    );
}

export default Order;
