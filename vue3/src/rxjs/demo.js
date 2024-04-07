import { interval, merge, take, map } from "./core";

const dataStream1$ = interval(100).pipe(
  take(3),
  map((v) => v + "_1")
);
const dataStream2$ = interval(1600).pipe(
  take(3),
  map((v) => v + "2")
);

const dataStream3$ = dataStream1$.pipe(merge(dataStream2$));

dataStream3$.subscribe(console.log);
