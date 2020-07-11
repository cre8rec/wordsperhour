import React from "react";
import styled from "styled-components";
import { handleEnter } from "../Components/HandleEnter";
import { DisplayData, AddData } from "../DispayData/DisplayData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ProjectItems } from "../Components/ProjectItems";
import { Login } from "../Components/loginButton";


const database = window.firebase.database();


const NewHeader = styled.div`
  width: 90%;
  height: 100px;

  position: fixed;
  top: 0;
  display: grid;
  z-index: 100;

  padding-top: 20px;
  grid-template-columns: 20% 20% 20% 20% 20%;
  color: #07461f;

  border-radius: 0 0px 9px 9px;
  /* background: linear-gradient(145deg, #ffffff, #e6e6e6); */
  box-shadow: 5px 5px 69px #fcfcfc, -5px -5px 69px #ffffff;
  vertical-align: top;
  text-align: center;
  padding-left: 0px;
  min-width: 600px;
`;

const OutHeader = styled.div`
  width: 100vw;
  height: 100px;

  position: fixed;
  top: 0;

  justify-content: center;
  padding-top: 20px;

  color: #07461f;

  border-radius: 0 0px 9px 9px;
  display: grid;
  grid-template-columns: 80% 20%;
  vertical-align: top;
  text-align: center;
  padding-left: 0px;
  background-color: red;
`;

const Pointer = styled.div`
  cursor: pointer;
`;

const FormContainer = styled.div`
  color: #07461f;
  width: 180px;
  min-width: 180px;
  min-height: 500px;
  height: 90vh;
  background-color: white;

  display: flex;
  justify-content: center;
  flex-flow: column;
  z-index: 5;

  border-radius: 9px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 14px 14px 28px #e8e8e8, -14px -14px 28px #ffffff;
  position: relative;
  top: 5vh;
`;

const DisplayContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  justify-content: center;

  text-align: center;
  min-width: 500px;

  display: flex;
  transform: translate(0, 0);

  flex-flow: column;

  min-width: 600px;
`;

const AppContainer = styled.div`
  display: flex;
  text-align: center;
`;
const UserStatus = styled.div`
  color: black;
`;

const LoginButton = styled.div`
  cursor: pointer;
  min-width: 100px;
`;

const Logo = styled.div`
  font-family: "MuseoModerno", cursive;
  position: absolute;
  display: block;
  top: 20px;
  left: -10px;

  color: #07461f;
  font-size: 24px;

  min-width: 200px;
  width: 200px;
  line-height: 20px;
`;

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };

    this.addProject = this.addProject.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  sortByName = (event) => {
    console.log(this.state.projects);
    this.state.projects.sort((a, b) => {
      if (a.project > b.project) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState((prevState) => {
      return {
        projects: prevState.projects.concat(),
      };
    });
  };

  addData = (projects, loggedIn) => {
      var newProjectsref = database.ref('projects').push();
      console.log(this)

  }

  sortByDate = (event) => {
    console.log(this.state.projects);
    this.state.projects.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState((prevState) => {
      return {
        projects: prevState.projects.concat().reverse(),
      };
    });
  };

  sortByHours = (event) => {
    console.log(this.state.projects);
    this.state.projects.sort((a, b) => {
      if (a.hours > b.hours) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState((prevState) => {
      return {
        projects: prevState.projects.concat(),
      };
    });
  };

  sortByWords = (event) => {
    console.log(this.state.projects);
    this.state.projects.sort((a, b) => {
      if (a.words > b.words) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState((prevState) => {
      return {
        projects: prevState.projects.concat(),
      };
    });
  };

  addProject = (event) => {
    event.preventDefault();
    if (this.state.startDate > 0 == true && this.state.hours > 0 == true && this.state.words > 0 == true && this.state.project.length > 0 === true) {
      const newProject = {
        key: Date.now(),
        project: this.state.project,
        words: this.state.words,
        hours: this.state.hours,
        date: this.state.startDate,
      };

      this.state.projects.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else {
          return -1;
        }
      });

      this.setState({
        project: "",
        words: "",
        hours: "",
        date: "",
      });

      this.setState((prevState) => {
        return {
          projects: prevState.projects.concat(newProject).reverse(),
        };

    

      });
    } else {
      return alert("please fill in all fields");
    }


  };

  handleDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  deleteItem(key) {
    var filteredItems = this.state.projects.filter(function (project) {
      return project.key !== key;
    });

    this.setState({
      projects: filteredItems,
    });
  }

  render() {
    return (
      <AppContainer>
        <FormContainer>
          <form onSubmit={this.addProject}>
            <Logo>
              words <br /> per hour
            </Logo>

            <label>
              Project:
              <input
                type="text"
                name="project"
                onKeyDown={handleEnter}
                value={this.state.project}
                onChange={this.handleChange}
              />
            </label>

            <br />
            <br />

            <label>
              Word Count:
              <input
                type="number"
                name="words"
                min="0"
                onKeyDown={handleEnter}
                value={this.state.words}
                onChange={this.handleChange}
              />
            </label>

            <br />
            <br />

            <label>
              Hours Worked:
              <input
                type="number"
                name="hours"
                step="0.1"
                min="0"
                onKeyDown={handleEnter}
                value={this.state.hours}
                onChange={this.handleChange}
              />
            </label>

            <br />
            <br />

            <div>
              <label>
                Date:
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDate}
                />
              </label>
            </div>
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        </FormContainer>

        <DisplayContainer>
          <ProjectItems
            entries={this.state.projects}
            delete={this.deleteItem}
          />

          <NewHeader>
            <h4>sort by</h4>
            <h3 onClick={this.sortByName}>Project </h3>
            <h3 onClick={this.sortByHours}>Hours</h3>
            <h3 onClick={this.sortByWords}>Words</h3>
            <h3 onClick={this.sortByDate}>Date</h3>
          </NewHeader>
        </DisplayContainer>

        <DisplayData entries={this.state.projects} />
      </AppContainer>
    );
  }
}
