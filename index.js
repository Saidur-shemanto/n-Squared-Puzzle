let blocks = document.getElementsByClassName('three')
for (let i of blocks) {
    i.addEventListener('click', checkNeighbour)
}
let solCount = 1
let randlist = []


let solveClick = document.getElementById('solvePuzzle')
let randClick = document.getElementById('randomize')
randClick.addEventListener('click', randomFunc)
solveClick.addEventListener('click', posFunction)
function randomFunc() {
    let lastpos;
    for (let i = 0; i < blocks.length - 1; i++) {
        let count = Math.ceil(Math.random() * 8)
        while (randlist.includes(count)) {
            count = Math.ceil(Math.random() * 8)
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
        lastpos = i
        solCount++


    }
    blocks[lastpos + 1].innerText = 'blank'
    solCount = 1
}
let blockvar = 0
let blockid = 0
function checkNeighbour() {

    let clickBlock = document.getElementById(this.id)
    if (blockvar === 0 && blockid === 0) {
        blockid = clickBlock
        blockvar = clickBlock.innerText



    } else {
        let temp = clickBlock.innerText
        clickBlock.innerText = blockvar
        blockid.innerText = temp
        blockid = 0
        blockvar = 0

    }


    let blockValue = clickBlock.innerText
    console.log('nigga' + blockValue)


    clickBlock.style.backgroundColor = "green";

    for (let i of blocks) {
        if (i.id === this.id) {
            continue
        } else {
            i.style.backgroundColor = "aqua";
        }
    }


}