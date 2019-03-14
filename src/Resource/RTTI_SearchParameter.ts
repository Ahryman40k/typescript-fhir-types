
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';


import {RTTI_SearchParameter_Component} from './RTTI_SearchParameter_Component';

export enum SearchParameterComparatorKind {
                eq = 'eq',
ne = 'ne',
gt = 'gt',
lt = 'lt',
ge = 'ge',
le = 'le',
sa = 'sa',
eb = 'eb',
ap = 'ap'
            }
export enum SearchParameterModifierKind {
                missing = 'missing',
exact = 'exact',
contains = 'contains',
not = 'not',
text = 'text',
in = 'in',
notIn = 'notIn',
below = 'below',
above = 'above',
type = 'type',
identifier = 'identifier',
ofType = 'ofType'
            }
export enum SearchParameterStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum SearchParameterTypeKind {
                number = 'number',
date = 'date',
string = 'string',
token = 'token',
reference = 'reference',
composite = 'composite',
quantity = 'quantity',
uri = 'uri',
special = 'special'
            }
export enum SearchParameterXpathUsageKind {
                normal = 'normal',
phonetic = 'phonetic',
nearby = 'nearby',
distance = 'distance',
other = 'other'
            }
const SearchParameterComparatorKindKeys = t.keyof({
                [SearchParameterComparatorKind.eq]: null,
[SearchParameterComparatorKind.ne]: null,
[SearchParameterComparatorKind.gt]: null,
[SearchParameterComparatorKind.lt]: null,
[SearchParameterComparatorKind.ge]: null,
[SearchParameterComparatorKind.le]: null,
[SearchParameterComparatorKind.sa]: null,
[SearchParameterComparatorKind.eb]: null,
[SearchParameterComparatorKind.ap]: null
            });
const SearchParameterModifierKindKeys = t.keyof({
                [SearchParameterModifierKind.missing]: null,
[SearchParameterModifierKind.exact]: null,
[SearchParameterModifierKind.contains]: null,
[SearchParameterModifierKind.not]: null,
[SearchParameterModifierKind.text]: null,
[SearchParameterModifierKind.in]: null,
[SearchParameterModifierKind.notIn]: null,
[SearchParameterModifierKind.below]: null,
[SearchParameterModifierKind.above]: null,
[SearchParameterModifierKind.type]: null,
[SearchParameterModifierKind.identifier]: null,
[SearchParameterModifierKind.ofType]: null
            });
const SearchParameterStatusKindKeys = t.keyof({
                [SearchParameterStatusKind.draft]: null,
[SearchParameterStatusKind.active]: null,
[SearchParameterStatusKind.retired]: null,
[SearchParameterStatusKind.unknown]: null
            });
const SearchParameterTypeKindKeys = t.keyof({
                [SearchParameterTypeKind.number]: null,
[SearchParameterTypeKind.date]: null,
[SearchParameterTypeKind.string]: null,
[SearchParameterTypeKind.token]: null,
[SearchParameterTypeKind.reference]: null,
[SearchParameterTypeKind.composite]: null,
[SearchParameterTypeKind.quantity]: null,
[SearchParameterTypeKind.uri]: null,
[SearchParameterTypeKind.special]: null
            });
const SearchParameterXpathUsageKindKeys = t.keyof({
                [SearchParameterXpathUsageKind.normal]: null,
[SearchParameterXpathUsageKind.phonetic]: null,
[SearchParameterXpathUsageKind.nearby]: null,
[SearchParameterXpathUsageKind.distance]: null,
[SearchParameterXpathUsageKind.other]: null
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
url: t.string,
_url: RTTI_Element,
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
derivedFrom: t.string,
status: SearchParameterStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
purpose: t.string,
_purpose: RTTI_Element,
code: t.string,
_code: RTTI_Element,
base: t.array(t.string),
_base: t.array(RTTI_Element),
type: SearchParameterTypeKindKeys,
_type: RTTI_Element,
expression: t.string,
_expression: RTTI_Element,
xpath: t.string,
_xpath: RTTI_Element,
xpathUsage: SearchParameterXpathUsageKindKeys,
_xpathUsage: RTTI_Element,
target: t.array(t.string),
_target: t.array(RTTI_Element),
multipleOr: t.boolean,
_multipleOr: RTTI_Element,
multipleAnd: t.boolean,
_multipleAnd: RTTI_Element,
comparator: t.array(SearchParameterComparatorKindKeys),
_comparator: t.array(RTTI_Element),
modifier: t.array(SearchParameterModifierKindKeys),
_modifier: t.array(RTTI_Element),
chain: t.array(t.string),
_chain: t.array(RTTI_Element),
component: t.array(RTTI_SearchParameter_Component)
        });
        

        export var RTTI_SearchParameter:any = t.intersection([mandatory, partial]);
        

export type ISearchParameter = t.TypeOf<typeof RTTI_SearchParameter>;
        
        