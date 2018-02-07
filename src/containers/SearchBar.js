import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input } from 'semantic-ui-react';
import { startSearch } from '../actions/index';

class SearchBar extends Component {
    state = { 
        term: '', 
        loading: false 
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { term } = this.state;
        this.setState({ loading: true });
        this.props.startSearch(term);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div>
                    <Input 
                        name='term'
                        placeholder='Search...'
                        icon='search'
                        value={this.state.term} 
                        onChange={this.handleChange} 
                        fluid 
                        loading={this.state.loading} 
                    />
                </div>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        startSearch: startSearch
    }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(SearchBar);