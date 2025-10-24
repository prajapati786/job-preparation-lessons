import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Signal } from './signal/signal';
import { TodoList } from './todo-list/todo-list';
import { Home } from './home/home';
import { User } from './user/user';

export const routes: Routes = [
    { component: Counter, path: "counter" },
    { component: Signal, path: "signal" },
    { component: TodoList, path: "todo" },
    { component: Home, path: "" },
    { component: User, path: "user/:{id}/:{name}" },
];
