import React from 'react'
import { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Qna from '../qna/qna.component';

import "./start.style.css";

class Start extends Component {
    state = {
        diffculty: "easy",
        gameName: 'Understand the Proverbs!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, molestias. This game focuses on usage of Proverbs or Idioms for formal conversation.',
        instructions: 'Lorem ipsum, dolor sit. Maxime, modi tenetur! Officia nesciunt voluptatem ea fuga accusantium consequuntur itaque id sunt, quae rem ullam praesentium quis quod laboriosam earum fugit.'
    }

    onChangeHandler = (event) => {
        this.setState({
            diffculty: event.target.value
        })
    }
    render() {
        const { match } = this.props;
        const { gameName, description, instructions, diffculty } = this.state;
        return (
            <div>
                <Route exact path={match.path} render={this.cmp} />
                <Route path={`/qna`} render={(props) => <Qna gameName={gameName} diffculty={diffculty} instructions={instructions} description={description} {...props} />} />
            </div>
        )
    }

    cmp = () => {
        return (
            <div className='container p-3'>
                <h2>{this.state.gameName}</h2>
                <p className='w-75 w-md-100' >{this.state.description}</p>
                <div className='container game-container p-4'>
                    <h3>Instruction</h3>
                    <p>{this.state.instructions}</p>
                    <h6 className='mt-4'>SELECT DIFFICULTY LEVEL</h6>
                    <form className="w-100" onSubmit={this.onSubmitHandler}>
                        <div className="d-flex">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value='easy' onChange={this.onChangeHandler} name="diffculty" id="easy" />
                                <label className="form-check-label h-6" htmlFor="easy">Easy</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value='medium' onChange={this.onChangeHandler} name="diffculty" id="medium" />
                                <label className="form-check-label h-6 text-nowrap" htmlFor="medium">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value='hard' onChange={this.onChangeHandler} name="diffculty" id="hard" />
                                <label className="form-check-label h-6 text-nowrap" htmlFor="hard">Hard</label>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-space mt-5'>
                            <Link to='/qna' className='btn mx-auto btn-primary px-5 py-3'>Start Game</Link>
                        </div>
                    </form>
                </div>
            </div>)
    }
}


export default Start;