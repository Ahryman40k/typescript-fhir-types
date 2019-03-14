
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
customaryUnit: RTTI_Coding,
unit: RTTI_Coding,
conversionFactor: t.number,
_conversionFactor: RTTI_Element,
decimalPrecision: t.number,
_decimalPrecision: RTTI_Element
        });
        

        export var RTTI_ObservationDefinition_QuantitativeDetails:any = t.intersection([mandatory, partial]);
        

export type IObservationDefinition_QuantitativeDetails = t.TypeOf<typeof RTTI_ObservationDefinition_QuantitativeDetails>;
        
        