
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';




const mandatory = t.type({

});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension)
});


export var RTTI_Element:any = t.intersection([mandatory, partial]);


export type IElement = t.TypeOf<typeof RTTI_Element>;

