import React from 'react'
import { useSelector } from 'react-redux';

const Table = () => {
    const { stats } = useSelector(state => state.stats)

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Game Id</th>
                        <th>Score(Home)</th>
                        <th>Score(Visitor)</th>
                    </tr>
                </thead>
                <tbody>
                       {
                           stats?.data?.slice(0,6).map((x,i)=>(
                            <tr key={i}>
                                <>
                                  <td>{x.game.id}</td>
                                  <td>{x.game.home_team_score}</td>
                                  <td>{x.game.visitor_team_score}</td>
                                </>
                            </tr>
                            )
                        )
                       }
                </tbody>
            </table>
        </div>
    )
}

export default Table
