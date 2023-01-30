//Function for Jumping on the clouds
function jumpingOnClouds(c) {
    let steps = 0;
    for(let i=0; i<=c.length-2;i++){
        if(c[i+2] ===0 ){ 
        steps++;
        i++;
            
        }else{
            // if after one element of current element is not zero then it jumps it exactly to next element ;
        steps++
        }
    }
    return steps;
           
}
//Function for Utopian Tree
function utopianTree(n) {
    let HeightOfTheTree = 1;
    for(let i=1; i<= n; i++){
        if(i%2 == 0){
            HeightOfTheTree++;
        }
        else{
            HeightOfTheTree *= 2;
        }
    }
    return HeightOfTheTree;
