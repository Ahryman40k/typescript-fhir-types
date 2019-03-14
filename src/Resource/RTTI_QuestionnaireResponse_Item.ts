
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_QuestionnaireResponse_Answer} from './RTTI_QuestionnaireResponse_Answer';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
linkId: t.string,
_linkId: RTTI_Element,
definition: t.string,
_definition: RTTI_Element,
text: t.string,
_text: RTTI_Element,
answer: t.array(RTTI_QuestionnaireResponse_Answer),
item: t.array(RTTI_QuestionnaireResponse_Item)
        });
        

        export var RTTI_QuestionnaireResponse_Item:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaireResponse_Item = t.TypeOf<typeof RTTI_QuestionnaireResponse_Item>;
        
        