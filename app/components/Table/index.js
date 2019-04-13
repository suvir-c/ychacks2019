import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Table extends React.Component {
  render() {
    const { width } = this.props;

    return (
      <div className="table" style={{ width }}>
        <h2>{this.props.listHeader}</h2>
        {this.props.listSubheader && <p>{this.props.listSubheader}</p>}
        <div className="table-contents">
          {this.props.tableData.map(row => (
            <div className="table-row">
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
  width: PropTypes.number,
  listHeader: PropTypes.string,
  listSubheader: PropTypes.string,
  tableData: PropTypes.array,
};

export default Table;
