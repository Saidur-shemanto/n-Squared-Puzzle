let blocks = document.getElementsByClassName('gameBlocks')[0].getElementsByTagName('div')
console.log(typeof blocks)
for (let i of blocks) {
    i.addEventListener('click', checkNeighbour)
}

const equalsCheck = (a, b) =>
    a.length === b.length &&
    a.every((v, i) => v === b[i]);

function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1));
        const temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
    return array
}
let solCount = 1
let randlist = []
let checkResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'blank']
let getResult = []
let blockvar = 0
let blockid = 0

let solveClick = document.getElementById('solvePuzzle')
let randClick = document.getElementById('randomize')
let puzzleVisibile = document.getElementById("fourButton")
let restartButton = document.getElementById("restartButt")
randClick.addEventListener('click', randomFunc)
solveClick.addEventListener('click', posFunction)
puzzleVisibile.addEventListener('click', visibleBlock)
restartButton.addEventListener("click", restartDisplay)
function restartDisplay() {
    window.location = "/"
}
function visibleBlock() {
    let selectedSize = document.getElementsByName("blocksize")
    for (let i of selectedSize) {
        console.log(i.checked, i.labels[0])
        let tempElement = document.getElementsByClassName("four")
        if (i.checked && i.labels[0].innerText === '3x3') {



            for (let j of tempElement) {
                console.log(j.style.display)

                j.style.display = "none";


            }
            document.getElementsByClassName("gameBlocks")[0].setAttribute('style',
                'grid-template-columns: repeat(' + 3 + ', 1fr)');




        } else if (i.checked && i.labels[0].innerText === '4x4') {
            for (let i of tempElement) {
                i.style.display = "flex";




            }
            document.getElementsByClassName("gameBlocks")[0].setAttribute('style',
                'grid-template-columns: repeat(' + 4 + ', 1fr)');
        }
    }
    document.getElementsByClassName("gameBlocks")[0].style.visibility = 'visible';
}
function randomFunc() {

    let lastpos;
    let blockValue = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'blank'])
    console.log(blockValue)
    for (let i = 0; i < blocks.length; i++) {




        blocks[i].innerText = blockValue[i]

        if (blocks[i].innerText === "blank") {
            blocks[i].style.backgroundColor = "white";
        } else {
            blocks[i].style.backgroundColor = "aqua";

        }






    }





}
function posFunction() {
    let lastpos;
    for (let i = 0; i < blocks.length - 1; i++) {
        blocks[i].innerText = solCount
        blocks[i].style.backgroundColor = 'aqua';
        getResult.push(solCount)
        lastpos = i
        solCount++


    }
    blocks[lastpos + 1].innerText = 'blank'
    blocks[lastpos + 1].style.backgroundColor = "white";
    getResult.push("blank")
    solCount = 1
    console.log(typeof getResult, typeof checkResult)
    if (equalsCheck(checkResult, getResult)) {
        document.getElementById("hurray").style.visibility = "visible";
        document.getElementById("form").style.visibility = "hidden";
        console.log(document.getElementById("form"))
    } else {
        console.log('nigga')
    }
}
function checkNeighbour() {

    let clickBlock = document.getElementById(this.id)

    if (clickBlock.innerText === "blank" && clickBlock.style.backgroundColor === "red" && blockvar !== 0 && blockid !== 0) {

        let temp = clickBlock.innerText
        clickBlock.innerText = blockvar
        blockid.innerText = temp
        blockid.style.removeProperty('box-shadow');
        blockid = 0
        blockvar = 0
        for (let i of blocks) {
            if (i.innerText === "blank") {
                i.style.backgroundColor = "white";
            } else {
                i.style.backgroundColor = "aqua";

            }


        }







    } else if (blockvar === 0 && blockid === 0) {
        if (document.getElementById((parseInt(clickBlock.id) + 1).toString()) !== null && document.getElementById((parseInt(clickBlock.id) + 1).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) + 1).toString()).style.backgroundColor)
            clickBlock.style.boxShadow = "5px 5px 10px black";
            document.getElementById((parseInt(clickBlock.id) + 1).toString()).style.backgroundColor = "red";
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }
        else if (document.getElementById((parseInt(clickBlock.id) - 1).toString()) !== null && document.getElementById((parseInt(clickBlock.id) - 1).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) - 1).toString()).style.backgroundColor)
            clickBlock.style.boxShadow = "5px 5px 10px black";
            document.getElementById((parseInt(clickBlock.id) - 1).toString()).style.backgroundColor = "red";
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }
        else if (document.getElementById((parseInt(clickBlock.id) + 10).toString()) !== null && document.getElementById((parseInt(clickBlock.id) + 10).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) + 10).toString()).style.backgroundColor)
            clickBlock.style.boxShadow = "5px 5px 10px black";
            document.getElementById((parseInt(clickBlock.id) + 10).toString()).style.backgroundColor = "red";
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }
        else if (document.getElementById((parseInt(clickBlock.id) - 10).toString()) !== null && document.getElementById((parseInt(clickBlock.id) - 10).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) - 10).toString()).style.backgroundColor)
            clickBlock.style.boxShadow = "5px 5px 10px black";
            document.getElementById((parseInt(clickBlock.id) - 10).toString()).style.backgroundColor = "red"
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }

    }
    else if (blockid !== 0 && blockvar !== 0 && clickBlock.style.backgroundColor == "red") {
        let temp = clickBlock.innerText
        clickBlock.innerText = blockvar
        blockid.innerText = temp
        blockid.style.removeProperty("box-shadow");
        blockid = 0
        blockvar = 0
        for (let i of blocks) {
            if (i.innerText === "blank") {
                i.style.backgroundColor = "white";
            } else {
                i.style.backgroundColor = "aqua";

            }


        }

    }



}