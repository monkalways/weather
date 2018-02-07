import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input } from 'semantic-ui-react';
import { startSearch, changeTerm } from '../actions/index';

const SearchBar = ({ loading, term, startSearch, changeTerm }) => {

    const handleChange = (event, data) => {
        const term = data.value;
        changeTerm(term);
    }

    const handleSubmit = () => {
        startSearch(term);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Input 
                    name='term'
                    placeholder='Search...'
                    icon='search'
                    value={term} 
                    onChange={handleChange} 
                    fluid 
                    loading={loading} 
                />
            </div>
        </Form>
    );
}

const mapStateToProps = ({ weather }) => ({
    loading: weather.loading,
    term: weather.term
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        startSearch,
        changeTerm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);