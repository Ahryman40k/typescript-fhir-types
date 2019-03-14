
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

import {RTTI_SubstanceSpecification_Moiety} from './RTTI_SubstanceSpecification_Moiety';
import {RTTI_SubstanceSpecification_Property} from './RTTI_SubstanceSpecification_Property';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_SubstanceSpecification_Structure} from './RTTI_SubstanceSpecification_Structure';
import {RTTI_SubstanceSpecification_SubstanceCode} from './RTTI_SubstanceSpecification_SubstanceCode';
import {RTTI_SubstanceSpecification_SubstanceName} from './RTTI_SubstanceSpecification_SubstanceName';
import {RTTI_SubstanceSpecification_MolecularWeight} from './RTTI_SubstanceSpecification_MolecularWeight';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
comment: t.string,
_comment: RTTI_Element,
stoichiometric: t.boolean,
_stoichiometric: RTTI_Element,
identifier: RTTI_Identifier,
type: RTTI_CodeableConcept,
referenceSource: t.array(t.string),
_referenceSource: t.array(RTTI_Element),
moiety: t.array(RTTI_SubstanceSpecification_Moiety),
property: t.array(RTTI_SubstanceSpecification_Property),
referenceInformation: RTTI_Reference,
structure: RTTI_SubstanceSpecification_Structure,
substanceCode: t.array(RTTI_SubstanceSpecification_SubstanceCode),
substanceName: t.array(RTTI_SubstanceSpecification_SubstanceName),
molecularWeight: t.array(RTTI_SubstanceSpecification_MolecularWeight),
polymer: RTTI_Reference
        });
        

        export var RTTI_SubstanceSpecification:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification = t.TypeOf<typeof RTTI_SubstanceSpecification>;
        
        