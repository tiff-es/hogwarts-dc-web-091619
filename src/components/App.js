import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigsList from './Containers/PigsList'
import Filter from "./Filter";

class App extends Component {
    constructor() {
        super();
        this.state ={
            greased: false,
            pigs: hogs,
            sortBy: '',
            filteredPigs: hogs
        }
    }
filterGreased = () => {
    this.setState({greased: !this.state.greased})

    if (!this.state.greased){
        let filteredPigs = this.state.filteredPigs.filter(pig => pig.greased)
        this.setState({filteredPigs: filteredPigs})

  }else{
        this.setState({filteredPigs: this.state.pigs})
    }

}


    // handleGreasedToggle = () => {
    //     this.setState({greased: !this.state.greased})
    //
    // }
    handleSortBySelect = (e) => {
        let sortBy = e.target.value
        this.setState({sortBy: this.state.sortBy})
        this.sortPigs(sortBy)
    }

    sortPigs = (sortBy) => {
    let pigs = this.state.pigs
        let filteredPigs = this.state.filteredPigs
        // debugger
        {console.log(sortBy)}
        // if(event.target.value === 'weight'){
        //     let sortedPigs =   this.state.pigs.sort((a, b) => a.weight - b.weight)
        // }else(event.target.value === 'name'){
        //     let so
        //
        // }

        switch (sortBy){
            case "Name(A-Z ↓ )":
                return filteredPigs.sort((a,b) =>  {
                    return  a.name.localeCompare(b.name)

                })
            case "Name(Z-A ↑ )":
                return filteredPigs.sort((a,b) =>  {
                    return  b.name.localeCompare(a.name)

                })
            case 'Weight( ↓ )':
                return filteredPigs.sort((a,b)=> {
                    return   b.weight - a.weight

                })
            case 'Weight( ↑ )':
                return filteredPigs.sort((a,b)=> {
                    return   a.weight - b.weight

                })


            default:
                return filteredPigs
        }

    }


  render() {
    return (

      <div className="App">
          < Nav />
          <Filter
              sortBy={this.state.sortBy}
              greased={this.state.greased}
              handleGreasedToggle={this.filterGreased}
              handleSortBySelect={this.handleSortBySelect}
          />
          < PigsList pigs={this.state.filteredPigs} />


      </div>
    )
  }
}

export default App;
