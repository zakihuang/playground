<template>
  <h1>{{ title }} {{ x }} = {{ y }} = {{ formatted }} </h1>

  <button type="button" ref="button">
    Choose file {{ props.msg }}
  </button>

</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  msg: String
});

import { useMouse, useDateFormat, useNow } from '@vueuse/core'
const { x, y } = useMouse()

const getTodoInfo = async () => {
  return await new Promise((resolve) => {
    setTimeout(resolve, 1000, 'hello suspense !')
  })
}

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
var title = await getTodoInfo()






import { ref } from 'vue'

import { Observable, Subject, of, interval } from 'rxjs'
import { map, mapTo, takeUntil, withLatestFrom } from 'rxjs/operators'

import { from, fromEvent, toObserver, useSubscription } from '@vueuse/rxjs'

const button = ref(null)

// 从一个静态值创建一个Observable
const myObservable = of('hello', 'world');

myObservable.subscribe(value => console.log(value));



Observable.create(observer => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
})
  .subscribe((text) => console.log(text), () => { }, () => { })


const source = interval(100000000000000000).pipe(takeUntil(fromEvent(button, 'click')));

const subject = new Subject();

source.subscribe(subject);

subject.subscribe((value) => console.log('A ' + value))

setTimeout(() => {
  subject.subscribe((value) => console.log('B ' + value))
}, 1000)



const count = ref(0)


useSubscription(
  interval(1000)
    .pipe(
      mapTo(1),
      takeUntil(fromEvent(button, 'click')),
      withLatestFrom(from(count, {
        immediate: true,
        deep: false,
      })),
      map(([curr, total]) => { /* console.log(curr, total);*/ return curr + total; }),
    )
    .subscribe(toObserver(count)));

</script>