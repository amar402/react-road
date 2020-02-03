import React, { Component } from "react";
import "./Hello.css";
import TableList from "./countryList/table";

const URL = "https://restcountries.eu/rest/v2/all";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
      list: this.props.data,
      result: "",
      apiresponse: ""
    };
    this.isSearched = this.isSearched.bind(this);

    this.remove = this.remove.bind(this);
  }
  isSearched = e => {
    const result = this.state.apiresponse.filter(val =>
      val.name.toLowerCase().includes(e.target.value.toLowerCase())
        ? val.name.toLowerCase().includes(e.target.value.toLowerCase())
        : val.capital.toLowerCase().includes(e.target.value.toLowerCase())
        ? val.capital.toLowerCase().includes(e.target.value.toLowerCase())
        : val.languages.some(la =>
            la.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
    );
    this.setState({ result: result, searchItem: e.target.value });
  };
  remove = country => {
    const newcountryList = this.state.apiresponse.filter(l => {
      return l.name !== country.name;
    });

    const newsearchList =
      this.state.result &&
      this.state.result.filter(l => {
        return l.name !== country.name;
      });

    this.setState({ result: newsearchList, apiresponse: newcountryList });
  };
  isAction = e => {
    const newlist = this.state.apiresponse.filter(l => {
      return l.name.includes(e.name);
    });
    this.setState({ result: newlist });
  };
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(res => {
        this.setState({ apiresponse: res });
      });
  }
  render() {
    return (
      <div>
        <p>
          I am searching for {this.state.searchItem}
          <br />
          <input onChange={this.isSearched} />
        </p>
        <TableList
          result={this.state.result}
          apiresponse={this.state.apiresponse}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default Hello;
