import React, { Component,createRef } from 'react';
import './todo.css';

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component

export default class Index extends Component {
  state = { todoList: [], filterType: 'all' };

  filterbtn = [
    {
      name: 'All',
      key: 'all',

    },
    {
      name: 'Pending',
      key: 'pending',
    },
    {
      name: 'Completed',
      key: 'completed',
    },
  ];

  /* changeTodoText = (event) => {
    // console.log(event.target.value);
    this.setState({ todoText: event.target.value });
  }; */

  addTodo = (event) => {
    try {
      event.preventDefault();
      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, {
            id: new Date().valueOf(),
            text: InputTextRef.current.value,
            isDone: false,
          },
          ],
          
        }),
        () => {
          this.InputTextRef.value = ' ';
        },
      );
    } catch (error) {

    }
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  toggleComplete = (item) => {
    console.log(item);
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  render() {
    const { todoList, filterType } = this.state;
    return (
      <div className="wrapper">
        <h1 className="heading">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            className="rounded-l-md"
            ref={this.createRef()}
          //  onChange={this.changeTodoText}
          />
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          {todoList
            .filter((x) => {
              switch (filterType) {
                case 'pending':
                  return !x.isDone;

                case 'completed':
                  return x.isDone;

                default:
                  return true;
              }
            })
            .map((item) => (
              <div key={item.id} className="flex items-center m-4">
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => this.toggleComplete(item)}
                />
                <p className="flex-1 px-8">{item.text}</p>
                <button type="button" className="btn" onClick={() => this.deleteTodo(item)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="w-full flex">
          {this.filterbtn.map((x) => (
            <button
              type="button"
              className="btn flex-1 rounded-none"
              key={x.key}
              onClick={() => this.setState({ filterType: x.key })}
            >
              {x.name}
            </button>
          ))}

        </div>
      </div>
    );
  }
}
