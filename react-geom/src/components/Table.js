import React, { useState, useEffect } from 'react';
import './Table.css';

export function filterDataGeneral(filters, data, sortConfig) {
  const filteredData = data.filter(row =>
    row.Measure === filters.measure &&
    row.Approach === filters.approach &&
    (filters.year === 'Latest' ? row.Latest === '1' : true) &&
    filters.region.includes(row.Region)
  );

  const sorted = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return sorted;
}

export function filterDataCountry(filters, data) {
  const country = filters.country;
  const year = filters.year.toString();

  const filteredData = data.filter(
    (row) => row.c === country && row.y === year
  )[0];

  return filteredData;
}

export function handleData(filters, data, sortConfig, tableType) {
  if (!data || !filters) {
    console.log('Data or filters are incomplete.');
    return;
  }

  if (tableType === 'general') {
    const sorted = filterDataGeneral(filters, data, sortConfig);
    return sorted;
  } else if (tableType === 'country') {
    const filteredData = filterDataCountry(filters, data);
    if (!filteredData) {
      console.log('No data found for this country and year.');
      return;
    }
    return filteredData;
  }
}

function Table({ data, filters, tableType }) {
  const [tableData, setTableData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    const dataTableProssed = handleData(filters, data, sortConfig, tableType);
    if(dataTableProssed) {
      setTableData(dataTableProssed);
    } else {
      return;
    }
  }, [data, filters, sortConfig, tableType]);

  function handleSort(key) {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
    });
  }
  
  return (
    <div className="table-container">
      {tableType === 'general' ? (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('Name')}>Name</th>
              <th onClick={() => handleSort('Year')}>Year</th>
              <th onClick={() => handleSort('Total Inequality')}>Total Inequality</th>
              <th onClick={() => handleSort('IOp Ex-Ante RF')}>IOp Ex-Ante RF</th>
              <th onClick={() => handleSort('IOp Ex-Post')}>IOp Ex-Post</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Year}</td>
                <td>{Number(item['Total Inequality']).toFixed(2)}</td>
                <td>{Number(item['IOp Ex-Ante RF']).toFixed(2)}</td>
                <td>{Number(item['IOp Ex-Post']).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <p>Absolute Inequality of Opportunity</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Total Sample Inequality</th>
                <th>Ex-Ante Tree</th>
                <th>Ex-Ante RF</th>
                <th>Ex-Post</th>
              </tr>
            </thead>
            <tbody>
              <tr key="gini">
                <td>Gini</td>
                <td>{Number(tableData["Gini"]).toFixed(2)}</td>
                <td>{Number(tableData["Gini_trees_exante"]).toFixed(2)}</td>
                <td>{Number(tableData["Gini_rforest_exante"]).toFixed(2)}</td>
                <td>{Number(tableData["Gini_trees_expost"]).toFixed(2)}</td>
              </tr>
              <tr key="MLD">
                <td>MLD</td>
                <td>{tableData["MLD"]}</td>
                <td>{Number(tableData["MLD_trees_exante"]).toFixed(2)}</td>
                <td>{Number(tableData["MLD_rforest_exante"]).toFixed(2)}</td>
                <td>{Number(tableData["MLD_trees_expost"]).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <p>Relative Inequality of Opportunity</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Total Sample Inequality</th>
                <th>Ex-Ante Tree</th>
                <th>Ex-Ante RF</th>
                <th>Ex-Post</th>
              </tr>
            </thead>
            <tbody>
              <tr key="gini">
                <td>Gini</td>
                <td>{Number(tableData["Gini"]).toFixed(2)}</td>
                <td>{Number(tableData["Gini_trees_exante_rel"]).toFixed(2)}</td>
                <td>{Number(tableData["Gini_rforest_exante_rel"]).toFixed(2)}</td>
                <td>{Number(tableData["Gini_trees_expost_rel"]).toFixed(2)}</td>
              </tr>
              <tr key="MLD">
                <td>MLD</td>
                <td>{tableData["MLD"]}</td>
                <td>{Number(tableData["MLD_trees_exante_rel"]).toFixed(2)}</td>
                <td>{Number(tableData["MLD_rforest_exante_rel"]).toFixed(2)}</td>
                <td>{Number(tableData["MLD_trees_expost_rel"]).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Table;
