const cube = require('./data')

const convertDataWithReduce = (cube) => {
  return cube
    .map((row) => {
      return {
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
        isNew: Boolean(row[11].qNum),
      }
    })
    .reduce((clustersAcc, clustersCurrent, _, nodes) => {
      if (
        !clustersAcc.some(
          (cluster) => cluster.title === clustersCurrent.cluster
        )
      ) {
        clustersAcc.push({
          title: clustersCurrent.cluster,
          squads: nodes
            .filter((node) => node.cluster === clustersCurrent.cluster)
            .reduce((squadsAcc, squadsCurrent, _, filtertedByCluster) => {
              if (
                !squadsAcc.some((squad) => squad.title === squadsCurrent.squad)
              ) {
                squadsAcc.push({
                  title: squadsCurrent.squad,
                  isNew: squadsCurrent.isNew,
                  isRun: squadsCurrent.isRun,
                  productOwner: squadsCurrent.productOwner,
                  bound: '15% (mocked)',
                  tagged: false,
                  issues: filtertedByCluster
                    .filter((node) => node.squad === squadsCurrent.squad)
                    .reduce(
                      (issuesAcc, currentIssues, _, filteredBySquads) => {
                        if (
                          !issuesAcc.some(
                            (issue) =>
                              issue.data?.key === currentIssues.parentKey
                          )
                        ) {
                          issuesAcc.push({
                              data: {
                                key: currentIssues.parentKey,
                                qty: currentIssues.childQty,
                                title: currentIssues.parentSummary,
                                type: currentIssues.parentType,
                              },
                              children: filteredBySquads
                              .filter(node => node.parentKey === currentIssues.parentKey)
                              .map(el => {
                                return {
                                    data: {
                                      key: el.childKey,
                                      title: el.childSummary,
                                      type: el.childType,
                                      qty: 1,
                                    },
                                }
                              })
                          })
                        }
                        return issuesAcc
                      },
                      []
                    ),
                })
              }
              return squadsAcc
            }, []),
        })
      }

      return clustersAcc
    }, [])
}

//console.dir(convertDataWithReduce(cube))
console.dir(convertDataWithReduce(cube), { depth: null })

module.exports = convertDataWithReduce
