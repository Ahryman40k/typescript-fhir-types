
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_TestScript_RequestHeader} from './RTTI_TestScript_RequestHeader';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_Coding,
resource: t.string,
_resource: RTTI_Element,
label: t.string,
_label: RTTI_Element,
description: t.string,
_description: RTTI_Element,
accept: t.string,
_accept: RTTI_Element,
contentType: t.string,
_contentType: RTTI_Element,
destination: t.number,
_destination: RTTI_Element,
encodeRequestUrl: t.boolean,
_encodeRequestUrl: RTTI_Element,
origin: t.number,
_origin: RTTI_Element,
params: t.string,
_params: RTTI_Element,
requestHeader: t.array(RTTI_TestScript_RequestHeader),
requestId: t.string,
_requestId: RTTI_Element,
responseId: t.string,
_responseId: RTTI_Element,
sourceId: t.string,
_sourceId: RTTI_Element,
targetId: t.string,
_targetId: RTTI_Element,
url: t.string,
_url: RTTI_Element
        });
        

        export var RTTI_TestScript_Operation:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Operation = t.TypeOf<typeof RTTI_TestScript_Operation>;
        
        