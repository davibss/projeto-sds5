const DataTable = () => {

    const list = [1,2,3,4,5,6,7,8,9,10];

    return (
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
                        list.map(index => {
                            return (
                                <tr key={index}>
                                    <td>22/04/2021</td>
                                    <td>Barry Allen</td>
                                    <td>34</td>
                                    <td>25</td>
                                    <td>15017.00</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;