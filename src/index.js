const cube = require('./data')
const result = require('./result')

const createChild = current => (
  {
    data: {
      key: current.childKey,
      title: current.childSummary,
      type: current.childType,
      qty: 1,
    },
  }
)

const createIssue = current => (
  {
    data: {
      key: current.parentKey,
      title: current.parentSummary,
      type: current.parentType,
      qty: current.childQty,
    },
    children: [
      createChild(current)
    ],
  }
)

const createSquad = current => (
  {
    title: current.squad,
    isNew: current.isNew,
    isRun: current.isRun,
    bound: "15% (mocked)",
    productOwner: current.productOwner,
    tagged: false,
    issues: [
      createIssue(current)
    ],
  }
)

const createCluster = current => ({
  title: current.cluster,
  squads: [
    createSquad(current)
  ],
})

const res = cube
  .map((row) => ({
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
  }))
  .reduce((acc, current) => {
    const cluster = acc.find((cluster) => cluster.title === current.cluster);
    if (!cluster) {
      acc.push(createCluster(current));
    }

    const squad = cluster?.squads.find(
      (squad) => squad.title === current.squad
    );
    if (!squad) {
      cluster?.squads.push(createSquad(current));
    }

    const issue = squad?.issues.find(
      (issue) => issue.data.key === current.parentKey
    );
    if (!issue) {
      squad?.issues.push(createIssue(current));
    }

    issue?.children.push(createChild(current));

    return acc;
  }, []);

module.exports = res

console.dir(res, { depth: null })
