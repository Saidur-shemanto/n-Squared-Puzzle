let blocks = document.getElementsByClassName('gameBlocks')[0].getElementsByTagName('div')
for (let i of blocks) {
    i.addEventListener('click', checkNeighbour)
}
const equalsCheck = (a, b) =>
    a.length === b.length &&
    a.every((v, i) => v === b[i]);
let solCount = 1
let randlist = []
let checkResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'blank']
let getResult = []
let solveClick = document.getElementById('solvePuzzle')
let randClick = document.getElementById('randomize')
let puzzleVisibile = document.getElementById("fourButton")
randClick.addEventListener('click', randomFunc)
solveClick.addEventListener('click', posFunction)
puzzleVisibile.addEventListener('click', visibleBlock)
function visibleBlock() {
    console.log(document.getElementsByClassName("gameBlocks")[0].style.visibility)
    document.getElementsByClassName("gameBlocks")[0].style.visibility = 'visible';
}
function randomFunc() {
    let lastpos;
    for (let i = 0; i < blocks.length - 1; i++) {
        let count = Math.ceil(Math.random() * 15)
        while (randlist.includes(count)) {
            count = Math.ceil(Math.random() * 15)
        }

        blocks[i].innerText = count
        randlist.push(count)
        lastpos = i


    }
    randlist = []
    blocks[lastpos + 1].innerText = 'blank'


}
function posFunction() {
    let lastpos;
    for (let i = 0; i < blocks.length - 1; i++) {
        blocks[i].innerText = solCount
        getResult.push(solCount)
        lastpos = i
        solCount++


    }
    blocks[lastpos + 1].innerText = 'blank'
    getResult.push("blank")
    solCount = 1
    console.log(typeof getResult, typeof checkResult)
    if (equalsCheck(checkResult, getResult)) {
        console.log('Hurray')
    } else {
        console.log('nigga')
    }
}
let blockvar = 0
let blockid = 0
function checkNeighbour() {

    let clickBlock = document.getElementById(this.id)
    if (clickBlock.innerText === "blank") {
        if (clickBlock.style.backgroundColor === "red" && blockvar !== 0 && blockid !== 0) {
            let temp = clickBlock.innerText
            clickBlock.innerText = blockvar
            blockid.innerText = temp
            blockid = 0
            blockvar = 0
            for (let i of blocks) {
                i.style.backgroundColor = "aqua";

            }

        } else {
            blockvar = clickBlock.innerText
            blockid = clickBlock
            if (document.getElementById((parseInt(clickBlock.id) + 1).toString()) !== null) {
                document.getElementById((parseInt(clickBlock.id) + 1).toString()).style.backgroundColor = "red";

            }
            if (document.getElementById((parseInt(clickBlock.id) - 1).toString()) !== null) {
                document.getElementById((parseInt(clickBlock.id) - 1).toString()).style.backgroundColor = "red";

            }
            if (document.getElementById((parseInt(clickBlock.id) + 10).toString()) !== null) {
                document.getElementById((parseInt(clickBlock.id) + 10).toString()).style.backgroundColor = "red";

            }
            if (document.getElementById((parseInt(clickBlock.id) - 10).toString()) !== null) {
                document.getElementById((parseInt(clickBlock.id) - 10).toString()).style.backgroundColor = "red";

            }
        }





    } else if (blockvar === 0 && blockid === 0) {
        if (document.getElementById((parseInt(clickBlock.id) + 1).toString()) !== null && document.getElementById((parseInt(clickBlock.id) + 1).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) + 1).toString()).style.backgroundColor)
            document.getElementById((parseInt(clickBlock.id) + 1).toString()).style.backgroundColor = "red";
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }
        else if (document.getElementById((parseInt(clickBlock.id) - 1).toString()) !== null && document.getElementById((parseInt(clickBlock.id) - 1).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) - 1).toString()).style.backgroundColor)
            document.getElementById((parseInt(clickBlock.id) - 1).toString()).style.backgroundColor = "red";
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }
        else if (document.getElementById((parseInt(clickBlock.id) + 10).toString()) !== null && document.getElementById((parseInt(clickBlock.id) + 10).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) + 10).toString()).style.backgroundColor)
            document.getElementById((parseInt(clickBlock.id) + 10).toString()).style.backgroundColor = "red";
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }
        else if (document.getElementById((parseInt(clickBlock.id) - 10).toString()) !== null && document.getElementById((parseInt(clickBlock.id) - 10).toString()).innerText === "blank") {
            console.log(document.getElementById((parseInt(clickBlock.id) - 10).toString()).style.backgroundColor)
            document.getElementById((parseInt(clickBlock.id) - 10).toString()).style.backgroundColor = "red"
            blockid = clickBlock
            blockvar = clickBlock.innerText


        }

    } else {
        let temp = clickBlock.innerText
        clickBlock.innerText = blockvar
        blockid.innerText = temp
        blockid = 0
        blockvar = 0
        for (let i of blocks) {
            i.style.backgroundColor = "aqua";

        }

    }



}