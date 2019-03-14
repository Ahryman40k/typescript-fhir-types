
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
description: t.string,
_description: RTTI_Element,
type: RTTI_CodeableConcept,
capacity: RTTI_Quantity,
specimenQuantity: RTTI_Quantity,
additiveCodeableConcept: RTTI_CodeableConcept,
additiveReference: RTTI_Reference
        });
        

        export var RTTI_Specimen_Container:any = t.intersection([mandatory, partial]);
        

export type ISpecimen_Container = t.TypeOf<typeof RTTI_Specimen_Container>;
        
        