export interface DataMap<T> {
  [key: string]: T
}

export function createMap(value: string) {
  console.log('createMap=')
  let obj: DataMap<string> = {}
  return obj;
}