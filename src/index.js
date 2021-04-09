import "./styles.css";
import cube from "./data";
import result from "./result";

console.log(cube);
console.log(result);

const res = cube
.map(row => ({
    cluster: row[0].qText,
    squad: row[1].qText,
    productOwner: row[2].qText,
    parentKey: row[3].qText,
    parentSummary: row[4].qText,
    parentType: row[5].qText,
    childKey: row[6].qText,
    childSummary: row[7].qText,
    childType: row[8].qText,
    childQty: row[9].qNum,
    isRun: Boolean(row[10].qNum),
    isNew: Boolean(row[11].qNum)
}))
.reduce((acc, current, idx) => {
    if (!acc.some(cluster => cluster.title  === current.cluster)) {
        acc.push({
            title: current.cluster,
            squads: [],
        })
    }
    
    acc.forEach((cluster) => {
        if (cluster.title === current.cluster) {
            if (!cluster.squads.some(squad => squad.title === current.squad)) {
                cluster.squads.push({
                    title: current.squad,
                    isNew: current.isNew,
                    isRun: current.isRun,
                    issues: []
                })
            }

            cluster.squads.forEach(squad => {
                if (squad.title === current.squad) {
                    if (!squad.issues.some(issue => issue["data"].key === current.parentKey)) {
                        squad.issues.push({
                             data: {
                                key: current.parentKey,
                                title: current.parentSummary,
                                type: current.parentType,
                                qty: current.childQty
                             }, 
                             children: [],
                        })
                    }

                    squad.issues.forEach(issue => {
                        if (!squad.issues.some(issue => issue["children"].key === current.childKey)) {
                            issue.children.push({
                                data: {
                                    key: current.childKey,
                                    title: current.childSummary,
                                    type: current.childType
                                 }
                            })
                        }
                    })


                }

                
            })
        }
    })


    
    return acc
}, [])
console.log(res);




// const transformData = (data) => {
//     return data.map(el => {
//         return {
//             title: el[0].qText,
//             squads: {
//                 title: el[1].qText,
//                 productOwner: el[2].qText,
//                 bound: "15% (mocked)",
//                 isNew: Boolean(el[11].qNum),
//                 isRun: Boolean(el[10].qNum),
//                 issues: [{ // тут должен быть массив нескольких объектов
//                     data: {
//                         type: el[5].qText,
//                         key: el[3].qText,
//                         qty: el[9].qText,
//                         title: el[4].qText
//                     },
//                     children: [{
//                         key: el[6].qText,
//                         qty: el[9].qText,
//                         title: el[7].qText,
//                         type: el[8].qText
//                     }]
//                 }]
//             }
//         }
//     })
// }

// console.log(transformData(Data))
