import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const WorkcenterView = () => {
    const context = React.useContext(StateContext);

    console.log(context.user.groups)
    let tGroup = context.user.groups
    let tierArr = [['tier 1', 'tier 1.5'], ['tier 2', 'tier 2.5']]

    /*
    while (tGroup.length > 0) {
        if (tierArr.length < 1) {
            tierArr.push([])
            tierArr[0].push(tGroup[0])
            tGroup.splice(tGroup.indexOf(tGroup[0]), 1)
        } else {
            for (let i = 0; i < tierArr.length; i++) {
                for (let j = 0; j < tierArr[i].length; j++) {
                    if (tierArr[i][j].includes(tGroup[0].name)) {
                        tierArr.push([])
                        tierArr[i-1].push(tGroup[0])
                        tGroup.splice(tGroup.indexOf(tGroup[0]), 1)
                        //? depending on tiering structure
                    } else if (tierArr[i][j].includes(tGroup[0].name)) {
                        tierArr[i+1].push(tGroup[0])
                        tGroup.splice(tGroup.indexOf(tGroup[0]), 1)
                        //? depending on tiering structure
                    }
                }
            }
        }
    }
    */

    return(
        <div>
            {
                tierArr.map(tier => {
                    return (
                        <div>
                            {
                                tier.map(org => {
                                    return <button>{org}</button>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WorkcenterView;
