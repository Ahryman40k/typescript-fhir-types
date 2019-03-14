
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
valueCodeableConcept: RTTI_CodeableConcept,
valueQuantity: RTTI_Quantity
        });
        

        export var RTTI_UserSession_Context:any = t.intersection([mandatory, partial]);
        

export type IUserSession_Context = t.TypeOf<typeof RTTI_UserSession_Context>;
        
        