
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_SubstanceReferenceInformation_Gene} from './RTTI_SubstanceReferenceInformation_Gene';
import {RTTI_SubstanceReferenceInformation_GeneElement} from './RTTI_SubstanceReferenceInformation_GeneElement';
import {RTTI_SubstanceReferenceInformation_Classification} from './RTTI_SubstanceReferenceInformation_Classification';
import {RTTI_SubstanceReferenceInformation_Relationship} from './RTTI_SubstanceReferenceInformation_Relationship';
import {RTTI_SubstanceReferenceInformation_Target} from './RTTI_SubstanceReferenceInformation_Target';




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
gene: t.array(RTTI_SubstanceReferenceInformation_Gene),
geneElement: t.array(RTTI_SubstanceReferenceInformation_GeneElement),
classification: t.array(RTTI_SubstanceReferenceInformation_Classification),
relationship: t.array(RTTI_SubstanceReferenceInformation_Relationship),
target: t.array(RTTI_SubstanceReferenceInformation_Target)
        });
        

        export var RTTI_SubstanceReferenceInformation:any = t.intersection([mandatory, partial]);
        

export type ISubstanceReferenceInformation = t.TypeOf<typeof RTTI_SubstanceReferenceInformation>;
        
        