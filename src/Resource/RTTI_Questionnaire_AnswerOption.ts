
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueDate: t.string,
_valueDate: RTTI_Element,
valueTime: t.string,
_valueTime: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueCoding: RTTI_Coding,
valueReference: RTTI_Reference,
initialSelected: t.boolean,
_initialSelected: RTTI_Element
        });
        

        export var RTTI_Questionnaire_AnswerOption:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaire_AnswerOption = t.TypeOf<typeof RTTI_Questionnaire_AnswerOption>;
        
        