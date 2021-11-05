import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SalePage } from "../../types/sale";
import { formatLocalDate } from "../../utils/format";
import { BASE_URL } from "../../utils/requests";
import Pagination from "../Pagination";

const DataTable = () => {

    const [activePage,setActivePage] = useState(0);
    const [page,setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            })
    },[activePage])

    const changePage = (indexPage: number) => {
        setActivePage(indexPage);
    }

    const list = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            page.content?.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                        <td>{item.sellerDTO.name}</td>
                                        <td>{item.visited}</td>
                                        <td>{item.deals}</td>
                                        <td>{item.amount.toFixed(2)}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;