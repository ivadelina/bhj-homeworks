let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let hole1 = document.getElementById("hole1");
let deadCount = 0;
let lostCount = 0;
function getHole(index) { 
   return document.getElementById(`hole${index}`)
};
for (index = 1; index < 10; index++) {
    let hole = getHole(index);
    hole.onclick = function () {
        let classList = hole.classList.contains('hole_has-mole');
        if(classList === true) {
            deadCount ++
            dead.textContent = deadCount;
                if(deadCount === 10) {
                alert("Вы выиграли!");
                document.location.reload();
                };
        } else {
            lostCount ++
            lost.textContent = lostCount;
                if(lostCount === 5) {
                alert("Вы проиграли!");
                document.location.reload();
                };
              
        };
        
    };       
};


