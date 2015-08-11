var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);

var towerSolver = (function towerSolver(exports) {
  // fill in solution here
    
    function moveDisks(n, startTowerPos, destTowerPos, intermediateTowerPos) {
        
        if (n === 1) {        
            move(startTowerPos, destTowerPos);        
        } else {
            moveDisks(n-1, startTowerPos, intermediateTowerPos, destTowerPos);
            move(startTowerPos, destTowerPos);
            moveDisks(n-1, intermediateTowerPos, destTowerPos, startTowerPos);
        }
    }
    
    function solve (n) {
        
        var 
            startTowerPos = 0,
            intermediateTowerPos = 1,
            destTowerPos = 2;
        
        moveDisks(n, startTowerPos, destTowerPos, intermediateTowerPos);
    }


    return {
        solve: solve 
    };


}( (typeof exports === 'undefined') ? window : exports));

towerSolver.solve(config.pieces);
actions.finish();