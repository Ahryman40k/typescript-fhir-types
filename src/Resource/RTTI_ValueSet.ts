
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ValueSet_Compose, IValueSet_Compose} from './RTTI_ValueSet_Compose';
import {RTTI_ValueSet_Expansion, IValueSet_Expansion} from './RTTI_ValueSet_Expansion';

export enum ValueSetStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const ValueSetStatusKindKeys = t.keyof({
                [ValueSetStatusKind.draft]: null,
[ValueSetStatusKind.active]: null,
[ValueSetStatusKind.retired]: null,
[ValueSetStatusKind.unknown]: null
            });


            export interface IValueSet {
                
                    /**
                     * This is a ValueSet resource
                     */
                    resourceType: 'ValueSet';
                    
                
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
                     * An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this value set is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the value set is stored on different servers.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A short, descriptive, user-friendly title for the value set.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * The status of this value set. Enables tracking the life-cycle of the content.
                     */
                    status? : ValueSetStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A Boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                     */
                    experimental? : boolean;
                    

                    /**
                     * Extensions for experimental
                     */
                    _experimental? : IElement;
                    

                    /**
                     * The date  (and optionally time) when the value set was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the value set changes. (e.g. the 'content logical definition').
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the value set.
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
                     * A free text natural language description of the value set from a consumer's perspective.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate value set instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the value set is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
                     */
                    immutable? : boolean;
                    

                    /**
                     * Extensions for immutable
                     */
                    _immutable? : IElement;
                    

                    /**
                     * Explanation of why this value set is needed and why it has been designed as it has.
                     */
                    purpose? : string;
                    

                    /**
                     * Extensions for purpose
                     */
                    _purpose? : IElement;
                    

                    /**
                     * A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
                     */
                    copyright? : string;
                    

                    /**
                     * Extensions for copyright
                     */
                    _copyright? : IElement;
                    

                    /**
                     * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
                     */
                    compose? : IValueSet_Compose;
                    

                    /**
                     * A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
                     */
                    expansion? : IValueSet_Expansion;
                    
            }
        


        export const RTTI_ValueSet: t.Type<IValueSet> = t.recursion( 'IValueSet', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ValueSet')
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
url: t.string,
_url: RTTI_Element,
identifier: t.array(RTTI_Identifier),
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
status: ValueSetStatusKindKeys,
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
immutable: t.boolean,
_immutable: RTTI_Element,
purpose: t.string,
_purpose: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
compose: RTTI_ValueSet_Compose,
expansion: RTTI_ValueSet_Expansion
        })
        
            ])
        );
        

        