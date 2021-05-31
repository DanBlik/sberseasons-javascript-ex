const transformWithoutMapStep = (cube) => {
    return cube
    .reduce((acc, current) => {
      const clusterF = current[0].qText,
        squadF = current[1].qText,
        productOwnerF = current[2].qText,
        parentKeyF = current[3].qText,
        parentSummaryF = current[4].qText,
        parentTypeF = current[5].qText,
        childKeyF = current[6].qText,
        childSummaryF = current[7].qText,
        childTypeF = current[8].qText,
        childQtyF = current[9].qNum,
        isRunF = Boolean(current[10].qNum),
        isNewF = Boolean(current[11].qNum)

        const createChild = () => ({
            data: {
              key: childKeyF,
              title: childSummaryF,
              type: childTypeF,
              qty: 1,
            },
          })

          const createIssue = () => ({
            data: {
              key: parentKeyF,
              title: parentSummaryF,
              type: parentTypeF,
              qty: childQtyF,
            },
            children: [createChild()],
          })

          const createSquad = () => ({
            title: squadF,
            isNew: isNewF,
            isRun: isRunF,
            bound: '15% (mocked)',
            productOwner: productOwnerF,
            tagged: false,
            issues: [createIssue()],
          })

          const createCluster = () => ({
            title: clusterF,
            squads: [createSquad()],
          })

      const cluster = acc.find((cluster) => cluster.title === clusterF)
      if (!cluster) {
        acc.push(createCluster())
      }

      const squad = cluster?.squads.find((squad) => squad.title === squadF)
      if (!squad) {
        cluster?.squads.push(createSquad())
      }

      const issue = squad?.issues.find((issue) => issue.data.key === parentKeyF)
      if (!issue) {
        squad?.issues.push(createIssue())
      }

      issue?.children.push(createChild())

      return acc
    }, [])
  }

  module.exports = transformWithoutMapStep