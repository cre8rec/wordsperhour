import React, { Component } from "react";
import styled from "styled-components";
import { CSSTransitionGroup } from "react-transition-group";

const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  width: 90%;
  vertical-align: top;
  text-align: center;
  padding: 10px;
  color: #07461f;

  transition: ease 1s;
`;

const DisplayList = styled.div`
  height: 80vh;
  position: relative;
  top: 100px;
  background-color: ;
  overflow: scroll;
  padding-left: 0px;
  padding-bottom: 80px;
  display: flex;
  flex-flow: column;
  vertical-align: top;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const XButton = styled.div`
    width:10px;
    min-width: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#07461F;
    border-radius: 9px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:  5px 5px 69px #fcfcfc, 
                 -5px -5px 69px #ffffff;
               border: none;
               height: 30px;
               width: 100px;

    cursor: pointer;
    &:active{
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  10px 10px 21px #fcfcfc, 
             -10px -10px 21px #ffffff;
  `;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class ProjectItems extends Component {
  constructor(props) {
    super(props);

    this.createProject = this.createProject.bind(this);
  }

  createProject(item) {
    const newDate = item.date.toString().substring(0, 15);
    const numWords = item.words;

    return (
      <>
        <ProjectDiv>
          <ButtonContainer>
            <XButton key={item.key} onClick={() => this.delete(item.key)}>
              {" "}
              x{" "}
            </XButton>
          </ButtonContainer>
          <ButtonContainer>
            <h3>{item.project}</h3>
          </ButtonContainer>
          <ButtonContainer>
            <h3>{item.hours}</h3>
          </ButtonContainer>
          <ButtonContainer>
            <h3>{item.words}</h3>
          </ButtonContainer>
          <ButtonContainer>
            <p>{newDate}</p>
          </ButtonContainer>
        </ProjectDiv>
      </>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var projectEntries = this.props.entries;
    var listItems = projectEntries.map(this.createProject);

    return <DisplayList className="theList">{listItems}</DisplayList>;
  }
}
