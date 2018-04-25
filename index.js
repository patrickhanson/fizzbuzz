fizzbuzzOutput = document.getElementById("fizzbuzz");
for(var i = 1; i <= 1000; i++) {
    let result = String(i);
    if(result % 2 == 0 && result % 3 == 0) {
        fizzbuzzOutput.innerHTML += result.bold().fontcolor("red") + ", ";
    }
    else if(result % 2 == 0) {
        fizzbuzzOutput.innerHTML += result.bold() + ", ";
    }
    else if(result % 3 == 0) {
        fizzbuzzOutput.innerHTML += result.fontcolor("red") + ", ";
    }
    else {
        fizzbuzzOutput.innerHTML += result + ", ";
    }
}