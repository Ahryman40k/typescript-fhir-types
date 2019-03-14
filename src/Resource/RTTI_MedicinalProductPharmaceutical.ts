
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicinalProductPharmaceutical_Characteristics} from './RTTI_MedicinalProductPharmaceutical_Characteristics';
import {RTTI_MedicinalProductPharmaceutical_RouteOfAdministration} from './RTTI_MedicinalProductPharmaceutical_RouteOfAdministration';




        const mandatory = t.type({
           resourceType: t.string,
administrableDoseForm: RTTI_CodeableConcept,
routeOfAdministration: t.array(RTTI_MedicinalProductPharmaceutical_RouteOfAdministration)
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
identifier: t.array(RTTI_Identifier),
unitOfPresentation: RTTI_CodeableConcept,
ingredient: t.array(RTTI_Reference),
device: t.array(RTTI_Reference),
characteristics: t.array(RTTI_MedicinalProductPharmaceutical_Characteristics)
        });
        

        export var RTTI_MedicinalProductPharmaceutical:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPharmaceutical = t.TypeOf<typeof RTTI_MedicinalProductPharmaceutical>;
        
        