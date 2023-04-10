const addOneItem = (state, todoItem) => {
  // 오브젝트 값을 변수화해서 아래에 값을 넘김
  const obj = {completed: false, item: todoItem};
  // 저장하는 로직
  // localStorage.setItem();
  localStorage.setItem(todoItem, JSON.stringify(obj));
  // push() js api : 배열의 끝에 배열 하나 추가 
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  // payload에 todoItem, index 가 담겨있기에 경로를 구체적 지정한다.
  localStorage.removeItem(payload.todoItem.item);
  // slice 메서드 사용시에는 index위치를 바꾸어서 변환해주지 않기에 splice를 사용
  state.todoItems.splice(payload.index , 1);
};

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  // 로컬 스토리지에 데이터를 갱신하는 부분
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

const clearAllItems = (state) => {
  // 모든 로컬스토리지 데이터를 지우는 API
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem , removeOneItem , toggleOneItem , clearAllItems }