import React from 'react';

import RToDoList from './RToDoList'

import { ReactComponent as Menu } from '../../icons/menu.svg'

export default function DetailView(props) {
  return (
    <div className="DetailView">
      <Header onMenuClick={props.activateListView} />
      <div className="DetailViewMain">
        {props.toDoList ?
          <RToDoList
            toDoList={props.toDoList}
            checkItem={props.checkItem}
            addItem={props.addItem}
            removeItem={props.removeItem}
            moveItem={props.moveItem}
            renameItem={props.renameItem}
            renameList={props.renameList}
          />
          : ""}
      </div>
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <div className="DetailViewHeader header">
        <span className="HeaderSpacer"></span>
        <h1 className="HeaderTitle">Solvent</h1>
        <button className="DetailViewMenuButton menuButton" onClick={props.onMenuClick}>
          <Menu />
        </button>
      </div>
    </header>
  );
}