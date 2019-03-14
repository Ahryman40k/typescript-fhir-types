
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding} from './RTTI_Coding';

import {RTTI_MarketingStatus} from './RTTI_MarketingStatus';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicinalProduct_Name} from './RTTI_MedicinalProduct_Name';
import {RTTI_MedicinalProduct_ManufacturingBusinessOperation} from './RTTI_MedicinalProduct_ManufacturingBusinessOperation';
import {RTTI_MedicinalProduct_SpecialDesignation} from './RTTI_MedicinalProduct_SpecialDesignation';




        const mandatory = t.type({
           resourceType: t.string,
name: t.array(RTTI_MedicinalProduct_Name)
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
type: RTTI_CodeableConcept,
domain: RTTI_Coding,
combinedPharmaceuticalDoseForm: RTTI_CodeableConcept,
additionalMonitoringIndicator: RTTI_CodeableConcept,
specialMeasures: t.array(t.string),
_specialMeasures: t.array(RTTI_Element),
paediatricUseIndicator: RTTI_CodeableConcept,
productClassification: t.array(RTTI_CodeableConcept),
marketingStatus: t.array(RTTI_MarketingStatus),
marketingAuthorization: RTTI_Reference,
packagedMedicinalProduct: t.array(RTTI_Reference),
pharmaceuticalProduct: t.array(RTTI_Reference),
contraindication: t.array(RTTI_Reference),
interaction: t.array(RTTI_Reference),
therapeuticIndication: t.array(RTTI_Reference),
undesirableEffect: t.array(RTTI_Reference),
attachedDocument: t.array(RTTI_Reference),
masterFile: t.array(RTTI_Reference),
contact: t.array(RTTI_Reference),
clinicalTrial: t.array(RTTI_Reference),
crossReference: t.array(RTTI_Identifier),
manufacturingBusinessOperation: t.array(RTTI_MedicinalProduct_ManufacturingBusinessOperation),
specialDesignation: t.array(RTTI_MedicinalProduct_SpecialDesignation)
        });
        

        export var RTTI_MedicinalProduct:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProduct = t.TypeOf<typeof RTTI_MedicinalProduct>;
        
        