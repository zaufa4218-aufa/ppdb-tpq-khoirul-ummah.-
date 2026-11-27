import './Table.css'

export default function Table({ columns = [], data = [], loading = false, emptyMessage = 'Belum ada data.', className = '' }) {
  if (loading) {
    return (
      <div className="table-skeleton">
        {[1,2,3,4].map(i => (
          <div key={i} className="skeleton-row">
            {columns.map((_, j) => <div key={j} className="skeleton-cell" />)}
          </div>
        ))}
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className="table-empty">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={`table-wrapper ${className}`}>
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ width: col.width }} className={col.className}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.id ?? i}>
              {columns.map((col) => (
                <td key={col.key} className={col.className}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
