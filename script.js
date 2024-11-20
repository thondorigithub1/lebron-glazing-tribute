const moreInfoBtn = document.getElementById('more-info-btn');
const moreInfoDiv = document.createElement('div');
moreInfoDiv.classList.add('more-info');

moreInfoBtn.addEventListener('click', () => {
    if (moreInfoDiv.classList.contains('show')) {
        moreInfoDiv.classList.remove('show');
    } else {
        moreInfoDiv.classList.add('show');
    }
});

moreInfoDiv.innerHTML = `
    <h3>Achievements</h3>
    <ul>
        <li>4x NBA champion</li>
        <li>4x NBA Most Valuable Player</li>
        <li>2x Olympic gold medalist</li>
    </ul>
`;

document.querySelector('main').appendChild(moreInfoDiv);