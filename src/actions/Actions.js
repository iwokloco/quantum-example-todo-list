import { qs } from 'quantum-store';
import { FILTER_ACTIVE, FILTER_COMPLETED } from '../Constants';

export const Actions = {
  changeFilter(filter) {
    const todo = qs.get('todo');
    qs.set('todo', { ...todo, filter: filter });
  },
  addTodo(value) {
    const todo = qs.get('todo');
    const { list, lastId } = todo;
    const newId = lastId + 1;
    list.push({ id: newId, text: value, type: FILTER_ACTIVE });
    qs.set('todo', { ...todo, lastId: newId, list: list });
  },
  toggleTodo(id) {
    const todo = qs.get('todo');
    const { list } = todo;
    const item = list.find((item) => item.id === id);
    item.type = item.type === FILTER_ACTIVE ? FILTER_COMPLETED : FILTER_ACTIVE;
    qs.set('todo', { ...todo, list: list });
  }
};