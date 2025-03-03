class Paper{

    init(paper) {

        paper.addEventListener ('mousedown', (e) => {
            alert('mouse is selected the paper element');
        })

    }
}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach( paper => {
    const p =  new paper();
    p.init(paper);
})