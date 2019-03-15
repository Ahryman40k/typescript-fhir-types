
import * as t from "io-ts"

describe('IoTs tryout', () => {
  test('Try to make the basic of scenario', () => {

    interface IA {
      id?: string
      extension?: Array<IB>
    }

    interface IB {
      id: string
      extension?: Array<IB>
      prop1?: IA
      prop2?: IA
    }

    const A: t.Type<IA> = t.recursion('IA', () =>
      t.partial({
        id: t.string,
        extension: t.array(B)
      })
    );

    const B: t.Type<IB> = t.recursion('IB', () =>
      t.intersection([t.type({
        id: t.string,
      }), 
      t.partial({
        extension: t.array(B),
        prop1: A,
        prop2: A
      })])
    );

    interface IC {
      id: string
      extension: Array<IB>
      prop1: IA
      prop2: IA
    }

    const C: t.Type<IC> = t.recursion('IC', () => {
      return t.type({
        id: t.string,
        extension: t.array(B),
        prop1: A,
        prop2: A
      })
    });

    let result = A.decode({
      id: 'A0',
      extension: [{
        id: 'B1',
        prop1: {
          id: 'A1'
        }
      }]
    })

    expect(result._tag).toBe('Right')

    result = C.decode({
      id: 'test',
      extension: [{
        id: 'ext1'
      }],
      prop1: {
        id: 'A1'
      },
      prop2: {
        id: 'A2'
      }
    })

    expect(result._tag).toBe('Right')

  })
})