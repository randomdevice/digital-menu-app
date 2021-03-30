import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase'

export class Register extends Component {
    constructor(props) { 
        super(props)

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, firstname, lastname } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        email,
                        firstname,
                        lastname
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            });

    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}/>
                <TextInput
                    placeholder="firstname"
                    onChangeText={(firstname) => this.setState({firstname})}/>
                <TextInput
                    placeholder="lastname"
                    onChangeText={(lastname) => this.setState({lastname})}/>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}/>
                <Button 
                    onPress={() => this.onSignUp()}
                    title="Sign Up"/>
            </View>
        )
    }
}

export default Register
