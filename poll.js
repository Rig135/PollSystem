const newPoll = document.querySelector('#createpoll');

newPoll.addEventListener('click', function (e) {
    e.preventDefault();

    const div = document.createElement('div');
    div.classList.add('poll');
    document.body.append(div);


    const H1 = document.createElement('h3');
    H1.innerText = "Enter the Poll Question";

    const pollques = document.createElement('textarea');
    pollques.rows = '4';
    pollques.cols = '50';
    pollques.placeholder = 'Ask your poll Question here!...';


    const optionDiv = document.createElement('div');
    optionDiv.classList.add('polloptions');

    let optioncount = 0;
    let maxcount = 3;

    const addOptions = document.createElement('button');
    addOptions.innerText = 'Add Option';

    addOptions.addEventListener('click', function () {
        if (optioncount < maxcount) {
            const option = document.createElement('input');
            option.type = 'text';
            option.placeholder = `Option ${optioncount + 1}`;
            option.classList.add('removeDecor2');
            optionDiv.append(option);
            optioncount++;
        }
    });

    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.addEventListener('click', function () {
        const inputs = optionDiv.querySelectorAll('input');
        const options = [];
        for (let i = 0; i < inputs.length; i++) {
            options.push(inputs[i].value);

        }


        div.innerHTML = '';
        const pollResults = document.createElement('div');
        pollResults.style.display = 'flex';
        pollResults.style.flexDirection = 'column';

        const pollTitle = document.createElement('h2');
        pollTitle.innerText = `Poll: ${pollques.value}`;
        pollResults.append(pollTitle);

        for (let i = 0; i < options.length; i++) {
            const optionButton = document.createElement('button');
            optionButton.innerText = options[i];
            optionButton.addEventListener('click', function () {
                alert('You voted for: ' + options[i]);
            });
            pollResults.append(optionButton);
        }

        div.append(pollResults);
    });

    pollques.addEventListener('keydown', function (e) {
        if (e.key == 'Enter') {
            pollques.classList.add('removeDecor');
        }
    })




    div.append(H1);
    div.append(pollques);
    div.append(optionDiv);
    div.append(addOptions);
    div.append(submit);
})