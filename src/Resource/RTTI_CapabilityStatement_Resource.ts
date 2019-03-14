
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_CapabilityStatement_Interaction} from './RTTI_CapabilityStatement_Interaction';

import {RTTI_CapabilityStatement_SearchParam} from './RTTI_CapabilityStatement_SearchParam';
import {RTTI_CapabilityStatement_Operation} from './RTTI_CapabilityStatement_Operation';

export enum CapabilityStatement_ResourceReferencePolicyKind {
                literal = 'literal',
logical = 'logical',
resolves = 'resolves',
enforced = 'enforced',
local = 'local'
            }
export enum CapabilityStatement_ResourceVersioningKind {
                noVersion = 'noVersion',
versioned = 'versioned',
versionedUpdate = 'versionedUpdate'
            }
export enum CapabilityStatement_ResourceConditionalReadKind {
                notSupported = 'notSupported',
modifiedSince = 'modifiedSince',
notMatch = 'notMatch',
fullSupport = 'fullSupport'
            }
export enum CapabilityStatement_ResourceConditionalDeleteKind {
                notSupported = 'notSupported',
single = 'single',
multiple = 'multiple'
            }
const CapabilityStatement_ResourceReferencePolicyKindKeys = t.keyof({
                [CapabilityStatement_ResourceReferencePolicyKind.literal]: null,
[CapabilityStatement_ResourceReferencePolicyKind.logical]: null,
[CapabilityStatement_ResourceReferencePolicyKind.resolves]: null,
[CapabilityStatement_ResourceReferencePolicyKind.enforced]: null,
[CapabilityStatement_ResourceReferencePolicyKind.local]: null
            });
const CapabilityStatement_ResourceVersioningKindKeys = t.keyof({
                [CapabilityStatement_ResourceVersioningKind.noVersion]: null,
[CapabilityStatement_ResourceVersioningKind.versioned]: null,
[CapabilityStatement_ResourceVersioningKind.versionedUpdate]: null
            });
const CapabilityStatement_ResourceConditionalReadKindKeys = t.keyof({
                [CapabilityStatement_ResourceConditionalReadKind.notSupported]: null,
[CapabilityStatement_ResourceConditionalReadKind.modifiedSince]: null,
[CapabilityStatement_ResourceConditionalReadKind.notMatch]: null,
[CapabilityStatement_ResourceConditionalReadKind.fullSupport]: null
            });
const CapabilityStatement_ResourceConditionalDeleteKindKeys = t.keyof({
                [CapabilityStatement_ResourceConditionalDeleteKind.notSupported]: null,
[CapabilityStatement_ResourceConditionalDeleteKind.single]: null,
[CapabilityStatement_ResourceConditionalDeleteKind.multiple]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
profile: t.string,
supportedProfile: t.array(t.string),
documentation: t.string,
_documentation: RTTI_Element,
interaction: t.array(RTTI_CapabilityStatement_Interaction),
versioning: CapabilityStatement_ResourceVersioningKindKeys,
_versioning: RTTI_Element,
readHistory: t.boolean,
_readHistory: RTTI_Element,
updateCreate: t.boolean,
_updateCreate: RTTI_Element,
conditionalCreate: t.boolean,
_conditionalCreate: RTTI_Element,
conditionalRead: CapabilityStatement_ResourceConditionalReadKindKeys,
_conditionalRead: RTTI_Element,
conditionalUpdate: t.boolean,
_conditionalUpdate: RTTI_Element,
conditionalDelete: CapabilityStatement_ResourceConditionalDeleteKindKeys,
_conditionalDelete: RTTI_Element,
referencePolicy: t.array(CapabilityStatement_ResourceReferencePolicyKindKeys),
_referencePolicy: t.array(RTTI_Element),
searchInclude: t.array(t.string),
_searchInclude: t.array(RTTI_Element),
searchRevInclude: t.array(t.string),
_searchRevInclude: t.array(RTTI_Element),
searchParam: t.array(RTTI_CapabilityStatement_SearchParam),
operation: t.array(RTTI_CapabilityStatement_Operation)
        });
        

        export var RTTI_CapabilityStatement_Resource:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Resource = t.TypeOf<typeof RTTI_CapabilityStatement_Resource>;
        
        