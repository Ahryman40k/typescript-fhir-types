
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueDecimal: t.number,
_valueDecimal: RTTI_Element,
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueDate: t.string,
_valueDate: RTTI_Element,
valueDateTime: t.string,
_valueDateTime: RTTI_Element,
valueTime: t.string,
_valueTime: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueUri: t.string,
_valueUri: RTTI_Element,
valueAttachment: RTTI_Attachment,
valueCoding: RTTI_Coding,
valueQuantity: RTTI_Quantity,
valueReference: RTTI_Reference
        });
        

        export var RTTI_Questionnaire_Initial:any = t.intersection([mandatory, partial]);
        

export type IQuestionnaire_Initial = t.TypeOf<typeof RTTI_Questionnaire_Initial>;
        
        