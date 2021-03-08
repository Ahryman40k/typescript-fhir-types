/* EnumType.ts */
import * as t from 'io-ts';

// EnumType Class
export class EnumType<A> extends t.Type<A> {
  public readonly _tag: 'EnumType' = 'EnumType';
  /* eslint-disable @typescript-eslint/ban-types */
  public enumObject!: object;
  /* eslint-disable @typescript-eslint/ban-types */
  public constructor(e: object, name?: string) {
    super(
      name || 'enum',
      (u): u is A => Object.values(this.enumObject).some(v => v === u),
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
    this.enumObject = e;
  }
}

// simple helper function
/* eslint-disable @typescript-eslint/ban-types */
export const createEnumType = <T>(e: object, name?: string) =>
  new EnumType<T>(e, name);
