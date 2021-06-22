import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

export class ForexLiveWall extends Component {
    static displayName = ForexLiveWall.name;

    constructor(props) {
        super(props);
        this.state = {
            statusBar: '',
            currentCurrencyPair: 'EUR/USD',
            currentInterval: 10, // seconds
            exchangeRatePrev: 0,
            changesStyle: 'badge rate-neutral',
            exchangeRateHistoryLabels: [],
            exchangeRateHistory: [],
            exchangeRate: [],
            loading: true
        };

        this.handleChangeInterval = this.handleChangeInterval.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static renderExchangeRate(exchangeRate, changesBadgeStyle) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>BID</th>
                        <th>ASK</th>
                        <th>Open</th>
                        <th>Low</th>
                        <th>High</th>
                        <th>Changes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {exchangeRate.map((rate, i) =>
                    <tr key={rate.i}>
                        <td>{rate.ticker}</td>
                        <td>{rate.bid}</td>
                        <td>{rate.ask}</td>
                        <td>{rate.open}</td>
                        <td>{rate.low}</td>
                        <td>{rate.high}</td>
                        <td><span className={changesBadgeStyle}>{rate.changes}</span></td>
                        <td>{rate.date}</td>
                    </tr>
                )}
                </tbody>
            </table>                
        );
    }

    static updateChartData(data) {
        return (
            <div>
                {data.length}
        {data.map((rate, i) =>
            <div key={rate.i}>
                {rate.changes}
            </div>
            )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <div className="alert alert-light" role="alert">Please type currency pair to track exchange rate.</div>
            : ForexLiveWall.renderExchangeRate(this.state.exchangeRate, this.state.changesStyle);

let chart = ForexLiveWall.updateChartData(this.state.exchangeRateHistory);

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div className="row">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Currency pair" value={this.state.currentCurrencyPair} onChange={this.handlePairChange} />
                            <small className="text-muted">Example: EUR/USD EUR/GBP EUR/RUB EUR/JPY</small>
                        </div>
                        <div className="col-auto">
                            <select className="form-control" onChange={this.handleChangeInterval} value={this.state.currentInterval}>
                                <option value="2">2 sec.</option>
                                <option value="5">5 sec.</option>
                                <option value="10">10 sec.</option>
                                <option value="30">30 sec.</option>
                                <option value="60">1 min.</option>
                                <option value="300">5 min.</option>
                                <option value="600">10 min.</option>
                            </select>
                            <small className="text-muted">Interval</small>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                        </div>
                    </div>
                    <div>
                        {this.state.statusBar}
                    </div>
                    <br />
                    {contents}
                </div>
            </form>
        );
    }

    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        const currencyExchange = this.state.currentCurrencyPair;
        if (currencyExchange !== '') {
            const currencies = currencyExchange.split('/');

            if (currencies[0] === undefined || currencies[1] === undefined || currencies[0].length !== 3 || currencies[1].length !== 3) {
                this.setState({ statusBar: 'Wrong currency pair value.' });
            }
            else {
                this.fetchCurrencyData(this.state.currentCurrencyPair);

                clearInterval(this.interval);
                this.interval = setInterval(() => this.fetchCurrencyData(this.state.currentCurrencyPair), this.state.currentInterval * 1000);
            }
        }
        else {
            this.setState({ statusBar: 'Please enter value.' });
        }

        event.preventDefault();
    }

    handlePairChange = (event) => {
        this.setState({ currentCurrencyPair: event.target.value });
    }

    handleChangeInterval = (event) => {
        console.log(event.target.value);
        clearInterval(this.interval);
        this.setState({
            currentInterval: event.target.value,
        });
        this.interval = setInterval(() => this.fetchCurrencyData(this.state.currentCurrencyPair), event.target.value * 1000);
    };

    async fetchCurrencyData(currencyExchange) {
        if (currencyExchange !== '') {
            // just for demo
            // const response = await fetch('forex');
            const response = await fetch(`https://financialmodelingprep.com/api/v3/fx/${currencyExchange.replace('/', '')}?apikey=c768145b6c9849a8304f4538df1bb2fc`);
            const data = await response.json();

            if (this.state.exchangeRatePrev === data[0].changes)
                this.setState({ changesStyle: 'badge rate-neutral' });
            else if (this.state.exchangeRatePrev > data[0].changes)
                this.setState({ changesStyle: 'badge rate-low' });
            else
                this.setState({ changesStyle: 'badge rate-high' });

            this.setState({
                exchangeRate: data,
                exchangeRatePrev: data[0].changes,
                statusBar: `Updated: ${new Date().toLocaleTimeString()}`,
                loading: false
            });

            this.state.exchangeRateHistoryLabels.push(new Date().toLocaleTimeString());
            this.state.exchangeRateHistory.push(data[0].changes);
        }
    }
}
