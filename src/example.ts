  console.log('example')

  // first
  type TConcatFn = (a: string, b: string) => string
  const concat: TConcatFn = (a: string, b: string): string => a + b

  concat('hello ', 'world')

  // second
  interface IMyHometask {
    howIDoIt: string;
    simeArray: Array<string | number>;
    withData?: IMyHometask[];
  }

  const myHometask: IMyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
  }


  // third
  interface IMyArray<T> extends Array<T> {
  // interface IMyArray<T> {
    [n: number]: T;
    // reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
  }

  const tsArray: IMyArray<number> = [1, 2, 3]

  const result = tsArray.reduce<IMyArray<number>>((acc, current) => ([
    ...acc, // ругается, пока идея решить отнаследовав тип от Array
    current,
  ]), [])

  console.log({ result })

  // star
  // не сделал
