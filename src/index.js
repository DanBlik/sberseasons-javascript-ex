// import "./styles.css";
// import cube from "./data";
// import result from "./result";

// import testCheckRes from "./testCheckRes";
const cube = require('./data')
const result = require('./result')
const testCheckRes = require('./testCheckRes')

//console.log(cube);
//console.log(result);

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
      acc.push({
        title: current.cluster,
        squads: [
          {
            title: current.squad,
            isNew: current.isNew,
            isRun: current.isRun,
            bound: "15% (mocked)",
            productOwner: current.productOwner,
            tagged: false,
            issues: [
              {
                data: {
                  key: current.parentKey,
                  title: current.parentSummary,
                  type: current.parentType,
                  qty: current.childQty,
                },
                children: [
                  {
                    data: {
                      key: current.childKey,
                      title: current.childSummary,
                      type: current.childType,
                      qty: 1,
                    },
                  },
                ],
              },
            ],
          },
        ],
      });
    }

    const squad = cluster?.squads.find(
      (squad) => squad.title === current.squad
    );
    if (!squad) {
      cluster?.squads.push({
        title: current.squad,
        isNew: current.isNew,
        isRun: current.isRun,
        bound: "15% (mocked)",
        productOwner: current.productOwner,
        tagged: false,
        issues: [
          {
            data: {
              key: current.parentKey,
              title: current.parentSummary,
              type: current.parentType,
              qty: current.childQty,
            },
            children: [
              {
                data: {
                  key: current.childKey,
                  title: current.childSummary,
                  type: current.childType,
                  qty: 1,
                },
              },
            ],
          },
        ],
      });
    }

    const issue = squad?.issues.find(
      (issue) => issue.data.key === current.parentKey
    );
    if (!issue) {
      squad?.issues.push({
        data: {
          key: current.parentKey,
          title: current.parentSummary,
          type: current.parentType,
          qty: current.childQty,
        },
        children: [
          {
            data: {
              key: current.childKey,
              title: current.childSummary,
              type: current.childType,
              qty: 1,
            },
          },
        ],
      });
    }

    issue?.children.push({
      data: {
        key: current.childKey,
        title: current.childSummary,
        type: current.childType,
        qty: 1,
      },
    });

    return acc;
  }, []);

//console.dir(res,{depth:null})

testCheckRes(res, result)