import React from 'react';
import SideNavigation from 'components/SideNavigation';
import PropTypes from 'prop-types';
import Table from 'components/Table';

import { connect } from 'react-redux';

class FormDataPage extends React.Component {
  state = {
    reformattedFormData: [],
  };

  componentDidMount() {
    const reformattedFormData = [];
    this.props.forms.forEach(submission => {
      reformattedFormData.push({
        rowData: ['1-1-1111', submission.email, submission.issues],
      });
    });
    this.setState({
      reformattedFormData,
    });
  }

  render() {
    return (
      <div className="page-wrapper-sidebar home-page">
        <SideNavigation />
        <div className="page-body">
          <Table
            listHeader="Requests from Constituents"
            listSubheader="What your constituents have submitted to your website"
            tableData={this.state.reformattedFormData}
          />
        </div>
      </div>
    );
  }
}

FormDataPage.propTypes = {
  forms: PropTypes.object,
};

const mapStateToProps = state => ({
  forms: state.get('forms'),
});

export default connect(mapStateToProps)(FormDataPage);
