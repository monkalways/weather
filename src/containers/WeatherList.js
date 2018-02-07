import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import Chart from '../components/Chart';
import CityGoogleMap from '../components/CityGoogleMap';

const WeatherList = ({ cities }) => {
    console.log(cities);

    const renderWeather = (cityData) => {
        const temps = [];
        const pressures = [];
        const humidities = [];
        const { lon, lat } = cityData.city.coord;

        cityData.list.forEach(item => {
            temps.push(item.main.temp - 273);
            pressures.push(item.main.pressure);
            humidities.push(item.main.humidity);
        });

        return (
            <Table.Row key={cityData.city.id}>
                <Table.Cell>
                    <CityGoogleMap lon={lon} lat={lat} />
                </Table.Cell>
                <Table.Cell>
                    <Chart data={temps} color="purple" units="°C" />
                </Table.Cell>
                <Table.Cell>
                    <Chart data={pressures} color="green" units="hPa" />
                </Table.Cell>
                <Table.Cell>
                    <Chart data={humidities} color="blue" units="%" />
                </Table.Cell>
            </Table.Row>
        );
    };

    return (
        <Table singleLine striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={4}>City</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Temperature (°C)</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Pressure (hPa)</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Humidity (%)</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                { cities.map((cityData) => renderWeather(cityData)) }
            </Table.Body>
        </Table>
    );
}

const mapStateToProps = ({ weather }) => ({
    cities: weather.cities
});

export default connect(mapStateToProps)(WeatherList);