
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_MedicinalProductClinicals_UndesirableEffects} from './RTTI_MedicinalProductClinicals_UndesirableEffects';
import {RTTI_MedicinalProductClinicals_TherapeuticIndication} from './RTTI_MedicinalProductClinicals_TherapeuticIndication';
import {RTTI_MedicinalProductClinicals_Contraindication} from './RTTI_MedicinalProductClinicals_Contraindication';
import {RTTI_MedicinalProductClinicals_Interactions} from './RTTI_MedicinalProductClinicals_Interactions';




        const mandatory = t.type({
           resourceType: t.string,
therapeuticIndication: t.array(RTTI_MedicinalProductClinicals_TherapeuticIndication)
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
undesirableEffects: t.array(RTTI_MedicinalProductClinicals_UndesirableEffects),
contraindication: t.array(RTTI_MedicinalProductClinicals_Contraindication),
interactions: t.array(RTTI_MedicinalProductClinicals_Interactions)
        });
        

        export var RTTI_MedicinalProductClinicals:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductClinicals = t.TypeOf<typeof RTTI_MedicinalProductClinicals>;
        
        