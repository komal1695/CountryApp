
import React from 'react';
import { View, Image, Text } from "react-native";
import { Spinner, Button } from 'native-base';
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export default class CountryDetails extends React.Component {
    state = {
        countryEntered: '',
        isloading: true,
        latlng: '',
        flag: '',
        population: '',
        capital: '',
        errmsg: '',
    }

    componentDidMount() {


        this.state.countryEntered = this.props.navigation.state.params.Name

        console.log("name", this.state.countryEntered);

        const url = `https://restcountries.eu/rest/v2/name/${this.state.countryEntered}`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                let counrty = res.filter((x) => x.name == this.state.countryEntered)
                console.log('counrty', counrty);

                this.setState({
                    isloading: false,
                    latlng: counrty[0].latlng,
                    flag: counrty[0].flag,
                    population: counrty[0].population,
                    capital: counrty[0].capital

                })
                console.log('', this.state.latlng);
                console.log('', this.state.flag);
                console.log('', this.state.population);
                console.log('capital', this.state.capital);

            })
            .catch(error => {
                console.log(error);
                this.setState({
                    errmsg: 'Please check Country Name',
                    isloading: false,

                })

            })

    }

    renderContent() {
        if (this.state.errmsg != '') {
            return (
                <View>
                    <Text style={{ textAlign: "center" }}>{this.state.errmsg}</Text>
                </View>
            )

        } else {
            return (
                <View style={{ padding: moderateScale(20) }}>
                    <View style={{ marginBottom: moderateScale(10) }}>
                        <Text style={{ marginBottom: moderateScale(20) }}>Capital :   {this.state.capital}</Text>
                        <Text style={{ marginBottom: moderateScale(20) }}>Population :  {this.state.population}</Text>
                        <Text style={{ marginBottom: moderateScale(20) }}>latlng : {this.state.latlng}</Text>
                        <Image source={this.state.flag} />
                    </View>
                    <View>
                        <Button rounded
                            onPress={() => this.navigateTo()}
                        >
                            <Text style={{ marginLeft: moderateScale(150) }}>Capital Weather</Text>
                        </Button>
                    </View>

                </View>
            )


        }

    }

    navigateTo() {

        this.props.navigation.navigate('CapitalWeather', { capital: this.state.capital })

    }
    render() {
        return (
            <View>
                {this.renderContent()}
            </View>

        )
    }
}