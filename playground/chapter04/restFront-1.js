async function getUser() {
  const res = await axios.get('./users');
  const users = res.data;
  const list = document.getElementById('list');
  list.innerHTML = '';
  Object.keys(users).map((key) => {
    const userDiv = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = users[key];
    const edit = document.createElement('button');
    edit.textContent = '수정';
    edit.addEventListener('click', async () => {
      const name = prompt('바꿀 이름을 입력하세요.');
      if (!name) {
        return alert('이름을 반드시 입력하셔야 합니다.');
      }
      try {
        await axios.put('/user/' + key, { name });
      } catch {}
    });
  });
}
