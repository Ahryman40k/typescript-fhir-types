
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_SubstanceSpecification_MolecularWeight} from './RTTI_SubstanceSpecification_MolecularWeight';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
nuclideId: RTTI_Identifier,
nuclideName: RTTI_CodeableConcept,
substitutionType: RTTI_CodeableConcept,
nuclideHalfLife: RTTI_Quantity,
amount: t.string,
_amount: RTTI_Element,
molecularWeight: RTTI_SubstanceSpecification_MolecularWeight
        });
        

        export var RTTI_SubstanceSpecification_Isotope:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_Isotope = t.TypeOf<typeof RTTI_SubstanceSpecification_Isotope>;
        
        