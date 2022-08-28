function runRobotReturnTally (state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
  function compareRobots(robot1, memory1, robot2, memory2) {
    let robot1Total = 0;
    let robot2Total = 0;
    for (let i=1; i<1001; i++) {
      let newVillage = VillageState.random();
      robot1Total = robot1Total + runRobotReturnTally(newVillage, robot1, memory1);
      robot2Total = robot2Total + runRobotReturnTally(newVillage, robot2, memory2);
    }
    averageRobot1 = robot1Total / 1000;
    averageRobot2 = robot2Total / 1000;
    console.log(`Robot 1's average is ${averageRobot1}`);
    console.log(`Robot 2's average is ${averageRobot2}`);
  }
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);