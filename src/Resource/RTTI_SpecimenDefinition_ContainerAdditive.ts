
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
additiveCodeableConcept: RTTI_CodeableConcept,
additiveReference: RTTI_Reference
        });
        

        export var RTTI_SpecimenDefinition_ContainerAdditive:any = t.intersection([mandatory, partial]);
        

export type ISpecimenDefinition_ContainerAdditive = t.TypeOf<typeof RTTI_SpecimenDefinition_ContainerAdditive>;
        
        