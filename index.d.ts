// Extend Object with should
interface Object {
  should: ShouldAssertion;
}

interface Promise<T> {
  should: PromisedAssertion<T>;
}

interface AssertionBool {
  false(msg?:string): void;
  False(msg?: string): void;
  ok(): void;
  true(msg?: string): void;
  True(msg?: string): void;
}

interface AssertionChaining<T> {
  // basic chaining grammar
  a: T;
  an: T;
  and: T;
  be: T;
  has: T;
  have: T;
  is: T;
  it: T;
  with: T;
  which: T;
  the: T;
  of: T;
  not: T;
}

interface ExistAssertions {
  exist<T>(object: T, message?: string): void;
  exists<T>(object: T, message?: string): void;
}

interface NegationAssertions<T> {
  not: T
}

interface GlobalShould extends ExistAssertions, NegationAssertions<ExistAssertions> {
  (object: any): ShouldAssertion

  deepEqual<T>(actual: T, expected: T, message?: string): void;
  doesNotThrow(block: () => void, message?: string): void;
  actual<T>(actual: T, expected: T, message?: string): void;
  fail<T>(actual: T, expected: T, message: string, operator: string): void;
  ifError(err: Error): void;

  notDeepEqual<T>(actual: T, expected: T, message?: string): void;
  notEqual<T>(actual: T, expected: T, message?: string): void;
  notStrictEqual<T>(actual: T, expected: T, message?: string): void;
  ok(value: any, message?: string): void;
  strictEqual<T>(actual: T, expected: T, message?: string): void;
  throws(block: Function, error?: Function, message?: string): void;
}

interface AssertionContain {
  containDeep(other: Array<any>): void;
  containDeepOrdered(other: Array<any>): void;
  containEql(other: Array<any>): void
}

interface AssertionEquality {
  eql(val: any, description?: string): void;
  deepEqual(val: any, description?: string): void
  equal(val: any, description?: string): void;
  equalOneOf(vals: Array<any>): void;
  oneOf(vals: Array<any>): void;
}

interface AssertionErrors {
  throw(message?: string|RegExp|Function|Object, properties?: Object): void;
  throwError(message?: string|RegExp|Function|Object, properties?: Object): void;
}

interface AssertionES6 {
  generator(): void;
  iterable(): void;
  iterator(): void;
}

interface AssertionHttp {
  header(field: string, val?: string): void;
  html(): void;
  json(): void;
  status(code: number): void;
}

interface AssertionMatching {
  match(other: Object, description?: string): void;
  matchAny(other: Object, description?: string): void;
  matchSome(other: Object, description?: string): void;
  matchEach(other: Object, description?: string): void;
  matchEvery(other: Object, description?: string): void;
}

interface AssertionNumbers {
  Infinity(): void;
  Nan(): void;
  above(n: number, description?: string): void;
  greaterThan(n: number, description?: string): void;
  aboveOrEqual(n: number, description?: string): void;
  greaterThanOrEqual(n: number, description?: string): void;
  approximately(value: number, delta: number, description?: string): void;
  below(n: number, description?: string): void;
  lessThan(n: number, description?: string): void;
  belowOrEqual(n: number, description?: string): void;
  lessThanOrEqual(n: number, description?: string): void;
  within(start: number, finish: number, description?: string): void;
}

interface AssertionTypes {
  Promise(): void;
  Array(): void;
  Boolean(): void;
  Date(): void;
  Error(): void;
  Function(): void;
  Number(): void;
  Object(): void;
  String(): void;
  arguments(): void;
  Arguments(): void;
  class(): void;
  Class(): void;
  instanceof(constructor: Function, description?: string): void;
  instanceOf(constructor: Function, description?: string): void;
  null(): void;
  Null(): void;
  type(type: string, description?: string): void;
  undefined(): void;
  Undefined(): void;
}

interface AssertionPromises<T> {
  finally: PromisedAssertion<T>;
  eventually: PromisedAssertion<T>;
  fulfilled(): Promise<T>;
  fulfilledWith(expected: T): Promise<T>;
  rejected(): Promise<T>;
  rejectedWith(expected: Error): Promise<T>;
}

interface AssertionProperty {
  empty(): void;
  enumerable(name: string, val?: any): void;
  enumerables(names: Array<any>|string|Object): void;
  keys(keys?: Array<any>|string): void;
  key(keys?: Array<any>|string): void;
  length(n: number, description?: string): void;
  lengthOf(n: number, description?: string): void;
  ownProperty(name: string, description?: string): void
  hasOwnProperty(name: string, description?: string): void
  properties(names: Array<any>|string|Object): void;
  property(name: string, val?: any): void;
  propertyByPath(properties: Array<any>|string): void;
  propertyWithDescriptor(name: string, desc: Object): void;
}

interface AssertionStrings {
  endWith(str: string, description?: string): void;
  startWith(str: string, description?: string): void;
}

interface IShouldAssertion
  extends
    AssertionBool,
    AssertionContain,
    AssertionEquality,
    AssertionErrors,
    AssertionES6,
    AssertionHttp,
    AssertionMatching,
    AssertionNumbers,
    AssertionProperty,
    AssertionStrings,
    AssertionTypes
{
}

interface ShouldAssertion
  extends IShouldAssertion, AssertionChaining<IShouldAssertion> {}

interface PromisedAssertion<T>
  extends
    AssertionPromises<T>,
    AssertionChaining<PromisedAssertion<T>>
{
  (obj: Promise<T>): PromisedAssertion<T>;
}



declare var should: GlobalShould
declare module "should" {
  export = should;
}
