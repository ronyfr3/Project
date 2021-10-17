import React from 'react'
import { useSelector } from "react-redux";
import { BsArrowUpLeft,BsArrowDownRight } from "react-icons/bs"
import moment from "moment"

const RecentActivity = () => {
    const { stats } = useSelector(state => state.stats)

    return (
        <div className="recent-activity">
            <h3>Recent Activities</h3>
            <table>
                <tbody>
                       {
                           stats?.data?.slice(50,53).map((x,i)=>(
                            <tr key={i}>
                                <>
                                  <td>{i%2===0 ? <BsArrowUpLeft className="arrow_left"/> : <BsArrowDownRight className="arrow_right"/>}</td>
                                  <td>{x.team.full_name}</td>
                                  <td>{moment.utc(x.game.date).format('MM-DD-YY')}</td>
                                  <td>{x.game.status}</td>
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

export default RecentActivity
