
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_NamingSystem_UniqueId, INamingSystem_UniqueId} from './RTTI_NamingSystem_UniqueId';

export enum NamingSystemStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum NamingSystemKindKind {
                codesystem = 'codesystem',
identifier = 'identifier',
root = 'root'
            }
const NamingSystemStatusKindKeys = t.keyof({
                [NamingSystemStatusKind.draft]: null,
[NamingSystemStatusKind.active]: null,
[NamingSystemStatusKind.retired]: null,
[NamingSystemStatusKind.unknown]: null
            });
const NamingSystemKindKindKeys = t.keyof({
                [NamingSystemKindKind.codesystem]: null,
[NamingSystemKindKind.identifier]: null,
[NamingSystemKindKind.root]: null
            });


            export interface INamingSystem {
                
                    /**
                     * This is a NamingSystem resource
                     */
                    resourceType: 'NamingSystem';
                    

                    /**
                     * Indicates how the system may be identified when referenced in electronic exchange.
                     */
                    uniqueId : INamingSystem_UniqueId[];
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * A natural language name identifying the naming system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * The status of this naming system. Enables tracking the life-cycle of the content.
                     */
                    status? : NamingSystemStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Indicates the purpose for the naming system - what kinds of things does it make unique?
                     */
                    kind? : NamingSystemKindKind;
                    

                    /**
                     * Extensions for kind
                     */
                    _kind? : IElement;
                    

                    /**
                     * The date  (and optionally time) when the naming system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the naming system changes.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the naming system.
                     */
                    publisher? : string;
                    

                    /**
                     * Extensions for publisher
                     */
                    _publisher? : IElement;
                    

                    /**
                     * Contact details to assist a user in finding and communicating with the publisher.
                     */
                    contact? : IContactDetail[];
                    

                    /**
                     * The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
                     */
                    responsible? : string;
                    

                    /**
                     * Extensions for responsible
                     */
                    _responsible? : IElement;
                    

                    /**
                     * Categorizes a naming system for easier search by grouping related naming systems.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * A free text natural language description of the naming system from a consumer's perspective. Details about what the namespace identifies including scope, granularity, version labeling, etc.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate naming system instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the naming system is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
                     */
                    usage? : string;
                    

                    /**
                     * Extensions for usage
                     */
                    _usage? : IElement;
                    
            }
        


        export const RTTI_NamingSystem: t.Type<INamingSystem> = t.recursion( 'INamingSystem', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('NamingSystem'),
uniqueId: t.array(RTTI_NamingSystem_UniqueId)
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
status: NamingSystemStatusKindKeys,
_status: RTTI_Element,
kind: NamingSystemKindKindKeys,
_kind: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
responsible: t.string,
_responsible: RTTI_Element,
type: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
usage: t.string,
_usage: RTTI_Element
        })
        
            ])
        );
        

        