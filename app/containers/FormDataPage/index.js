import React from 'react';
import SideNavigation from 'components/SideNavigation';
import Table from 'components/Table';

import { connect } from 'react-redux';

class FormDataPage extends React.Component {
  state = {
    reformattedFormData: [],
  };

  componentDidMount() {
    console.log('this.props', this.props);
    // this.props.forms.map(submission => {
    //   reformattedFormData.push({ rowData: ["1-1-1111", submission.email, submission.issues] });
    // });
    // this.state.reformattedFormData = {
    //   reformattedFormData
    // }
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

const mapStateToProps = state => ({ forms: state.get('forms') });

export default connect(mapStateToProps)(FormDataPage);
