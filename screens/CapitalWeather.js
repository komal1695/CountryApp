
import React from 'react';
import { View, Image, Text } from "react-native";
import { Spinner, Button } from 'native-base';
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export default class CapitalWeather extends React.Component {
    state = {
        capitalEntered: '',
        isloading: true,
        latlng: '',
        flag: '',
        population: '',
        capital: '',
        errmsg: '',
    }

    componentDidMount() {


        this.state.capitalEntered = this.props.navigation.state.params.capital

        console.log("name", this.state.capitalEntered);

        const url = `http://api.weatherstack.com/current?access_key=38f4f9b5e9786e6bec0319c9d7a44c3b&query=${this.state.capitalEntered}`

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






    render() {
        return (
            <View>
                <View style={{ padding: moderateScale(20) }}>
                    <View style={{ marginBottom: moderateScale(10) }}>
                        <Text style={{ marginBottom: moderateScale(20) }}>Capital :   {this.state.capital}</Text>
                        <Text style={{ marginBottom: moderateScale(20) }}>Population :  {this.state.population}</Text>
                        <Text style={{ marginBottom: moderateScale(20) }}>latlng : {this.state.latlng}</Text>
                        {/* <image>Flag</image> */}
                    </View>


                </View>
            </View>

        )
    }
}