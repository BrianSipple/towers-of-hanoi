var actions = require("./actions");
var config = require("./config");


/* Moves the bottom piece from its current position to its goal position */
var moveToDest = actions.move.bind(actions);

var towerSolver = (function towerSolver(exports) {
  // fill in solution here
    
    function makeMovements(n, startTowerPos, destTowerPos, intermediateTowerPos) {
        
        if (n === 1) {        
            moveToDest(startTowerPos, destTowerPos);        
        } else {
            makeMovements(n-1, startTowerPos, intermediateTowerPos, destTowerPos);
            moveToDest(startTowerPos, destTowerPos);
            makeMovements(n-1, intermediateTowerPos, destTowerPos, startTowerPos);
        }
    }
    
    function solve (n) {
        
        var 
            startTowerPos = 0,
            intermediateTowerPos = 1,
            destTowerPos = 2;
        
        makeMovements(n, startTowerPos, destTowerPos, intermediateTowerPos);
    }


    return {
        solve: solve 
    };


}( (typeof exports === 'undefined') ? window : exports));

towerSolver.solve(config.pieces);
actions.finish();