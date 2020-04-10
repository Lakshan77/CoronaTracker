import React from 'react'; 

import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImg from './img/unnamed.jpg';

class App extends React.Component{

    state = {
        data: {},
        country: '',
    }


    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({data: fetchedData});
    }
handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country});

}
    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                  <h1 className={styles.headerText}>COVID-19 Tracker</h1>
                </div>
                <img className={styles.image} src={coronaImg} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>

                <div className={styles.footer}>
                    <footer>
                        <p>Developed by :- Lakshan</p>
                        <p>Email :- DevSolver37@gmail.com</p>
                    </footer>
                </div>
            </div>
            
        )
    }
}

export default App;