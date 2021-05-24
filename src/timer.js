const timer = function(name = 'unnamed action') {
    const start = new Date();
    return {
        stop: () => {
            const end  = new Date();
            const time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
  }

module.exports = timer