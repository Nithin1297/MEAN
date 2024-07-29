# 23rd July

# Angular

![ANGULARday1ajenda](./images/ANGULARday1ajenda.png)

- current version 18
- Angular Version 1 -> _ANGULARJS_
- WEB APP v/s WEBSITE
- SPA V/S MPA (Single Page App v/s Multi page app)

> Adv of SPA

1. smooth performance
2. no refresh
3. data saving - better caching

- lazy loading -> load the code which is to load initially

> Reusability  

> gdcv

- ngfor , ngif are structural directive 
- @if or ngif (Conditional render)

> Types of bindings

1. Property binding
```js
@for(user of users; track user.id){
    <app-user [name]="user.name"> </app-user>
}
```