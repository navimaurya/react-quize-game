import React, { Component } from 'react'
import { Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';
import DashBoard from '../dashboard/dashboard.component';
import RadioButton from '../radioButton/radioButton.component';


import "./qna.style.css";

class Qna extends Component {
    state = {
        diffculty: null,
        gameName: 'Understand the Proverbs!',
        description: 'This game focuses on usage of Proverbs or Idioms for formal conversation',
        currentQ: 0,
        questions: [
            {
                q: "A fair weather friend always tries to get benefit in bad situation of his friends and benefactors.",
                options: ['To borrow money',
                    'To steal belongings of',
                    'to fish in troubled waters',
                ],
                correct: 2,
                ans: null
            },
            {
                q: "His arrogant behavior with others has left him isolated.",
                options: ['To be penniless ', 'To be very sick', "high and dry"],
                correct: 2,
                ans: null
            },
            {
                q: "All the residents of the colony celebrated noisly in public places on the eve of festival",
                options: ['To white wash buildings',
                    'painted the town red', 'To create nuisances'],
                correct: 1,
                ans: null
            },
            {
                q: "The honest policy of the chairman of the committee has made him very popular among the residents of the town.",
                options: ['Clever and Deceitful',
                    'Fair and square',
                    'Relevant and practical'],
                correct: 1,
                ans: null
            },
            {
                q: "Due his bad habit of borrowing money from others, he will be in trouble one day.",
                options: ['be in the mire',
                    'To be imprisoned',
                    'To be insulted'],
                correct: 0,
                ans: null
            },
            {
                q: "I do not like his habit of not to speak plain .",
                options: ['To brag about',
                    'Mincing matters',
                    'To show off.'],
                correct: 1,
                ans: null
            },
            {
                q: "In order to become a successful administrator in the office, an executive has to be updated what is happening in surrounding .",
                options: ['To be very polite',
                    'To keep his ears to the ground',
                    'To have a strict cont'],
                correct: 1,
                ans: null
            },
            {
                q: ' He has to work without enthusiasm of starting with this new project as he was least interested to take up it.',
                options: [
                    'To complete quickly.',
                    'To go through the motion',
                    'To do without any interest.'],
                correct: 1,
                ans: null
            }
        ]
    }

    componentDidMount() {
        const { diffculty, gameName, description } = this.props;
        if (!diffculty) {
            return <Redirect to='/' />
        }
        this.setState({
            diffculty,
            gameName,
            description
        })
    }

    updateItem(index, value) {
        this.setState({
            questions: [
                ...this.state.questions.slice(0, index),
                Object.assign({}, this.state.questions[index], { ans: value * 1 }),
                ...this.state.questions.slice(index + 1)
            ]
        });
    }

    onChangeHandler = (event) => {
        const { value } = event.target;
        const { currentQ } = this.state;
        console.log(value);
        this.updateItem(currentQ, value);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const { currentQ } = this.state
        this.setState({
            questions: this.state.questions,
            currentQ: currentQ + 1
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        const { currentQ } = this.state;
        if (currentQ === this.state.questions.length) {
            const { match } = this.props;
            return (
                <div>
                    <Route path={`${match.path}/dashboard`} render={() => <DashBoard data={this.state} />} />
                    <Redirect to={`${match.path}/dashboard`} />
                </div>
            )
        }
        const { diffculty, gameName, description, instructions } = this.props;
        const { q, options, ans } = this.state.questions[currentQ]
        return (
            <div className='container p-3'>
                <h2>{gameName}</h2>
                <div className='row'>
                    <div className='col-9'>
                        <p className='' >{description}</p>

                    </div>
                    <div className='col-3 '>
                        <h6>DIFFCULTY LEVEL</h6>
                        <div className='d-flex  align-items-baseline'>
                            <p className='mr-2' style={{ borderRadius: '50%', height: '15px', width: '15px', background: '#2dabff' }}></p>
                            <h5 className=' d-flex text-capitalize'>{diffculty}</h5>
                        </div>


                    </div>
                </div>

                <div className='container game-container p-4'>
                    <div className='row'>
                        <div className="col-md-9">
                            <span style={{ height: '18px' }}></span>
                            <h5 className='py-2'>Q{currentQ + 1}.{' '}{q}</h5>
                            <form className="w-100" onSubmit={this.onSubmitHandler}>
                                {
                                    options.map((qns, i) => (
                                        <RadioButton type={ans === i ? 'checked' : ""} onChange={this.onChangeHandler} value={i} name={`q${currentQ}`} id={`q${currentQ + '' + i}`} key={`q${currentQ + '' + i}`} >{qns}</RadioButton>
                                    ))
                                }

                                <div className='pt-3 form-group'>
                                    <h4>Reason</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus!  </p>
                                    <div className="d-flex">
                                        <Button className='btn-primary'>Next</Button>
                                        <Link className='btn-link ml-3'>Show Answer</Link>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="col-md-3 d-none d-md-block">
                            <div className='px-2'>
                                <h3>Instruction</h3>
                                <p>{instructions}</p>

                            </div>

                        </div>
                    </div>

                </div>
            </div >
        )
    }
}



export default Qna;