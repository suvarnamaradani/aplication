document.getElementById('addMemberBtn').addEventListener('click', function() {
    const name = document.getElementById('memberName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    
    if (name && email && phone && dob && gender) {
        const li = document.createElement('li');
        li.textContent = `${name} (${gender}), ${email}, ${phone}, ${dob}`;
        document.getElementById('familyList').appendChild(li);
        
        document.getElementById('familyForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('checklistForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const checkedItems = [];
    const items = document.getElementsByName('item');

    items.forEach(item => {
        if (item.checked) {
            checkedItems.push(item.nextElementSibling.textContent);
        }
    });

    const resultDiv = document.getElementById('result');
    if (checkedItems.length > 0) {
        resultDiv.textContent = `You have completed: ${checkedItems.join(', ')}`;
    } else {
        resultDiv.textContent = 'No items completed yet.';
    }
});
