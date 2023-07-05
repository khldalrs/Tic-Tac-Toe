

const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', ''];

    const render = () => {
        let boardHTML = '';
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id=square-${index}>${square}</div>`;
        })
        document.querySelector('#gameboard').innerHTML = boardHTML;
    };
    return { render };
})();


const Game = (() => {
    let players = ["X", "O"];
    let turn, gameover;

    const start = () => {
        turn = 0;
        gameover = false;
        Gameboard.render();
    };

    return { start };
})();


const start = document.getElementById('start');
start.addEventListener('click', () => {
    Game.start();
});