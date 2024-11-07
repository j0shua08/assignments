/**
 * Relationship status
 *
 * Let's pretend that you are building a new app with social media functionality.
 * Users can have relationships with other users.
 *
 * The two guidelines for describing relationships are:
 * 1. Any user can follow any other user.
 * 2. If two users follow each other, they are considered friends.
 *
 * This function describes the relationship that two users have with each other.
 *
 * Please see the sample data for examples of `socialGraph`.
 *
 * @param {string} fromMember The subject member
 * @param {string} toMember The object member
 * @param {object} socialGraph The relationship data
 * @returns {string} "follower" if fromMember follows toMember;
 * "followed by" if fromMember is followed by toMember;
 * "friends" if fromMember and toMember follow each other;
 * "no relationship" otherwise.
 */
function relationshipStatus(fromMember, toMember, socialGraph) {
    function relationshipStatus(fromMember, toMember, socialGraph) {
        const fromFollowsTo = socialGraph[fromMember] && socialGraph[fromMember].following.includes(toMember);
        const toFollowsFrom = socialGraph[toMember] && socialGraph[toMember].following.includes(fromMember);
        
        if (fromFollowsTo && toFollowsFrom) {
            return "friends";
        }
        if (fromFollowsTo) {
            return "follower";
        }
        if (toFollowsFrom) {
            return "followed by";
        }
        return "no relationship";
    }
}

/**
* Tic tac toe
*
* Tic Tac Toe is a common paper-and-pencil game.
* Players must attempt to draw a line of their symbol across a grid.
* The player that does this first is considered the winner.
*
* This function evaluates a Tic Tac Toe game board and returns the winner.
*
* Please see the sample data for examples of `board`.
*
* @param {Array} board The representation of the Tic Tac Toe board as a square array of arrays. The size of the array will range between 3x3 to 6x6.
* The board will never have more than 1 winner.
* There will only ever be 2 unique symbols at the same time.
* @returns {string} the symbol of the winner, or "NO WINNER" if there is no winner.
*/
function ticTacToe(board) {
    function ticTacToe(board) {
        const n = board.length;
    
        for (let i = 0; i < n; i++) {
            if (new Set(board[i]).size === 1 && board[i][0] !== "") {
                return board[i][0];
            }
        }
    
        for (let i = 0; i < n; i++) {
            const columnSet = new Set();
            for (let j = 0; j < n; j++) {
                columnSet.add(board[j][i]);
            }
            if (columnSet.size === 1 && board[0][i] !== "") {
                return board[0][i];
            }
        }
    
        const diagonal1Set = new Set();
        const diagonal2Set = new Set();
        for (let i = 0; i < n; i++) {
            diagonal1Set.add(board[i][i]);
            diagonal2Set.add(board[i][n - 1 - i]);
        }
        if (diagonal1Set.size === 1 && board[0][0] !== "") {
            return board[0][0];
        }
        if (diagonal2Set.size === 1 && board[0][n - 1] !== "") {
            return board[0][n - 1];
        }
    
        return "NO WINNER";
    }
    
}
/**
 * ETA
 *
 * A shuttle van service is tasked to travel one way along a predefined circular route.
 * The route is divided into several legs between stops.
 * The route is fully connected to itself.
 *
 * This function returns how long it will take the shuttle to arrive at a stop after leaving anothe rstop.
 *
 * Please see the sample data for examples of `routeMap`.
 *
 * @param {string} firstStop the stop that the shuttle will leave
 * @param {string} secondStop the stop that the shuttle will arrive at
 * @param {object} routeMap the data describing the routes
 * @returns {Number} the time that it will take the shuttle to travel from firstStop to secondStop
 */
function eta(firstStop, secondStop, routeMap) {
    function eta(firstStop, secondStop, routeMap) {
        let totalTime = 0;
        let currentStop = firstStop;
    
        while (currentStop !== secondStop) {
            for (let route in routeMap) {
                const stops = route.split(",");
                if (stops[0] === currentStop) {
                    totalTime += routeMap[route].travel_time_mins;
                    currentStop = stops[1];
                    break;
                }
            }
        }
    
        return totalTime;
    }
}