"use strict";

var cube = require('./data');

var result = require('./result');

var timer = require('./benchmark');

var t1 = timer('Decision with map pipleline and outter funcs');

var createChild = function createChild(current) {
  return {
    data: {
      key: current.childKey,
      title: current.childSummary,
      type: current.childType,
      qty: 1
    }
  };
};

var createIssue = function createIssue(current) {
  return {
    data: {
      key: current.parentKey,
      title: current.parentSummary,
      type: current.parentType,
      qty: current.childQty
    },
    children: [createChild(current)]
  };
};

var createSquad = function createSquad(current) {
  return {
    title: current.squad,
    isNew: current.isNew,
    isRun: current.isRun,
    bound: '15% (mocked)',
    productOwner: current.productOwner,
    tagged: false,
    issues: [createIssue(current)]
  };
};

var createCluster = function createCluster(current) {
  return {
    title: current.cluster,
    squads: [createSquad(current)]
  };
};

for (var i = 0; i < 10000; i++) {
  var res1 = cube.map(function (row) {
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
      isNew: Boolean(row[11].qNum)
    };
  }).reduce(function (acc, current) {
    var cluster = acc.find(function (cluster) {
      return cluster.title === current.cluster;
    });

    if (!cluster) {
      acc.push(createCluster(current));
    }

    var squad = cluster === null || cluster === void 0 ? void 0 : cluster.squads.find(function (squad) {
      return squad.title === current.squad;
    });

    if (!squad) {
      cluster === null || cluster === void 0 ? void 0 : cluster.squads.push(createSquad(current));
    }

    var issue = squad === null || squad === void 0 ? void 0 : squad.issues.find(function (issue) {
      return issue.data.key === current.parentKey;
    });

    if (!issue) {
      squad === null || squad === void 0 ? void 0 : squad.issues.push(createIssue(current));
    }

    issue === null || issue === void 0 ? void 0 : issue.children.push(createChild(current));
    return acc;
  }, []);
}

t1.stop(); //module.exports = res1
//console.dir(res, { depth: null })

var t2 = timer('Const in reduce decision');

for (var _i = 0; _i < 10000; _i++) {
  var res2 = cube.reduce(function (acc, current) {
    var clusterF = current[0].qText,
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
        isNewF = Boolean(current[11].qNum);
    var cluster = acc.find(function (cluster) {
      return cluster.title === clusterF;
    });

    if (!cluster) {
      acc.push({
        title: clusterF,
        squads: [{
          title: squadF,
          isNew: isNewF,
          isRun: isRunF,
          bound: '15% (mocked)',
          productOwner: productOwnerF,
          tagged: false,
          issues: [{
            data: {
              key: parentKeyF,
              title: parentSummaryF,
              type: parentTypeF,
              qty: childQtyF
            },
            children: [{
              data: {
                key: childKeyF,
                title: childSummaryF,
                type: childTypeF,
                qty: 1
              }
            }]
          }]
        }]
      });
    }

    var squad = cluster === null || cluster === void 0 ? void 0 : cluster.squads.find(function (squad) {
      return squad.title === squadF;
    });

    if (!squad) {
      cluster === null || cluster === void 0 ? void 0 : cluster.squads.push({
        title: squadF,
        isNew: isNewF,
        isRun: isRunF,
        bound: '15% (mocked)',
        productOwner: productOwnerF,
        tagged: false,
        issues: [{
          data: {
            key: parentKeyF,
            title: parentSummaryF,
            type: parentTypeF,
            qty: childQtyF
          },
          children: [{
            data: {
              key: childKeyF,
              title: childSummaryF,
              type: childTypeF,
              qty: 1
            }
          }]
        }]
      });
    }

    var issue = squad === null || squad === void 0 ? void 0 : squad.issues.find(function (issue) {
      return issue.data.key === parentKeyF;
    });

    if (!issue) {
      squad === null || squad === void 0 ? void 0 : squad.issues.push({
        data: {
          key: parentKeyF,
          title: parentSummaryF,
          type: parentTypeF,
          qty: childQtyF
        },
        children: [{
          data: {
            key: childKeyF,
            title: childSummaryF,
            type: childTypeF,
            qty: 1
          }
        }]
      });
    }

    issue === null || issue === void 0 ? void 0 : issue.children.push({
      data: {
        key: childKeyF,
        title: childSummaryF,
        type: childTypeF,
        qty: 1
      }
    });
    return acc;
  }, []);
}

t2.stop(); //module.exports = res2