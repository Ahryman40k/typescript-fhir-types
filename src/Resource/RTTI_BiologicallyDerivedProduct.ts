
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_BiologicallyDerivedProduct_Collection} from './RTTI_BiologicallyDerivedProduct_Collection';
import {RTTI_BiologicallyDerivedProduct_Processing} from './RTTI_BiologicallyDerivedProduct_Processing';
import {RTTI_BiologicallyDerivedProduct_Manipulation} from './RTTI_BiologicallyDerivedProduct_Manipulation';
import {RTTI_BiologicallyDerivedProduct_Storage} from './RTTI_BiologicallyDerivedProduct_Storage';

export enum BiologicallyDerivedProductProductCategoryKind {
                organ = 'organ',
tissue = 'tissue',
fluid = 'fluid',
cells = 'cells',
biologicalAgent = 'biologicalAgent'
            }
export enum BiologicallyDerivedProductStatusKind {
                available = 'available',
unavailable = 'unavailable'
            }
const BiologicallyDerivedProductProductCategoryKindKeys = t.keyof({
                [BiologicallyDerivedProductProductCategoryKind.organ]: null,
[BiologicallyDerivedProductProductCategoryKind.tissue]: null,
[BiologicallyDerivedProductProductCategoryKind.fluid]: null,
[BiologicallyDerivedProductProductCategoryKind.cells]: null,
[BiologicallyDerivedProductProductCategoryKind.biologicalAgent]: null
            });
const BiologicallyDerivedProductStatusKindKeys = t.keyof({
                [BiologicallyDerivedProductStatusKind.available]: null,
[BiologicallyDerivedProductStatusKind.unavailable]: null
            });


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
identifier: t.array(RTTI_Identifier),
productCategory: BiologicallyDerivedProductProductCategoryKindKeys,
_productCategory: RTTI_Element,
productCode: RTTI_CodeableConcept,
status: BiologicallyDerivedProductStatusKindKeys,
_status: RTTI_Element,
request: t.array(RTTI_Reference),
quantity: t.number,
_quantity: RTTI_Element,
parent: RTTI_Reference,
collection: RTTI_BiologicallyDerivedProduct_Collection,
processing: t.array(RTTI_BiologicallyDerivedProduct_Processing),
manipulation: RTTI_BiologicallyDerivedProduct_Manipulation,
storage: t.array(RTTI_BiologicallyDerivedProduct_Storage)
        });
        

        export var RTTI_BiologicallyDerivedProduct:any = t.intersection([mandatory, partial]);
        

export type IBiologicallyDerivedProduct = t.TypeOf<typeof RTTI_BiologicallyDerivedProduct>;
        
        