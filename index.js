function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    const completedNodes = []
    const queue = [rootNode]

    while (queue.length > 0) {
        let adjacentNodes = findAdjacent(queue[0].name, vertices, edges)
        markDistanceAndPredecessor(queue[0], adjacentNodes).forEach(node => queue.push(node))
        completedNodes.push(queue[0])
        queue.shift()
    }

    return completedNodes
}


function findAdjacent(rootNode, vertices, edges) {
    // find rootNode in edges
    let adjacentNodes = []
    edges.forEach(edge => {
        if (edge[1] === rootNode) {
            // adjacentNodes.push(edge[0])
            let adjacent = vertices.find(vertex => {
                return vertex.name === edge[0]
            })
            if (adjacent.distance === null) {
                adjacentNodes.push(adjacent)
            }
        }
        if (edge[0] === rootNode) {
            // adjacentNodes.push(edge[0])
            let adjacent = vertices.find(vertex => {
                return vertex.name === edge[1]
            })
            if (adjacent.distance === null) {
                adjacentNodes.push(adjacent)
            }
        }
    });
    return adjacentNodes
}


// function findAdjacent(rootNode, vertices, edges) {
//     let adjacentNodes = [];
//     edges.forEach(edge => {
//         if(edge[0] === rootNode) {
//             let adjacentNode = vertices.find(vertex => vertex.name === edge[1] && vertex.distance === null);
//             if(adjacentNode){
//                 adjacentNodes.push(adjacentNode);
//             }
//         }
//         if(edge[1] === rootNode) {
//             let adjacentNode = vertices.find(vertex => vertex.name === edge[0] && vertex.distance === null);
//             if(adjacentNode){
//                 adjacentNodes.push(adjacentNode);
//             }
//         }
//     })
//     return adjacentNodes
// }

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
    adjacentNodes.forEach(node => {
        node.distance = rootNode.distance + 1
        node.predecessor = rootNode
        return node
    })
    return adjacentNodes
}

