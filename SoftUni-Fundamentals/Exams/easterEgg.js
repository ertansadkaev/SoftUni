function findEasterEggs(EggsInfo) {
    let patternEggs = /(@+|#+)(?<egg>[a-z]{3,})(@+|#+)([^A-Za-z0-9]*)\/+(?<amount>[0-9]+)\/+/g;
    for (let line of EggsInfo){
    
        let matchEggs = line.matchAll(patternEggs);
    
    for (const egg of matchEggs) {
        console.log(`You found ${egg.groups.amount} ${egg.groups.egg} eggs!`);
      }
    }
  }
  findEasterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);