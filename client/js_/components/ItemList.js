import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemDeleteItem } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
      this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={item.id}>
                        {item.label}
                        <button onClick={() => this.props.deleteItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url)),
      deleteItem: (id) => dispatch(itemDeleteItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
