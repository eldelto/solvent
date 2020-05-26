import React from 'react';

export default function ListView(props) {
  return (
    <div className="ListView">
      <Header />
      <ListViewMain toDoLists={props.toDoLists} onClick={props.selectList} />
      <Footer onClick={props.addList} />
    </div>
  );
}

function Header(props) {
  return (
    <div className="ListViewHeader header">
      <input className="ListViewSearchBar" type="text" placeholder="Type to search" />
      <button className="ListViewBackButton menuButton"></button>
    </div>
  );
}

function ListViewMain(props) {
  return (
    <div className="ListViewMain">
      {props.toDoLists.sort((a, b) => b.createdAt - a.createdAt)
      .map(toDoList =>
        <ToDoList key={toDoList.id} toDoList={toDoList} onClick={props.onClick} />
      )}
    </div>
  );
}

function ToDoList(props) {
  return (
    <button className="ListViewToDoList" onClick={() => props.onClick(props.toDoList)}>
      {props.toDoList.title}
    </button>
  );
}

function Footer(props) {
  return (
    <div className="ListViewFooter footer">
      <button className="ListViewAddButton" onClick={props.onClick}></button>
    </div>
  );
}