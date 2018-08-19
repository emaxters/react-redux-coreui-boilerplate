import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { logout } from '../../actions/index';


class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            modal: false
        };
        this.toggleModel = this.toggleModel.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }
    toggleModel() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { logout } = this.props;
        return (
            <div>
                <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav>
                        <span className="text-avatar bg-info">A</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-lg" right>
                        <DropdownItem onClick={this.toggleModel}><i className="fa fa-user"></i>Edit Profile</DropdownItem>
                        <DropdownItem><i className="fa fa-key"></i> <a href="/">Change Password</a></DropdownItem>
                        <DropdownItem onClick={() => logout()}><i className="fa fa-sign-out"></i> Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModel} className={this.props.className}>
                        <ModalHeader toggle={this.toggleModel}>Update Profile</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleModel}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModel}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        );
    }
}

function mapStateToProps({ user }) {
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout
    }, dispatch);
}


export default (connect(mapStateToProps, mapDispatchToProps)(UserMenu));
