
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';
import { RTTI_CodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Period } from './RTTI_Period';
import { RTTI_Reference } from './RTTI_Reference';

export enum IdentifierUseKind {
    usual = 'usual',
    official = 'official',
    temp = 'temp',
    secondary = 'secondary',
    old = 'old'
}
const IdentifierUseKindKeys = t.keyof({
    [IdentifierUseKind.usual]: null,
    [IdentifierUseKind.official]: null,
    [IdentifierUseKind.temp]: null,
    [IdentifierUseKind.secondary]: null,
    [IdentifierUseKind.old]: null
});


const mandatory = t.type({

});


const partial = t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    use: IdentifierUseKindKeys,
    _use: RTTI_Element,
    type: RTTI_CodeableConcept,
    system: t.string,
    _system: RTTI_Element,
    value: t.string,
    _value: RTTI_Element,
    period: RTTI_Period,
    assigner: RTTI_Reference
});


export var RTTI_Identifier:any = t.intersection([mandatory, partial]);


export type IIdentifier = t.TypeOf<typeof RTTI_Identifier>;

