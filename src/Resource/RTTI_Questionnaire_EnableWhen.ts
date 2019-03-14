
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Reference} from './RTTI_Reference';

export enum Questionnaire_EnableWhenOperatorKind {
                exists = 'exists',
equal = 'equal',
notEqual = 'notEqual',
greater = 'greater',
lower = 'lower',
greaterOrEqual = 'greaterOrEqual',
lowerOrEqual = 'lowerOrEqual'
            }
const Questionnaire_EnableWhenOperatorKindKeys = t.keyof({
                [Questionnaire_EnableWhenOperatorKind.exists]: null,
[Questionnaire_EnableWhenOperatorKind.equal]: null,
[Questionnaire_EnableWhenOperatorKind.notEqual]: null,
[Questionnaire_EnableWhenOperatorKind.greater]: null,
[Questionnaire_EnableWhenOperatorKind.lower]: null,
[Questionnaire_EnableWhenOperatorKind.greaterOrEqual]: null,
[Questionnaire_EnableWhenOperatorKind.lowerOrEqual]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
question: t.string,
_question: RTTI_Element,
operator: Questionnaire_EnableWhenOperatorKindKeys,
_operator: RTTI_Element,
answerBoolean: t.boolean,
_answerBoolean: RTTI_Element,
answerDecimal: t.number,
_answerDecimal: RTTI_Element,
answerInteger: t.number,
_answerInteger: RTTI_Element,
answerDate: t.string,
_answerDate: RTTI_Element,
answerDateTime: t.string,
_answerDateTime: RTTI_Element,
answerTime: t.string,
_answerTime: RTTI_Element,
answerString: t.string,
_answerString: RTTI_Element,
answerCoding: RTTI_Coding,
answerQuantity: RTTI_Quantity,
answerReference: RTTI_Reference
        });
        

        export var RTTI_Questionnaire_EnableWhen:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaire_EnableWhen = t.TypeOf<typeof RTTI_Questionnaire_EnableWhen>;
        
        