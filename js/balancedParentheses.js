const parentheses = {
    "[":{closing:"]"},
    "]":{starting:"["},
    "{":{closing:"}"},
    "}":{starting:"{"},
    "(":{closing:")"},
    ")":{starting:"("}
}

function balancedParentheses(str){
    currentParentheses = [];
    for(let x =0;x<str.length;x++){
        if(parentheses[str[x]] !== undefined){
            if(currentParentheses.length > 0 && 
                currentParentheses[currentParentheses.length-1] == parentheses[str[x]]["starting"]){
                currentParentheses.pop();
            }else{
                currentParentheses.push(str[x]);
            }
        }
    }
    if(currentParentheses.length > 0)return false;
    else return true;
}
module.exports = balancedParentheses;