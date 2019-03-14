
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';

export enum NarrativeStatusKind {
    generated = 'generated',
    extensions = 'extensions',
    additional = 'additional',
    empty = 'empty'
}
const NarrativeStatusKindKeys = t.keyof({
    [NarrativeStatusKind.generated]: null,
    [NarrativeStatusKind.extensions]: null,
    [NarrativeStatusKind.additional]: null,
    [NarrativeStatusKind.empty]: null
});


const mandatory = t.type({
    div: t.string
});


const partial = t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    status: NarrativeStatusKindKeys,
    _status: RTTI_Element
});


export var RTTI_Narrative:any = t.intersection([mandatory, partial]);


export type INarrative = t.TypeOf<typeof RTTI_Narrative>;

