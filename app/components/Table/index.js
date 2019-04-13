import React from 'react';
import Proptypes from 'prop-types';
import './styles.scss';

const tableData = [
  {
    rowData: ['Topic', 'Mentions', 'Delta'],
    onClick: () => alert('clicked!'),
  },
  {
    rowData: ['Climate Change', 74, '+4'],
    onClick: () => alert('clicked!'),
  },
  {
    rowData: ['Cancer', 38, '-3'],
    onClick: () => alert('clicked!'),
  },
  {
    rowData: ['Healthcare', 48, '-2'],
    onClick: () => alert('clicked!'),
  },
];

const data = {
  listHeader: 'Frequently mentioned topics',
  listSubheader: 'What your constituents have been talking about',
  tableData,
};

class Table extends React.Component {
  render() {
    const { width } = this.props;

    return (
      <div className="table" style={{ width }}>
        <h2>{data.listHeader}</h2>
        {data.listSubheader && <p>{data.listSubheader}</p>}
        <div className="table-contents">
          {data.tableData.map(row => (
            <div className="table-row" onClick={() => row.onClick()}>
              {row.rowData.map(text => (
                <p className="table-cell">{text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  width: Proptypes.number,
};

export default Table;
