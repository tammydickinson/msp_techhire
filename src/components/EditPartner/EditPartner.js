import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import PartnerDropdown from './PartnerDropdown/PartnerDropdown';
import { triggerLogout } from '../../redux/actions/loginActions';
import NewPartnerForm from './NewPartnerForm/NewPartnerForm';
import SelectedPartnerInfo from './SelectedPartnerInfo/SelectedPartnerInfo';


const mapStateToProps = state => ({
  user: state.user,
  selectedPartner: state.editPartnerReducer.selectedPartner,
});

class EditPartner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedPartnerID: this.props.selectedPartner.id,
      partnerList: [],
      orgName: '',
      orgAbbreviation: '',
      orgAddress: '',
      orgWebsite: '',
      orgPhone: '',
      directorFirst: '',
      directorLast: '',
      businessType: '',
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.getPartners();
    if(this.state.selectedPartnerID === undefined) {
      this.getPartnerData(1);
    }
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && (this.props.user.userName === null || this.props.user.userRole !== 'admin')) {
      this.props.history.push('login');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('login');
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  handleChange = (event) => {
    this.getPartnerData(event.target.value);
    this.setState({
      selectedPartnerID: event.target.value,
    });
  }

  handleFormChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleFormSubmit = (event) => {
  event.preventDefault();
  if(this.state.orgName === '' || this.state.orgAbbreviation === '' || this.state.orgAddress === '' ||
      this.state.orgWebsite === '' || this.state.orgPhone === '' || this.state.directorFirst === '' ||
      this.state.directorLast === '' || this.state.businessType === '') {
          return alert('Please complete all fields!');
      }
  const objectToSend = {
    orgName: this.state.orgName,
    orgAbbreviation: this.state.orgAbbreviation,
    orgAddress: this.state.orgAddress,
    orgWebsite: this.state.orgWebsite,
    orgPhone: this.state.orgPhone,
    directorFirst: this.state.directorFirst,
    directorLast: this.state.directorLast,
    businessType: this.state.businessType,
  }
  axios({
      method: 'POST',
      url: '/api/editPartner/newPartner',
      data: objectToSend,
  })
  .then((response) => {
      console.log(response);
      this.setState({
          orgName: '',
          orgAbbreviation: '',
          orgAddress: '',
          orgWebsite: '',
          orgPhone: '',
          directorFirst: '',
          directorLast: '',
          businessType: '',
      });
      this.getPartners();
      this.closeModal();
  })
  .catch(err => console.log(err));
}

  getPartners = () => {
    axios({
      method: 'GET',
      url: `/api/editPartner/partners`
    })
    .then((response) => {
      this.setState({
        partnerList: response.data
      });
    })
    .catch(err => console.log(err))
  }

  getPartnerData = (id) => {
    let action = {
      type: USER_ACTIONS.GET_SELECTED_PARTNER_DATA,
      payload: id,
    };
    this.props.dispatch(action);
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div id="editPartnerPage">

          <h1>Select A Partner</h1>
          <PartnerDropdown
            partners={this.state.partnerList}
            handleChange={this.handleChange}
            getPartnerData={this.getPartnerData}
          />
          <SelectedPartnerInfo />
          <button value="showModal" onClick={this.openModal}>Add New Partner</button>
          <NewPartnerForm
            show={this.state.open} 
            getPartners={this.getPartners}
            closeModal={this.closeModal}
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleFormChange}
            orgName= {this.state.orgName}
            orgAbbreviation= {this.state.orgAbbreviation}
            orgAddress= {this.state.orgAddress}
            orgWebsite= {this.state.orgWebsite}
            orgPhone= {this.state.orgPhone}
            directorFirst= {this.state.directorFirst}
            directorLast= {this.state.directorLast}
          />
          <button id="logoutButton" onClick={this.logout}>Log Out</button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EditPartner);