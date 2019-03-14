
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_Identifier, IdentifierUseKind } from './RTTI_Identifier';




const mandatory = t.type({

});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        reference: t.string,
        _reference: RTTI_Element,
        type: t.string,
        _type: RTTI_Element,
        identifier: RTTI_Identifier,
        display: t.string,
        _display: RTTI_Element
});


export var RTTI_Reference:any = t.intersection([mandatory, partial]);


export type IReference = t.TypeOf<typeof RTTI_Reference>;

