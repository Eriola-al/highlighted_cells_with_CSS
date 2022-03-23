import './Table.css';

const Table = ({ sweets }) => {
    return (
            <table>
                <thead>
                    <tr>
                        <th className="col-1">Sweet Type</th>
                        <th className="col-2">Flavor</th>
                        <th className="col-3">Preferred</th>
                        <th className="col-4">Requested By</th>
                    </tr>
                </thead>
                <tbody>
                    {sweets.map((sweet) => (
                        <tr key={sweet.id}>
                            <td>{sweet.title}</td>
                            <td>
                                <div>
                                    {sweet.choices.map((sweet) => (<div>{sweet.key}. {sweet.title}</div>))}
                                </div>
                            </td>
                            <td>{sweet.answer}</td>
                            <td>{sweet.group}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
};

export default Table;