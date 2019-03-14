
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';




const mandatory = t.type({

});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        contentType: t.string,
        _contentType: RTTI_Element,
        language: t.string,
        _language: RTTI_Element,
        data: t.string,
        _data: RTTI_Element,
        url: t.string,
        _url: RTTI_Element,
        size: t.number,
        _size: RTTI_Element,
        hash: t.string,
        _hash: RTTI_Element,
        title: t.string,
        _title: RTTI_Element,
        creation: t.string,
        _creation: RTTI_Element
});


export var RTTI_Attachment:any = t.intersection([mandatory, partial]);


export type IAttachment = t.TypeOf<typeof RTTI_Attachment>;

