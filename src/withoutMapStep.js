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

    const cluster = acc.find((cluster) => cluster.title === clusterF)
    if (!cluster) {
      acc.push({
        title: clusterF,
        squads: [
          {
            title: squadF,
            isNew: isNewF,
            isRun: isRunF,
            bound: '15% (mocked)',
            productOwner: productOwnerF,
            tagged: false,
            issues: [
              {
                data: {
                  key: parentKeyF,
                  title: parentSummaryF,
                  type: parentTypeF,
                  qty: childQtyF,
                },
                children: [
                  {
                    data: {
                      key: childKeyF,
                      title: childSummaryF,
                      type: childTypeF,
                      qty: 1,
                    },
                  },
                ],
              },
            ],
          },
        ],
      })
    }

    const squad = cluster?.squads.find((squad) => squad.title === squadF)
    if (!squad) {
      cluster?.squads.push({
        title: squadF,
        isNew: isNewF,
        isRun: isRunF,
        bound: '15% (mocked)',
        productOwner: productOwnerF,
        tagged: false,
        issues: [
          {
            data: {
              key: parentKeyF,
              title: parentSummaryF,
              type: parentTypeF,
              qty: childQtyF,
            },
            children: [
              {
                data: {
                  key: childKeyF,
                  title: childSummaryF,
                  type: childTypeF,
                  qty: 1,
                },
              },
            ],
          },
        ],
      })
    }

    const issue = squad?.issues.find((issue) => issue.data.key === parentKeyF)
    if (!issue) {
      squad?.issues.push({
        data: {
          key: parentKeyF,
          title: parentSummaryF,
          type: parentTypeF,
          qty: childQtyF,
        },
        children: [
          {
            data: {
              key: childKeyF,
              title: childSummaryF,
              type: childTypeF,
              qty: 1,
            },
          },
        ],
      })
    }

    issue?.children.push({
      data: {
        key: childKeyF,
        title: childSummaryF,
        type: childTypeF,
        qty: 1,
      },
    })

    return acc
  }, [])
}

module.exports = transformWithoutMapStep