
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_SubstanceSpecification_Isotope} from './RTTI_SubstanceSpecification_Isotope';
import {RTTI_SubstanceSpecification_MolecularWeight} from './RTTI_SubstanceSpecification_MolecularWeight';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_SubstanceSpecification_StructuralRepresentation} from './RTTI_SubstanceSpecification_StructuralRepresentation';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
stereochemistry: RTTI_CodeableConcept,
opticalActivity: RTTI_CodeableConcept,
molecularFormula: t.string,
_molecularFormula: RTTI_Element,
molecularFormulaByMoiety: t.string,
_molecularFormulaByMoiety: RTTI_Element,
isotope: t.array(RTTI_SubstanceSpecification_Isotope),
molecularWeight: RTTI_SubstanceSpecification_MolecularWeight,
referenceSource: t.array(RTTI_Reference),
structuralRepresentation: t.array(RTTI_SubstanceSpecification_StructuralRepresentation)
        });
        

        export var RTTI_SubstanceSpecification_Structure:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_Structure = t.TypeOf<typeof RTTI_SubstanceSpecification_Structure>;
        
        