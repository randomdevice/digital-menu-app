import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native'

// Redux store config imports
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMenu } from '../../../redux/actions/actions'

// Component imports
import ItemCell from '../../../components/test/menu/ItemCell'

let DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        itemName: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        itemName: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        itemName: 'Third Item',
    },
];

export class Menu extends Component {
    componentDidMount() {
        this.props.updateMenu()
    }

    render() {
        return (
            <View>
                <Text>
                    Hello this is the menu
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
  

const mapStateToProps = (store) => ({
    menuState: store.menuState
})
const mapDispatchProps = (dispatch) => bindActionCreators({updateMenu}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Menu)