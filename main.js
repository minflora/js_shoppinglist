const items = document.querySelector('.items');
const form = document.querySelector('.new_form');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    onAdd();
});

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아온다
    const text = input.value;
    if(text ===''){
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듦(텍스트 + 삭제버튼)
    const item = creatItem(text);
    //3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    //4. 인풋을 초기화한다.
    input.value = '';
    input.focus();  //다시 입력창으로 돌아오는것
}

let id= 0; //UUID
function creatItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML =`
        <div class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete" >
                <i class="fas fa-trash" data-id=${id}></i>
            </button>
        </div>
        <div class ="item_divider>"</div>`;
    id++;

    // const item = document.createElement('div');
    // item.setAttribute('class','item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item_name');
    // name.innerText = text;

    // const deletBtn = document.createElement('button');
    // deletBtn.setAttribute('class', 'item_delete');
    // deletBtn.innerHTML = '<i class="fas fa-trash"></i>';
    // deletBtn.addEventListener('click', ()=> {
    //     items.removeChild(itemRow);
    // })

    // item.appendChild(name);
    // item.appendChild(deletBtn);

    // itemRow.appendChild(item);  
    return itemRow;
}
// 더 간단히 만들 수 있는 submit을이용

// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// input.addEventListener('keydown', (event)=>{
//     if(event.isComposing){
//         return;
//     }
//     if(event.key === 'Enter') {
//         onAdd();
//     }
// });

items.addEventListener('click', event =>{
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})