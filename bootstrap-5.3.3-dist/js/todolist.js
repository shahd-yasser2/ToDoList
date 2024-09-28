let addBtn = document.getElementById('addBtn');
let newTask = document.getElementById('newTask');
let AllTask = document.querySelector('.AllTask');
let NoTask = document.getElementById('NoTask');
let count = document.getElementById('count');




function showDiv(){
    if(AllTask.childElementCount == 0){
        NoTask.classList.remove('none');

    }else{
        NoTask.classList.add('none');

    }

}





let getData = () => {
    let data = newTask.value;
    let newData = data.trim();

    if (newData === '') {
        alert('Please fill input task');
    } else if (newData.length < 3) {
        alert('Task should be greater than 3 characters');
    } else if (newData.length > 100) {
        alert('Task should be less than 100 characters');
    } else {
        AllTask.innerHTML += `
        <div class="alert alert-warning d-flex justify-content-between align-items-center">
            ${data}
            <button class="btn  w-25  rounded-circle border-0 deleteBtn">
                <i class="fas fa-trash text-danger"></i> 
            </button>
        </div>`;
        count.innerText = AllTask.childElementCount;

        showDiv();

        newTask.value = '';


    }
};

addBtn.addEventListener('click', getData);

// Event listener for deleting tasks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteBtn') || e.target.closest('.deleteBtn')) {
        e.target.closest('.alert').remove(); // Remove the task div
        if (AllTask.children.length === 0) {
            NoTask.classList.remove('none');
            Count.innerText =AllTask.childElementCount;
            showDiv();
        }
    }
});
