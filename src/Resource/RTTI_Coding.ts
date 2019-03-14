
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';




const mandatory = t.type({

});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        system: t.string,
        _system: RTTI_Element,
        version: t.string,
        _version: RTTI_Element,
        code: t.string,
        _code: RTTI_Element,
        display: t.string,
        _display: RTTI_Element,
        userSelected: t.boolean,
        _userSelected: RTTI_Element
});


export var RTTI_Coding:any = t.intersection([mandatory, partial]);


export type ICoding = t.TypeOf<typeof RTTI_Coding>;

