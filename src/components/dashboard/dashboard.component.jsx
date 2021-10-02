import React from 'react'
import Button from '../button/button.component';
import { Link } from 'react-router-dom';

import "./dashboard.style.css";

const DashBoard = ({ data }) => {
    const { gameName, description, questions } = data;
    const score = questions.reduce((prv, q) => {
        const ans = q.correct === q.ans ? 1 : 0;
        return prv + ans;
    }, 0)
    const totalScore = `${(score * 100) / questions.length}/100`
    return (
        <div className='container p-3'>
            <h2>{gameName}</h2>
            <p className='w-75 w-md-100' >{description}</p>
            <div className='container game-container p-4'>
                <div className='row'>
                    <div className="col-md-8">
                        <h3>You Scored</h3>
                        <h1 className='total-score'>
                            {totalScore}
                        </h1>
                        <div className='py-3'>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className='mt-5'>
                            <Button className='btn-primary mr-3'>Dashboard</Button>
                            <Link to='/' className='btn-link ml-3'>Play Again</Link>
                        </div>
                    </div>


                    <div className="col-md-4 d-flex">

                    </div>
                </div>

            </div>
        </div>)
}


export default DashBoard;