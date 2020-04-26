
import React from 'react';
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { Container, Item, Input, Button, Label } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Home extends React.Component {

    state = {
        countryName: '',
        errMsg: '',
    }
    navigateTo() {

        this.props.navigation.navigate('CountryDetails', { Name: this.state.countryName })

    }

    render() {
        return (

            <SafeAreaView>
                <ScrollView>
                    <Container>
                        <View style={styles.commonView}>

                            <View style={{ marginBottom: moderateScale(30) }}>
                                <Item floatingLabel>
                                    <Label>Enter country</Label>
                                    <Input value={this.state.countryName}
                                        onChangeText={countryName => this.setState({ countryName })}
                                    />
                                </Item>
                            </View>

                            <View >
                                <Button rounded
                                    disabled={(this.state.countryName == '') ? true : false}
                                    onPress={() => this.navigateTo()}
                                >
                                    <Text style={{ marginLeft: moderateScale(150) }}>Submit</Text>
                                </Button>

                            </View>

                            <View >
                                <Text>{this.state.errMsg}</Text>
                            </View>

                        </View>
                    </Container>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    commonView: {
        padding: moderateScale(20),
        paddingTop: moderateScale(20),
        justifyContent: "center"
    }

})