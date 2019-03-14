
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_SubstanceAmount} from './RTTI_SubstanceAmount';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
material: RTTI_CodeableConcept,
type: RTTI_CodeableConcept,
isDefining: t.boolean,
_isDefining: RTTI_Element,
amount: RTTI_SubstanceAmount
        });
        

        export var RTTI_SubstancePolymer_StartingMaterial:any = t.intersection([mandatory, partial]);
        

export type ISubstancePolymer_StartingMaterial = t.TypeOf<typeof RTTI_SubstancePolymer_StartingMaterial>;
        
        