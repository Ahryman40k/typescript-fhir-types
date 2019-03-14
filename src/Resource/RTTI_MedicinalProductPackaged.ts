
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_MarketingStatus} from './RTTI_MarketingStatus';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicinalProductPackaged_BatchIdentifier} from './RTTI_MedicinalProductPackaged_BatchIdentifier';
import {RTTI_MedicinalProductPackaged_PackageItem} from './RTTI_MedicinalProductPackaged_PackageItem';




        const mandatory = t.type({
           resourceType: t.string,
identifier: RTTI_Identifier,
packageItem: t.array(RTTI_MedicinalProductPackaged_PackageItem)
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
description: t.string,
_description: RTTI_Element,
marketingStatus: t.array(RTTI_MarketingStatus),
marketingAuthorization: RTTI_Reference,
manufacturer: t.array(RTTI_Reference),
batchIdentifier: t.array(RTTI_MedicinalProductPackaged_BatchIdentifier)
        });
        

        export var RTTI_MedicinalProductPackaged:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPackaged = t.TypeOf<typeof RTTI_MedicinalProductPackaged>;
        
        