import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native'

// Redux store config imports
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMenu } from '../../../redux/actions/actions'

// Component imports
import ItemCell from '../../../components/test/menu/ItemCell'

export class MenuContainer extends Component {
    componentDidMount() {
        this.props.updateMenu()
    }

    render() {
        return (
            <Menu></Menu>
        )
    }
}



const mapStateToProps = (store) => ({
    menuState: store.menuState
})
const mapDispatchProps = (dispatch) => bindActionCreators({updateMenu}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(MenuContainer)