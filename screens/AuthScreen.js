import React from 'react';
import { ScrollView, StyleSheet, Button, Text, TextInput, View } from 'react-native';



export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text
                    style={{ fontSize: 27 }}>
                    Login
            </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <View style={{ margin: 7 }} />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});