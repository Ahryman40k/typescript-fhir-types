
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Reference } from './RTTI_Reference';
import { RTTI_Element } from './RTTI_Element';




const mandatory = t.type({

});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        authorReference: RTTI_Reference,
        authorString: t.string,
        _authorString: RTTI_Element,
        time: t.string,
        _time: RTTI_Element,
        text: t.string,
        _text: RTTI_Element
});


export var RTTI_Annotation:any = t.intersection([mandatory, partial]);


export type IAnnotation = t.TypeOf<typeof RTTI_Annotation>;

